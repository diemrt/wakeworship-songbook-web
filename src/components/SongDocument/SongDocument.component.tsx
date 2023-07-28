import { FetchSongDataType } from "../../redux/songs/songs.type"
import TwSongDocumentWrapper, { TwSongChord, TwSongDocumentHeader, TwSongInfo, TwSongInfoLabel, TwSongInfoValue, TwSongTitle } from "./style"

interface Props {
    data?: FetchSongDataType
}
const SongDocument = ({
    data
}:Props) => {

    return (
        <TwSongDocumentWrapper>
            <TwSongTitle>{data?.title}</TwSongTitle>
            <TwSongDocumentHeader>
                <TwSongInfo>
                    <TwSongInfoLabel>Chiave: </TwSongInfoLabel>
                    <TwSongChord>{data?.key.label}</TwSongChord>
                </TwSongInfo>
                <TwSongInfo>
                    <TwSongInfoLabel>Capotasto: </TwSongInfoLabel>
                    <TwSongInfoValue>{data?.capo}</TwSongInfoValue>
                </TwSongInfo>
            </TwSongDocumentHeader>
        </TwSongDocumentWrapper>
    )
}

export default SongDocument