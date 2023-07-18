import { useFieldArray, useForm } from "react-hook-form"
import InputWrapper from "../Input/InputWrapper.component"
import { errorFormLabels } from "../utils"
import TwSongTitleInputWrapper, { TwAddSongWrapper, TwSongTitleInput } from "./style"

const AddSongForm = () => {
    const { register, control, formState: { errors } } = useForm()
    const { fields } = useFieldArray({
        control, // control props comes from useForm (optional: if you are using FormContext)
        name: "blocks", // unique name for your Field Array
        
      })

    return (
        <TwAddSongWrapper>
            <InputWrapper 
            InputComponent={TwSongTitleInput}
            InputWrapperComponent={TwSongTitleInputWrapper}
            name="title"
            placeholder="Titolo"
            type="text"
            register={register}
            errors={errors}
            rules={{ required: errorFormLabels.REQUIRED }}
            />
            {
                fields.map((block, index) => (
                    <InputWrapper 
                    key={block.id}
                    InputComponent={TwSongTitleInput}
                    InputWrapperComponent={TwSongTitleInputWrapper}
                    name={`blocks.${index}.value`}
                    placeholder="Strofa"
                    type="text"
                    register={register}
                    errors={errors}
                    rules={{ required: errorFormLabels.REQUIRED }}
                    />
                ))
            }
        </TwAddSongWrapper>
    )
}
export default AddSongForm