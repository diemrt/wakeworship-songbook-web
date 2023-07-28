import { FetchSongsDataType } from "../../../redux/songs/songs.type"
import TwSongsListWrapper, { TwSongSmallText, TwSongItemTitle, TwSongItemWrapper, TwSongInfoWrapper, TwSongInfoLabel } from "./style"

interface Props{
    data?: FetchSongsDataType[],
    closeAside: () => void
}
const SongsList = ({
    data,
    closeAside
}:Props) => {

    return (
        <TwSongsListWrapper>
            {
                data?.map((item, index) => (
                    <TwSongItemWrapper key={index} to={`/songs/${item.songId}`} onClick={closeAside}>
                        <TwSongItemTitle>{item.title}</TwSongItemTitle>
                        <TwSongSmallText>{item.contentPreview}</TwSongSmallText>
                        <TwSongInfoWrapper>
                            <div><TwSongInfoLabel>Chiave: </TwSongInfoLabel><TwSongSmallText>{item.key}</TwSongSmallText></div>
                            <div><TwSongInfoLabel>Capotasto: </TwSongInfoLabel><TwSongSmallText>{item.capo}</TwSongSmallText></div>
                        </TwSongInfoWrapper>
                    </TwSongItemWrapper>
                ))
            }
        </TwSongsListWrapper>
    )
}
export default SongsList