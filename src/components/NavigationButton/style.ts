import tw from "twin.macro";
import { Link } from "react-router-dom";
import GenericButton from "../GenericButton/GenericButton.component";

const TwNavigation = tw.section`transition w-full max-w-xs underline flex flex-row justify-start items-start gap-3`
export const TwNavigationLink = tw(GenericButton(Link))`flex items-center gap-2 text-zinc-500 no-underline font-normal hover:text-orange-600 hover:underline`

export default TwNavigation