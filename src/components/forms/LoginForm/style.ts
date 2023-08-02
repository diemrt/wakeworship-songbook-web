import { Link } from "react-router-dom";
import tw from "twin.macro";
import ButtonWithLoader from "../../ButtonWithLoader/ButtonWithLoader.component";

const TwLoginWrapper = tw.section`flex flex-col justify-center items-center px-12 py-20 gap-10 animate-fade-in text-zinc-800 lg:py-0 lg:px-20`
export const TwLoginLogoTitleWrapper = tw.h3`w-full flex flex-row gap-5 items-center`
export const TwLoginLogoWrapper = tw.div`w-full flex flex-col gap-0`
export const TwLoginLogoTitle = tw.h1`text-2xl font-black`
export const TwLoginLogoCompanyName = tw.small`text-xs font-medium text-zinc-700`
export const TwLoginHeaderTitle = tw.h3`text-3xl font-medium md:text-xl`
export const TwLoginHeader = tw.section`w-full flex flex-col items-start gap-5 max-w-xs lg:w-80`
export const TwLoginHeaderDescription = tw.p`text-zinc-500`
export const TwLoginForm = tw.form`flex flex-col gap-5 w-full max-w-xs lg:w-80`
export const TwForgotPasswordLink = tw(Link)`text-orange-500 hover:text-orange-600 underline text-center md:text-sm`
export const TwLoginInputWrapper = tw.section`w-full flex flex-col gap-1`
export const TwLoginButton = tw(ButtonWithLoader)`hover:bg-orange-600 bg-orange-500 text-white focus-visible:bg-orange-600`
export const TwLoginInput = tw.input`w-full outline-none block h-[38px] rounded border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-50 sm:text-sm sm:leading-6 disabled:text-zinc-400`
export const TwLoginLabel = tw.label`text-zinc-500 font-medium text-sm`

export default TwLoginWrapper