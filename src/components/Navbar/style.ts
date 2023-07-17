import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import tw from "twin.macro";

const TwNavbarWrapper = tw.section`w-full h-20 p-10 pt-16 fixed flex items-center gap-6 bg-white`
export const TwLogo = tw.img`h-10 w-10 rounded-lg`
export const TwAsideButtonWrapper = tw.button`h-10 w-10 flex justify-center items-center bg-zinc-100 rounded-lg hover:bg-zinc-200 active:bg-zinc-200 active:text-orange-500`
export const TwAsideButton = tw(FontAwesomeIcon)`h-6 w-6 text-zinc-600`
export default TwNavbarWrapper