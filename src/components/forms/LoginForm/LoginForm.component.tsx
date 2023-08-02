import TwLoginWrapper, { TwLoginHeader, TwLoginHeaderDescription, TwLoginHeaderTitle, TwLoginForm, TwForgotPasswordLink, TwLoginInput, TwLoginInputWrapper, TwLoginLabel, TwLoginButton } from "./style"
import { useForm, SubmitHandler } from "react-hook-form";
import { useLoginMutation } from "../../../redux/auth/auth.api";
import InputWrapper from "../Input/InputWrapper.component";
import { TwLogo } from "../../Navbar/style";

type LoginFields = {
    email: string,
    password: string
}

const LoginForm = () => {
    const [login, { isLoading }] = useLoginMutation();
    const {
        register,
        handleSubmit,
        formState: {
          errors,
        }
      } = useForm<LoginFields>();
    const onSubmit: SubmitHandler<LoginFields> = data => login({email: data.email, password: data.password});

    return (
        <TwLoginWrapper>
            <TwLoginHeader>
                <TwLoginHeaderTitle>
                    <TwLogo src="/logo.svg" />
                    Songbook
                </TwLoginHeaderTitle>
                <TwLoginHeaderDescription>Bentornato! Inserisci le tue credenziali per accedere 🔓</TwLoginHeaderDescription>
            </TwLoginHeader>
            <TwLoginForm onSubmit={handleSubmit(onSubmit)}>
                <InputWrapper
                    InputComponent={TwLoginInput}
                    InputWrapperComponent={TwLoginInputWrapper}
                    LabelComponent={TwLoginLabel}
                    name="email"
                    label="Email"
                    placeholder="tu@esempio.com"
                    type="text"
                    className="form-control"
                    errors={errors}
                    register={register}
                    rules={{
                        required: "Campo obbligatorio 🚨",
                        pattern: {
                        value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: "Email non valida 🚨"
                        }
                    }}
                    />
                <InputWrapper 
                    InputComponent={TwLoginInput}
                    InputWrapperComponent={TwLoginInputWrapper}
                    LabelComponent={TwLoginLabel}
                    name="password"
                    label="Password"
                    placeholder="Massimo 80 caratteri"
                    type="password"
                    className="form-control"
                    errors={errors}
                    register={register}
                    rules={{
                        required: "Campo obbligatorio 🚨",
                        maxLength: 80,
                    }}
                />
                <TwLoginButton type="submit" icon="right-to-bracket" isLoading={isLoading}>
                    Accedi
                </TwLoginButton>
                <TwForgotPasswordLink to="/reset-pw">Password dimenticata?</TwForgotPasswordLink>
            </TwLoginForm>
        </TwLoginWrapper>
    )
}

export default LoginForm