import { SubmitHandler, useForm } from "react-hook-form";
import { useSendUserResetPasswordEmailMutation } from "../../../redux/auth/auth.api";
import TwLoginWrapper, { TwLoginButton, TwLoginForm, TwLoginHeader, TwLoginHeaderDescription, TwLoginHeaderTitle, TwLoginInput, TwLoginInputWrapper, TwLoginLabel } from "../LoginForm/style";
import NavigationButton from "../../NavigationButton/NavigationButton.component";
import InputWrapper from "../Input/InputWrapper.component";

type ResetPwFields = {
    email: string
}
const ResetPwForm = () => {
    const [ sendResetPwEmail, { isLoading }] = useSendUserResetPasswordEmailMutation();
    const {
        register,
        handleSubmit,
        formState: {
          errors,
        }
      } = useForm<ResetPwFields>();
      const onSubmit: SubmitHandler<ResetPwFields> = data => sendResetPwEmail({email: data.email});

      return (
        <TwLoginWrapper>
            <NavigationButton icon="arrow-left">
                Indietro
            </NavigationButton>
            <TwLoginHeader>
                <TwLoginHeaderTitle>Recupera credenziali</TwLoginHeaderTitle>
                <TwLoginHeaderDescription>Inserisci l'email associata al tuo account. Assicurati di inserire l'indirizzo email corretto e controlla la cartella di spam.</TwLoginHeaderDescription>
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
                    <TwLoginButton type="submit" icon="paper-plane" isLoading={isLoading}>
                        Conferma
                    </TwLoginButton>
            </TwLoginForm>
        </TwLoginWrapper>
      )
}

export default ResetPwForm