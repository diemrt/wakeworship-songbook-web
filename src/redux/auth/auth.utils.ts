import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query"
import { FirebaseErrorMessagesIt } from "../../firebase"
import { apiRootUrl } from "../api/utils"

export const AsyncStatusEnum = {
  IDLE: 'idle',
  LOADING: 'loading',
  SUCCESS: 'success',
  FAILURE: 'failure',
}

export type TranslateFirebaseErrors = {
    code?: 'auth/too-many-requests' | 'auth/wrong-password' | 'auth/user-not-found'
    message?: string
  }
export const translateFirebaseErrorMessage = 
(error: TranslateFirebaseErrors): FetchBaseQueryError => {
  if(error.code) {
    return {
      status: 400,
      data: {
        error: {
          message: FirebaseErrorMessagesIt[error.code]
        }
      }
    }
  }

  if(error.message) {
    return {
      status: 400,
      data: {
        error: {
          message: error.message
        }
      }
    }
  }

  return {
    status: 400,
    data: {
      error: {
        message: "Si è verificato un problema!"
      }
    }
  }
}

export function getAbUser(accessToken: string, uid: string): Promise<{data: any}> {
  return new Promise((resolve, reject) => {
    fetch(`${apiRootUrl}/users?uid=${uid}`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    }).then(response => response.json())
    .then(response => resolve(response))
    .catch((error) => {
      reject(error)
    })
  })
}