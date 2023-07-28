import { useParams } from "react-router-dom"
import DefaultPageWrapper from "../../components/DefaultPageWrapper/DefaultPageWrapper.component"
import { useFetchSongDataQuery } from "../../redux/songs/songs.api"
import SkeletonWhileLoading from "../../components/SkeletonWhileLoading/SkeletonWhileLoading.component"

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
                <h1>{songData?.title}</h1>
            </SkeletonWhileLoading>
        </DefaultPageWrapper>
    )
}

export default SongDetailPage