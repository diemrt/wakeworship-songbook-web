import { createReducer } from "@reduxjs/toolkit"
import { AsyncStatusEnum } from "./auth.utils"
import { authApi } from "./auth.api"
import { toast } from "react-toastify"

export type CurrentUser = {
    email: string
    id: string,
    username: string
}
  
export type AuthState = {
  fetchStatus: [string | null, string]
  submitStatus: [string | null, string]
  currentUser: CurrentUser | null
  error: { [key: string]: any } | null
}

const INITIAL_STATE: AuthState = {
  fetchStatus: [null, AsyncStatusEnum.IDLE],
  submitStatus: [null, AsyncStatusEnum.IDLE],
  currentUser: null,
  error: null
}

const authReducer = createReducer(INITIAL_STATE, builder => {
    builder
        .addMatcher(authApi.endpoints.login.matchFulfilled, (state, action) => {
            if(action.payload){
                state.currentUser = action.payload.currentUser.data
                state.submitStatus = ['userLogin', AsyncStatusEnum.SUCCESS]
            }
        })
        .addMatcher(authApi.endpoints.checkUserSession.matchPending, (state, action) => {
          state.fetchStatus = [action.meta.arg.endpointName, AsyncStatusEnum.LOADING]
        })
        .addMatcher(authApi.endpoints.checkUserSession.matchFulfilled, (state, action) => {
          state.fetchStatus = [action.meta.arg.endpointName, AsyncStatusEnum.SUCCESS]
          if(action.payload) {
            state.currentUser = action.payload.currentUser.data
          }
        })
        .addMatcher(authApi.endpoints.checkUserSession.matchRejected, (state, action) => {
          if(action.payload) {
            state.submitStatus = [action.meta.arg.endpointName, AsyncStatusEnum.FAILURE]
          }
        })
        .addMatcher(authApi.endpoints.sendUserResetPasswordEmail.matchFulfilled, (state, action) => {
          toast.success("Operazione eseguita con successo. Se questa email è collegata al tuo account, potrai reimpostare la password.");
        })
        .addMatcher(authApi.endpoints.logOut.matchFulfilled, (state, action) => {
          return {
            ...INITIAL_STATE,
            submitStatus: ['userLogout', AsyncStatusEnum.SUCCESS]
          }
        })
})

export default authReducer