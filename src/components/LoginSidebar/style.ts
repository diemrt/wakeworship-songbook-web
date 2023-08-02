import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import tw from "twin.macro";

const TwLoginSidebarWrapper = tw.aside`hidden md:relative md:overflow-hidden md:block md:w-full md:bg-orange-500 md:h-full md:rounded-3xl lg:rounded-2xl lg:mr-10`
export const TwIconOne = tw(FontAwesomeIcon)`hidden absolute overflow-hidden m-auto -top-10 -left-1/2 right-0 text-center opacity-30 text-white lg:block lg:h-4/6`
export const TwIconTwo = tw(FontAwesomeIcon)`hidden absolute overflow-hidden m-auto -bottom-10 left-0 -right-1/2 rotate-45 text-center  opacity-30 text-white lg:block lg:h-4/6`
export const TwIconThree = tw(FontAwesomeIcon)`absolute overflow-hidden m-auto -rotate-180 -top-2/3 bottom-0 -left-80 right-0 opacity-30 text-white w-3/6 h-full lg:hidden`
export const TwIconFour = tw(FontAwesomeIcon)`absolute overflow-hidden m-auto rotate-45 top-0 -bottom-2/3 opacity-30 left-0 -right-80 text-white w-3/6 h-full lg:hidden`

export default TwLoginSidebarWrapper