export type songChordPhraseType = {
    chordType: {label: string, value: string},
    phrase: string
}
export type songRowType = {
    chordPhrases?: songChordPhraseType[]
}
export type SongBlockType = {
    blockType: {label: string, value: string},
    rows?: songRowType[]
}[]

export type SongType = {
    title: string,
    blocks?: SongBlockType[]
}