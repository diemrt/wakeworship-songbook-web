import { GenericItemType } from "../api/api.type"

export type FetchSongsDataType = {
    songId: string,
    title: string,
    key: string,
    capo: string,
    contentPreview: string
}

export type FetchSongDataType = {
    songId: string,
    title: string,
    key: GenericItemType,
    capo: string,
    songBlocks: {
        songBlockId: string,
        songBlockTypeItem: GenericItemType,
        songRows: {
            songRowId: string,
            phraseChords: {
                phraseChordId: string,
                chordTypeItem: GenericItemType,
                phrase: string
            }[]
        }[]
    }[]
}