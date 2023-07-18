import ShowOnCondition from "../ShowOnCondition/ShowOnCondition.component"
import TwAside, { TwAsideRow, TwAsideShadow, TwCloseButton, TwCloseButtonWrapper } from "./style"

interface Props {
    visible: boolean,
    onClose: () => void
}
const Aside = ({
    visible,
    onClose
} : Props) => {

    const AsideOnCondition = ShowOnCondition(TwAside)
    const AsideShadowOnCondition = ShowOnCondition(TwAsideShadow)

    return (
        <>
            <AsideShadowOnCondition condition={visible} onClick={onClose}/>
            <AsideOnCondition condition={visible}>
                <TwAsideRow>
                    <TwCloseButtonWrapper onClick={onClose}>
                        <TwCloseButton icon={["fas", "xmark"]}/>
                    </TwCloseButtonWrapper>
                </TwAsideRow>
                <span>Link</span>
                <span>Link2</span>
            </AsideOnCondition>
        </>
        
    )
}

export default Aside