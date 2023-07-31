import tw from "twin.macro";

const TwSongDocumentWrapper = tw.div`flex flex-col gap-8 md:gap-10`
export const TwSongDocumentHeader = tw.div`flex flex-col border-b pb-5 gap-2 md:flex-row md:justify-between lg:justify-start lg:gap-10`
export const TwSongTitle = tw.h1`text-3xl font-bold text-zinc-800`
export const TwSongInfo = tw.div`text-base flex flex-row items-center gap-3 md:gap-2`
export const TwSongInfoLabel = tw.h2`text-zinc-500`
export const TwSongInfoValue = tw.p`text-zinc-800 font-bold`
export const TwSongChord = tw.span`w-fit text-orange-500 bg-orange-100 font-medium text-base px-2 my-2 rounded-md border border-orange-500`
export const TwEmptyChord = tw.span`w-fit font-medium text-base px-2 my-2 rounded-md border invisible`
export const TwSongBlocksWrapper = tw.div`flex flex-col gap-20`
export const TwSongBlocks = tw.div`flex flex-col gap-5 md:flex-row md:gap-20`
export const TwSongBlockName = tw.h3`text-xl uppercase font-bold text-zinc-700 md:text-xl`
export const TwSongRowsWrapper = tw.div`flex flex-col w-full gap-5 md:gap-2`
export const TwSongRows = tw.div`flex flex-wrap w-full`
export const TwSongPhraseChord = tw.div`flex flex-col text-base`
export const TwSongPhrase = tw.pre`text-zinc-900 font-sans`
export default TwSongDocumentWrapper