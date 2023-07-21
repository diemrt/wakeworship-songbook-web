import { Link } from "react-router-dom";
import tw from "twin.macro";

const TwSongsListWrapper = tw.div`flex flex-col w-full gap-5 overflow-y-scroll`
export const TwSongItemWrapper = tw(Link)`flex flex-col w-full px-4 py-2 gap-2 bg-white border rounded-lg active:text-orange-500`
export const TwSongItemTitle = tw.h1`font-medium text-zinc-800 underline`
export const TwSongInfoWrapper = tw.small`flex flex-row gap-5 items-center`
export const TwSongInfoLabel = tw.span`text-zinc-800 font-medium`
export const TwSongSmallText = tw.small`text-xs text-zinc-500`
export default TwSongsListWrapper