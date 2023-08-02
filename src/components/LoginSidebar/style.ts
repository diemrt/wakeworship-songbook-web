import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import tw from "twin.macro";

const TwLoginSidebarWrapper = tw.aside`hidden md:relative md:overflow-hidden md:block md:w-full md:bg-orange-500 md:h-full md:rounded-t-3xl lg:rounded-2xl lg:mr-10`
export const TwIconBottomLeft = tw(FontAwesomeIcon)`absolute overflow-hidden md:-top-10 md:left-10  md:-rotate-90 md:h-80 lg:h-96 opacity-30 text-white`
export const TwIconTopRight = tw(FontAwesomeIcon)`absolute overflow-hidden md:-bottom-20 md:right-10 md:rotate-45 md:h-80 lg:h-96 opacity-30 text-white`

export default TwLoginSidebarWrapper