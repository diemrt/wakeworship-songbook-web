import TwFormSection, { TwFormSectionBody, TwFormSectionDescription, TwFormSectionHeader, TwFormSectionTitle } from "./style"

interface Props {
    children: React.ReactNode,
    title: string,
    description: React.ReactNode
}
const FormSection = ({children, title, description}: Props) => {

    return (
        <TwFormSection>
            <TwFormSectionHeader>
                <TwFormSectionTitle>{title}</TwFormSectionTitle>
                <TwFormSectionDescription>{description}</TwFormSectionDescription>
            </TwFormSectionHeader>
            <TwFormSectionBody>
                {children}
            </TwFormSectionBody>
        </TwFormSection>
    )
}

export default FormSection