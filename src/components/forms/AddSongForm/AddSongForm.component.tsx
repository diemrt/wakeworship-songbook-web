import { FieldValues, useForm } from "react-hook-form"
import FormSection from "../FormSection/FormSection.component"
import InputWrapper from "../Input/InputWrapper.component"
import TwFormGroup, { TwFormSubmitButton, TwFormatButton, TwInput, TwInputWrapper, TwLabel, TwSelect, TwSelectWrapper } from "./style"
import { errorFormLabels } from "../utils"
import SelectWrapper from "../Select/SelectWrapper.component"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useFetchFormItemsDataQuery } from "../../../redux/formItems/formItems.api"
import SkeletonWhileLoading from "../../SkeletonWhileLoading/SkeletonWhileLoading.component"

const AddSongForm = () => {
    const { data: formItemsData, isLoading } = useFetchFormItemsDataQuery(undefined)
    const { handleSubmit, control, register, formState: { errors } } = useForm<FieldValues>()
    const onSubmit = () => {}

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
                title="Contenuto" 
                description="Inserisci il contenuto formattato secondo lo standard definito.">
                    <InputWrapper
                            InputComponent={TwInput}
                            InputWrapperComponent={TwInputWrapper}
                            LabelComponent={TwLabel}
                            name="song"
                            label="Brano"
                            placeholder="Brano"
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
                <TwFormSubmitButton type="submit" isLoading={false} icon="file-arrow-up">Aggiungi</TwFormSubmitButton>
            </TwFormGroup>
        </SkeletonWhileLoading>
    )
}
export default AddSongForm