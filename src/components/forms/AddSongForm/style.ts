import tw from "twin.macro";
import ReactSelect from 'react-select'

export const TwAddSongWrapper = tw.form`flex flex-col gap-10`

const TwSongTitleInputWrapper = tw.section`flex flex-col gap-1`
export const TwSongTitleInput = tw.input`outline-none block h-[38px] rounded border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-50 sm:text-sm sm:leading-6 disabled:text-zinc-400`
export const TwSongTitleLabel = tw.label`text-zinc-500 font-medium text-sm`

export const TwSongBlockSelectWarpper = tw.section`flex flex-col gap-1`
export const TwSongBlockSelect = tw(ReactSelect)`text-sm`

export default TwSongTitleInputWrapper