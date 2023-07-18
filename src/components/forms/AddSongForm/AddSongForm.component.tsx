import { useForm } from "react-hook-form"
import InputWrapper from "../Input/InputWrapper.component"
import TwSongTitleInputWrapper, { TwAddSongWrapper, TwSongTitleInput } from "./style"

const AddSongForm = () => {
    const { register } = useForm()

    return (
        <TwAddSongWrapper>
            <InputWrapper 
            InputComponent={TwSongTitleInput}
            InputWrapperComponent={TwSongTitleInputWrapper}
            name="title"
            placeholder="Titolo"
            type="text"
            register={register}
            />
        </TwAddSongWrapper>
    )
}
export default AddSongForm