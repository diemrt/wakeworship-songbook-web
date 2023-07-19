import { isFulfilled } from '@reduxjs/toolkit'
import type { MiddlewareAPI, Middleware } from '@reduxjs/toolkit'
import { toast } from "react-toastify"
import { isActiveToastifyEndpoint } from './utils'

export const rtkQuerySuccessLogger: Middleware =
  (api: MiddlewareAPI) => (next) => (action) => {    
    if (isActiveToastifyEndpoint(action) && isFulfilled(action)) {
      toast.success(
        "Operazione eseguita con successo!"
      )
    }

    return next(action)
  }