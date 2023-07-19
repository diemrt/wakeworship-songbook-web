import tw from "twin.macro";
import ReactSelect from 'react-select'

//generici
export const TwAddSongWrapper = tw.form`flex flex-col gap-20`
export const TwAddSongHeader = tw.section`flex flex-col gap-10 border-b pb-3`
export const TwAddSongSubtitlesWrapper = tw.div`flex gap-10`
export const TwAddSongGenericLable = tw.label`text-zinc-500 font-medium text-sm`
export const TwAddSongGenericSelectWarpper = tw.section`flex w-fit flex-col gap-1`
export const TwAddSongGenericSelect = tw(ReactSelect)`text-sm`

//titolo
export const TwSongTitleInputWrapper = tw.section`flex flex-col gap-1`
export const TwSongTitleInput = tw.input`outline-none text-3xl font-bold text-zinc-800`

//sottotitoli
export const TwSongSubtitleInputWrapper = tw.section`flex w-fit items-center gap-2`
export const TwSongSubtitleInput = tw.input`outline-none w-12 text-sm text-zinc-800`

//sezioni
export const TwSongBlockWrapper = tw.div`flex flex-col gap-8`

//righe
export const TwSongRowWrapper = tw.div`flex w-full items-center gap-1`
export const TwSongRowPhraseChordWrapper = tw.div`flex flex-col gap-1`
export const TwSongPhraseInputWrapper = tw.section`flex items-center gap-0`
export const TwSongPhraseInput = tw.input`outline-none text-sm text-zinc-800`