import { IconName } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TwGenericButton from "./style";

interface Props {
    children: string,
    icon: IconName,
    [key: string]: any
}

export default function GenericButton(WrappedComponent: React.ElementType | undefined){
    const CustomButton = ({children, icon, ...otherProps}: Props) => {
        return (
            typeof WrappedComponent === "undefined" ? (
                <TwGenericButton {...otherProps}>
                    <FontAwesomeIcon icon={["fas", icon]} />
                    {children}
                </TwGenericButton>
            ) : (
            <WrappedComponent {...otherProps}>
                <FontAwesomeIcon icon={["fas", icon]} />
                {children}
            </WrappedComponent>
            )
        );
    }
    return CustomButton
}