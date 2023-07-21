import ShowOnCondition from "../ShowOnCondition/ShowOnCondition.component"
import SkeletonWhileLoading from "../SkeletonWhileLoading/SkeletonWhileLoading.component"
import TwAside, { TwAsideRow, TwAsideShadow, TwAsideTitle, TwCloseButton, TwCloseButtonWrapper } from "./style"

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
                <TwAsideTitle>Lista Brani</TwAsideTitle>
                <SkeletonWhileLoading isLoading={true}>
                    Link
                </SkeletonWhileLoading>
            </AsideOnCondition>
        </>
        
    )
}

export default Aside