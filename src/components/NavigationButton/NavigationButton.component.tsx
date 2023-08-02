import { IconName } from "@fortawesome/fontawesome-svg-core"
import TwNavigation, { TwNavigationLink } from "./style"

interface Props {
    children: string,
    icon: IconName,
    [key: string]: any
}
const NavigationButton = ({children, icon, ...otherProps}: Props) => {
    return (
        <TwNavigation>
            <TwNavigationLink children={children} icon={icon} to="/" {...otherProps}/>
        </TwNavigation>
    )
}

export default NavigationButton