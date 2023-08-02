import { confirmPasswordReset, signInWithEmailAndPassword } from "firebase/auth";
import { api } from "../api";
import { auth, getCurrentUser, sendResetPwEmail, userSignOut } from "../../firebase";
import { TranslateFirebaseErrors, getAbUser, translateFirebaseErrorMessage } from "./auth.utils";
import { ResetPasswordFormType, ResetPasswordReqType } from "./auth.types";
import { buildReadableError } from "../api/utils";

export const authApi = api.injectEndpoints({
    endpoints: build => ({
        login: build.mutation({
            async queryFn(args){
                try {
                    const { user } = await signInWithEmailAndPassword(auth, args.email, args.password)
                    const accessToken = await user.getIdToken()
                    const abUser = await getAbUser(accessToken, user.uid);
                    const currentUser = {
                        ...abUser
                    }
                    return { data: { currentUser } }
                }
                catch(err) {
                    const message = translateFirebaseErrorMessage(err as TranslateFirebaseErrors)
                    return { error: message }
                }
            }
        }),
        sendUserResetPasswordEmail: build.mutation({
          async queryFn(args: ResetPasswordReqType) {
            try {
              await sendResetPwEmail(args.email)
              return { data: undefined }
            }
            catch(err){
              return buildReadableError(500, new Error("Non è stato possibile inviare l'email per il recupero password. Contattare l'assistenza"))
            }
          }
        }),    
        resetUserPassword: build.mutation({
            async queryFn(args: ResetPasswordFormType) {
              try {
                await confirmPasswordReset(auth, args.oobCode, args.password)
                return { data: undefined }
              }
              catch(err) {
                return buildReadableError(400, new Error("Codice OOBCODE scaduto, richiedi nuovamente il reset password per riceverne uno valido via email."))
              }
            }
          }),
        checkUserSession: build.query({
            async queryFn(args){
                const user = await getCurrentUser();
                const accessToken = await user.getIdToken()
                if(user){
                    const abUser = await getAbUser(accessToken, user.uid);
                    const currentUser = {
                        ...abUser
                    }
                    return { data: { currentUser } }
                }
                return { data: null }
            }
        }),
        logOut: build.mutation({
          async queryFn(args) {
            await userSignOut()
            return { data: null }
          }
        })
    })
})

export const {
    useCheckUserSessionQuery,
    useLoginMutation,
    useResetUserPasswordMutation,
    useSendUserResetPasswordEmailMutation,
    useLogOutMutation
  } = authApi