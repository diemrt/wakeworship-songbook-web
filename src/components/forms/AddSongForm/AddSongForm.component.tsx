import { FieldValues, useForm } from "react-hook-form"
import FormSection from "../FormSection/FormSection.component"
import InputWrapper from "../Input/InputWrapper.component"
import TwFormGroup, { TwFormSubmitButton, TwFormatButton, TwInput, TwInputWrapper, TwLabel, TwSelect, TwSelectWrapper } from "./style"
import { errorFormLabels } from "../utils"
import SelectWrapper from "../Select/SelectWrapper.component"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useFetchFormItemsDataQuery } from "../../../redux/formItems/formItems.api"
import SkeletonWhileLoading from "../../SkeletonWhileLoading/SkeletonWhileLoading.component"
import { useSubmitSongItemMutation } from "../../../redux/songs/songs.api"

const AddSongForm = () => {
    const { data: formItemsData, isLoading } = useFetchFormItemsDataQuery(undefined)
    const { handleSubmit, control, register, reset, formState: { errors, isSubmitting } } = useForm<FieldValues>()
    const [ submit ] = useSubmitSongItemMutation()
    const onSubmit = async (values: FieldValues) => {
        await submit({values})
        reset()
    }

    return (
        <SkeletonWhileLoading isLoading={isLoading}>
            <TwFormGroup onSubmit={handleSubmit(onSubmit)}>
                <FormSection
                title="Informazioni essenziali"
                description="Completa le informazioni essenziali per inserire un nuovo brano.">
                        <InputWrapper
                        InputComponent={TwInput}
                        InputWrapperComponent={TwInputWrapper}
                        LabelComponent={TwLabel}
                        name="title"
                        label="Titolo"
                        placeholder="Titolo"
                        type="text"
                        register={register}
                        errors={errors}
                        rules={{ required: errorFormLabels.REQUIRED }}
                        />
                        <SelectWrapper
                        key={`key_${Date()}`}
                        SelectComponent={TwSelect}
                        SelectWarpperComponent={TwSelectWrapper}
                        LabelComponent={TwLabel}
                        name="key"
                        label="Chiave"
                        register={register}
                        errors={errors}
                        control={control}
                        options={ formItemsData?.chordTypeItems ?? []}
                        rules={{ required: errorFormLabels.REQUIRED }}
                        />
                        <InputWrapper
                        InputComponent={TwInput}
                        InputWrapperComponent={TwInputWrapper}
                        LabelComponent={TwLabel}
                        name="capo"
                        label="Capotasto"
                        placeholder="Capotasto"
                        type="number"
                        register={register}
                        />
                </FormSection>
                <FormSection 
                title="Contenuto brano" 
                description="Inserisci il contenuto formattato secondo lo standard definito.">
                    <InputWrapper
                            InputComponent={TwInput}
                            InputWrapperComponent={TwInputWrapper}
                            LabelComponent={TwLabel}
                            name="content"
                            label="Contenuto"
                            placeholder="Contenuto"
                            type="text"
                            register={register}
                            errors={errors}
                            rules={{ required: errorFormLabels.REQUIRED }}
                            />
                        <TwFormatButton type="button">
                            <FontAwesomeIcon icon={["fas", "paragraph"]} />
                            Formatta
                        </TwFormatButton>
                </FormSection>
                <TwFormSubmitButton type="submit" isLoading={isSubmitting} icon="file-arrow-up">Aggiungi</TwFormSubmitButton>
            </TwFormGroup>
        </SkeletonWhileLoading>
    )
}
export default AddSongForm