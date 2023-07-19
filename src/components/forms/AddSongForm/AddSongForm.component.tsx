import { FieldValues, useFieldArray, useForm } from "react-hook-form"
import InputWrapper from "../Input/InputWrapper.component"
import { errorFormLabels } from "../utils"
import { TwAddSongGenericLable, TwAddSongGenericSelect, TwAddSongGenericSelectWarpper, TwAddSongHeader, TwAddSongSubtitlesWrapper, TwAddSongWrapper, TwSongSubtitleInput, TwSongSubtitleInputWrapper, TwSongTitleInput, TwSongTitleInputWrapper } from "./style"
import SongBlockForm from "./SongBlockForm.component"
import SelectWrapper from "../Select/SelectWrapper.component"

const AddSongForm = () => {
    const formItemsData = {
        chordTypeItems: [{label:"Do",value:"c"},{label:"Sol",value:"g"},{label:"La",value:"a"}],
        songBlockTypeItems: [{label:"Strofa",value:"verse"},{label:"Coro",value:"chours"}]
    }
    const { register, control, formState: { errors } } = useForm<FieldValues>({
        defaultValues: {
            title: "1. La musica",
            key: {
                label: "Do",
                value: "c"
            },
            capo: 0,
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
                                        label: "La",
                                        value: "a"
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
            <TwAddSongHeader>
                <InputWrapper 
                InputComponent={TwSongTitleInput}
                InputWrapperComponent={TwSongTitleInputWrapper}
                name="title"
                placeholder="Titolo"
                type="text"
                label="Titolo"
                register={register}
                errors={errors}
                rules={{ required: errorFormLabels.REQUIRED }}
                />
                <TwAddSongSubtitlesWrapper>
                    <SelectWrapper 
                    SelectWarpperComponent={TwAddSongGenericSelectWarpper}
                    LabelComponent={TwAddSongGenericLable}
                    SelectComponent={TwAddSongGenericSelect}
                    name="key"
                    register={register}
                    label="Chiave:"
                    control={control}
                    options={formItemsData?.chordTypeItems ?? []}
                    /> 
                    <InputWrapper 
                    InputComponent={TwSongSubtitleInput}
                    InputWrapperComponent={TwSongSubtitleInputWrapper}
                    LabelComponent={TwAddSongGenericLable}
                    name="capo"
                    placeholder="Capotasto"
                    type="number"
                    label="Capotasto:"
                    register={register}
                    />
                </TwAddSongSubtitlesWrapper>
            </TwAddSongHeader>
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