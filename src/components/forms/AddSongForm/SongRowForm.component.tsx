import { Control, FieldErrors, FieldValues, UseFormRegister, useFieldArray } from "react-hook-form"
import SelectWrapper from "../Select/SelectWrapper.component"
import {TwAddSongGenericSelect, TwAddSongGenericSelectWarpper, TwSongPhraseInput, TwSongPhraseInputWrapper, TwSongRowPhraseChordWrapper, TwSongRowWrapper } from "./style"
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
        <TwSongRowWrapper>
            {
                chordPhraseFields.map((chordPhrase, chordPhraseIndex) => (
                    <TwSongRowPhraseChordWrapper key={chordPhrase.id}>
                        <SelectWrapper 
                            SelectWarpperComponent={TwAddSongGenericSelectWarpper}
                            SelectComponent={TwAddSongGenericSelect}
                            name={`blocks.${blockIndex}.rows.${rowIndex}.chordPhrases.${chordPhraseIndex}.chordType` as const}
                            register={register}
                            errors={errors}
                            label="Accordo"
                            control={control}
                            options={formItemsData?.chordTypeItems ?? []}
                            rules={{ required: errorFormLabels.REQUIRED }}
                        /> 
                        <InputWrapper 
                            InputComponent={TwSongPhraseInput}
                            InputWrapperComponent={TwSongPhraseInputWrapper}
                            name={`blocks.${blockIndex}.rows.${rowIndex}.chordPhrases.${chordPhraseIndex}.phrase` as const}
                            placeholder="Testo"
                            type="text"
                            label="Testo"
                            register={register}
                            errors={errors}
                            rules={{ required: errorFormLabels.REQUIRED }}
                        />
                    </TwSongRowPhraseChordWrapper>
                ))
            }
        </TwSongRowWrapper>
    )
}

export default SongRowForm