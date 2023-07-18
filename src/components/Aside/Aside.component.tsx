import ShowOnCondition from "../ShowOnCondition/ShowOnCondition.component"
import TwAside, { TwAsideRow, TwCloseButton, TwCloseButtonWrapper } from "./style"

interface Props {
    visible: boolean,
    onClose: () => void
}
const Aside = ({
    visible,
    onClose
} : Props) => {

    const AsideOnCondition = ShowOnCondition(TwAside)

    return (
        <AsideOnCondition condition={visible}>
            <TwAsideRow>
                <TwCloseButtonWrapper onClick={onClose}>
                    <TwCloseButton icon={["fas", "xmark"]}/>
                </TwCloseButtonWrapper>
            </TwAsideRow>
            <span>Link</span>
            <span>Link2</span>
        </AsideOnCondition>
    )
}

export default Aside