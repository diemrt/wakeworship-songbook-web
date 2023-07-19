import tw from "twin.macro";
import ReactSelect from 'react-select'
import ButtonWithLoader from "../../ButtonWithLoader/ButtonWithLoader.component";

const TwFormGroup = tw.form`flex flex-col gap-10`
export const TwInputWrapper = tw.section`flex flex-col gap-1`
export const TwInput = tw.input`outline-none block h-[38px] rounded border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6 disabled:text-zinc-400`
export const TwLabel = tw.label`text-zinc-500 font-medium text-sm`
export const TwSelectWrapper = tw.section`flex flex-col gap-1 -z-10`
export const TwSelect = tw(ReactSelect)`text-sm`
export const TwFormSubmitButton = tw(ButtonWithLoader)`bg-orange-500 text-white hover:bg-orange-600 disabled:bg-zinc-300`
export default TwFormGroup