import { FieldValues, useFieldArray, useForm } from "react-hook-form"
import InputWrapper from "../Input/InputWrapper.component"
import { errorFormLabels } from "../utils"
import TwSongTitleInputWrapper, { TwAddSongWrapper, TwSongTitleInput, TwSongTitleLabel } from "./style"
import SongBlockForm from "./SongBlockForm.component"

const AddSongForm = () => {
    const formItemsData = {
        chordTypeItems: [{label:"Do",value:"c"},{label:"Sol",value:"g"},{label:"La",value:"a"}],
        songBlockTypeItems: [{label:"Strofa",value:"verse"},{label:"Coro",value:"chours"}]
    }
    const { register, control, formState: { errors } } = useForm<FieldValues>({
        defaultValues: {
            title: "1. La musica",
            blocks: [
                {
                    type: {
                        label: "Strofa",
                        value: "verse"
                    },
                    rows: [
                        {
                            chordPhrases: [
                                {
                                    chordType: {
                                        label: "Do",
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

    const { fields: blockFields } = useFieldArray({control, name: "blocks"})

    return (
        <TwAddSongWrapper>
            <InputWrapper 
            InputComponent={TwSongTitleInput}
            InputWrapperComponent={TwSongTitleInputWrapper}
            LabelComponent={TwSongTitleLabel}
            name="title"
            placeholder="Titolo"
            type="text"
            label="Titolo"
            register={register}
            errors={errors}
            rules={{ required: errorFormLabels.REQUIRED }}
            />
            {
                blockFields.map((block, blockIndex) => (
                    <SongBlockForm 
                    control={control}
                    errors={errors}
                    block={block}
                    blockIndex={blockIndex}
                    formItemsData={formItemsData}
                    register={register}
                    key={block.id}
                    />
                ))
            }
        </TwAddSongWrapper>
    )
}
export default AddSongForm