import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import tw from "twin.macro";

const TwNavbarWrapper = tw.section`w-full h-20 p-10 pt-16 fixed flex justify-between items-center bg-white border-b`
export const TwNavbarButtonsGroup = tw.div`flex gap-6 items-center`
export const TwLogo = tw.img`h-10 w-10 rounded-lg`
export const TwAsideButtonWrapper = tw.button`h-10 w-10 flex justify-center items-center bg-zinc-100 rounded-lg active:text-orange-500 text-zinc-600`
export const TwAsideLinkButtonWrapper = tw(Link)`h-10 w-10 flex justify-center items-center bg-zinc-100 rounded-lg active:text-orange-500 text-zinc-600`
export const TwAsideButton = tw(FontAwesomeIcon)`h-6 w-6`
export default TwNavbarWrapper