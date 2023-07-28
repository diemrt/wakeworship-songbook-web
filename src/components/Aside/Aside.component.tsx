import { useFetchSongsDataQuery } from "../../redux/songs/songs.api"
import ShowOnCondition from "../ShowOnCondition/ShowOnCondition.component"
import SkeletonWhileLoading from "../SkeletonWhileLoading/SkeletonWhileLoading.component"
import SongsList from "../lists/SongsList/SongsList.component"
import TwAside, { TwAsideRow, TwAsideShadow, TwAsideTitle, TwCloseButton, TwCloseButtonWrapper } from "./style"

interface Props {
    visible: boolean,
    onClose: () => void
}
const Aside = ({
    visible,
    onClose
} : Props) => {
    const { data: SongsData, isFetching, isLoading}  = useFetchSongsDataQuery(undefined)
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
                <SkeletonWhileLoading isLoading={isFetching || isLoading}>
                    <SongsList 
                    data={SongsData}
                    closeAside={onClose}
                    />
                </SkeletonWhileLoading>
            </AsideOnCondition>
        </>
        
    )
}

export default Aside