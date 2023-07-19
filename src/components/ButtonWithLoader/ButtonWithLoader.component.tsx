import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconName } from "@fortawesome/fontawesome-svg-core"
import { TwButtonWithLoader } from "./style"

interface Props {
    children?: string,
    icon: IconName,
    isLoading: boolean
    [key: string]: any
}
const ButtonWithLoader = ({children, icon, isLoading, ...otherProps}: Props) => {

    return (
        <TwButtonWithLoader {...otherProps} disabled={isLoading}>
            {isLoading ? (
                <FontAwesomeIcon icon={["fas", "spinner"]} spin/>
            ): ( 
                <FontAwesomeIcon icon={["fas", icon]} />
            )}
            {children}
        </TwButtonWithLoader>
    )
}

export default ButtonWithLoader