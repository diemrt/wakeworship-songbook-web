import { Control, FieldErrors, FieldValues, UseFormRegister, useFieldArray } from "react-hook-form"
import SelectWrapper from "../Select/SelectWrapper.component"
import { TwAddSongGenericSelect, TwAddSongGenericSelectWarpper, TwSongBlockWrapper } from "./style"
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
        <TwSongBlockWrapper>
            <SelectWrapper 
                SelectWarpperComponent={TwAddSongGenericSelectWarpper}
                SelectComponent={TwAddSongGenericSelect}
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
        </TwSongBlockWrapper>
    )
}
export default SongBlockForm