import { Control, FieldErrors, FieldValues, UseFormRegister, useFieldArray } from "react-hook-form"
import SelectWrapper from "../Select/SelectWrapper.component"
import { TwSongBlockSelect, TwSongBlockSelectWarpper, TwSongTitleLabel } from "./style"
import { errorFormLabels } from "../utils"
import SongRowForm from "./SongRowForm.component"

interface Props{
    block: any,
    blockIndex: number,
    register: UseFormRegister<FieldValues>,
    errors: FieldErrors<FieldValues>,
    control: Control<FieldValues, any>,
    formItemsData: any
}
const SongBlockForm = ({
    block,
    blockIndex,
    register,
    errors,
    control,
    formItemsData
}: Props) => {

    const { fields: rowFields } = useFieldArray({control, name: `blocks.${blockIndex}.rows`})

    return (
        <>
            <SelectWrapper 
                SelectWarpperComponent={TwSongBlockSelectWarpper}
                LabelComponent={TwSongTitleLabel}
                SelectComponent={TwSongBlockSelect}
                name={`blocks.${blockIndex}.type` as const}
                register={register}
                errors={errors}
                label="Sezione"
                control={control}
                options={formItemsData?.songBlockTypeItems ?? []}
                rules={{ required: errorFormLabels.REQUIRED }}
            /> 
            <>{
                rowFields.map((row, rowIndex) => (
                    <SongRowForm
                        control={control}
                        errors={errors}
                        row={block}
                        rowIndex={rowIndex}
                        blockIndex={blockIndex}
                        formItemsData={formItemsData}
                        register={register}
                        key={row.id}
                    />
                ))
            }
            </>
        </>
    )
}
export default SongBlockForm