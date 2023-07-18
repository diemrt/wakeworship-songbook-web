import { FieldValues, useFieldArray, useForm } from "react-hook-form"
import InputWrapper from "../Input/InputWrapper.component"
import { errorFormLabels } from "../utils"
import TwSongTitleInputWrapper, { TwAddSongWrapper, TwSongTitleInput } from "./style"

const AddSongForm = () => {
    const { register, control, formState: { errors } } = useForm<FieldValues>({
        defaultValues: {
            title: "1. La musica",
            blocks: [
                {
                    type: {
                        lable: "Strofa",
                        value: "verse"
                    },
                    rows: [
                        {
                            chordPhrases: [
                                {
                                    chordType: {
                                        lable: "Do",
                                        value: "c"
                                    },
                                    phrase: "La musica non ce"
                                },
                                {
                                    chordType: {
                                        lable: "Sol",
                                        value: "g"
                                    },
                                    phrase: " e va bene così"
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    })
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
                    <></>
                ))
            }
        </TwAddSongWrapper>
    )
}
export default AddSongForm