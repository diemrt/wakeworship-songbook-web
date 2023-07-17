import ShowOnCondition from "../ShowOnCondition/ShowOnCondition.component"
import TwAside, { TwCloseButton, TwCloseButtonWrapper } from "./style"

interface Props {
    visible: boolean
}
const Aside = ({
    visible
} : Props) => {

    const AsideOnCondition = ShowOnCondition(TwAside)

    return (
        <AsideOnCondition condition={visible}>
            <TwCloseButtonWrapper>
                <TwCloseButton icon={["fas", "xmark"]}/>
            </TwCloseButtonWrapper>
            <span>Link</span>
            <span>Link2</span>
        </AsideOnCondition>
    )
}

export default Aside