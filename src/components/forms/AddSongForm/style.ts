import tw from "twin.macro";

export const TwAddSongWrapper = tw.form`flex flex-col gap-10`

const TwSongTitleInputWrapper = tw.section`flex flex-col gap-1`
export const TwSongTitleInput = tw.input`outline-none block rounded border-0 py-1.5 text-zinc-800 font-bold text-3xl placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-orange-50 disabled:text-zinc-400`
export const TwSongTitleLabel = tw.label`text-zinc-500 font-medium text-sm`

export default TwSongTitleInputWrapper