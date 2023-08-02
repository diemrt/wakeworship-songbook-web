import { FetchSongDataType } from "../../redux/songs/songs.type"
import TwSongDocumentWrapper, { TwEmptyChord, TwSongBlockName, TwSongBlocks, TwSongBlocksWrapper, TwSongChord, TwSongContentWrapper, TwSongDocumentHeader, TwSongInfo, TwSongInfoLabel, TwSongInfoValue, TwSongPhrase, TwSongPhraseChord, TwSongRows, TwSongRowsWrapper, TwSongTitle } from "./style"

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
            <TwSongContentWrapper>
                <TwSongBlocksWrapper>
                    {
                        data?.songBlocks.map((songBlock) => (
                            <TwSongBlocks key={songBlock.songBlockId}>
                                <TwSongBlockName>{songBlock.songBlockTypeItem.label}</TwSongBlockName>
                                <TwSongRowsWrapper>
                                    {
                                        songBlock.songRows.map((songRows) => (
                                            <TwSongRows key={songRows.songRowId}>
                                                {
                                                    songRows.phraseChords.map((phraseChords) => (
                                                        <TwSongPhraseChord key={phraseChords.phraseChordId}>
                                                            {phraseChords.chordTypeItem.value !== "none" ? (
                                                                <TwSongChord>{phraseChords.chordTypeItem.label}</TwSongChord>
                                                            ) : <TwEmptyChord>none</TwEmptyChord>}
                                                            <TwSongPhrase>{phraseChords.phrase}</TwSongPhrase>
                                                        </TwSongPhraseChord>
                                                    ))
                                                }
                                            </TwSongRows>
                                        ))
                                    }
                                </TwSongRowsWrapper>
                            </TwSongBlocks>
                        ))
                    }
                </TwSongBlocksWrapper>
            </TwSongContentWrapper>
        </TwSongDocumentWrapper>
    )
}

export default SongDocument