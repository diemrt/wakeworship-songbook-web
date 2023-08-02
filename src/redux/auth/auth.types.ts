
export type ResetPasswordFormType = {
    password: string
    oobCode: string
}

export type ResetPasswordReqType = {
    email: string
    name?: string
    id?: string
  }