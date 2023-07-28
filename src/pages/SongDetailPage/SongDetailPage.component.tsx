import { useParams } from "react-router-dom"
import DefaultPageWrapper from "../../components/DefaultPageWrapper/DefaultPageWrapper.component"
import { useFetchSongDataQuery } from "../../redux/songs/songs.api"
import SkeletonWhileLoading from "../../components/SkeletonWhileLoading/SkeletonWhileLoading.component"
import SongDocument from "../../components/SongDocument/SongDocument.component"

const SongDetailPage = () => {
    const { songId } = useParams()
    const {
        data: songData,
        isLoading: songIsLoading,
        isFetching: songIsFetching
    } = useFetchSongDataQuery(songId ?? "")

    return (
        <DefaultPageWrapper>
            <SkeletonWhileLoading isLoading={songIsLoading || songIsFetching}>
                <SongDocument
                data={songData}
                 />
            </SkeletonWhileLoading>
        </DefaultPageWrapper>
    )
}

export default SongDetailPage