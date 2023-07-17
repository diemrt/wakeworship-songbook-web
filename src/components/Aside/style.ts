import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import tw from "twin.macro";

const TwAside = tw.aside`w-96 h-screen fixed top-0 left-0 flex flex-col gap-8 px-10 py-20 bg-zinc-100 border-r z-10`
export const TwCloseButtonWrapper = tw.button`h-8 w-8 flex justify-center items-center bg-zinc-200 text-zinc-800 rounded-lg`
export const TwCloseButton = tw(FontAwesomeIcon)`h-5 w-5`
export default TwAside