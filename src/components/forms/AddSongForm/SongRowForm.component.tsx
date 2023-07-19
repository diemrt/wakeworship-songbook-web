import { Control, FieldErrors, FieldValues, UseFormRegister, useFieldArray } from "react-hook-form"
import SelectWrapper from "../Select/SelectWrapper.component"
import TwSongTitleInputWrapper, { TwSongBlockSelect, TwSongBlockSelectWarpper, TwSongTitleInput, TwSongTitleLabel } from "./style"
import { errorFormLabels } from "../utils"
import InputWrapper from "../Input/InputWrapper.component"

interface Props {
    row: any,
    rowIndex: number,
    blockIndex: number,
    register: UseFormRegister<FieldValues>,
    errors: FieldErrors<FieldValues>,
    control: Control<FieldValues, any>,
    formItemsData: any
}
const SongRowForm = ({
    row,
    rowIndex,
    blockIndex,
    register,
    errors,
    control,
    formItemsData
}: Props) => {

    const { fields: chordPhraseFields } = useFieldArray({control, name: `blocks.${blockIndex}.rows.${rowIndex}.chordPhrases`})

    return (
        <>
            {
                chordPhraseFields.map((chordPhrase, chordPhraseIndex) => (
                    <div key={chordPhrase.id}>
                        <SelectWrapper 
                            SelectWarpperComponent={TwSongBlockSelectWarpper}
                            LabelComponent={TwSongTitleLabel}
                            SelectComponent={TwSongBlockSelect}
                            name={`blocks.${blockIndex}.rows.${rowIndex}.chordPhrases.${chordPhraseIndex}.chordType` as const}
                            register={register}
                            errors={errors}
                            label="Accordo"
                            control={control}
                            options={formItemsData?.chordTypeItems ?? []}
                            rules={{ required: errorFormLabels.REQUIRED }}
                        /> 
                        <InputWrapper 
                            InputComponent={TwSongTitleInput}
                            InputWrapperComponent={TwSongTitleInputWrapper}
                            LabelComponent={TwSongTitleLabel}
                            name={`blocks.${blockIndex}.rows.${rowIndex}.chordPhrases.${chordPhraseIndex}.phrase` as const}
                            placeholder="Testo"
                            type="text"
                            label="Testo"
                            register={register}
                            errors={errors}
                            rules={{ required: errorFormLabels.REQUIRED }}
                        />
                    </div>
                ))
            }
        </>
    )
}

export default SongRowForm