import TwLoginSidebarWrapper, {  TwIconFour, TwIconOne, TwIconThree, TwIconTwo } from "./style"

const LoginSidebar = () => {
    return (
        <TwLoginSidebarWrapper>
            <TwIconOne icon={["fas", "guitar"]} />
            <TwIconTwo icon={["fas", "drum"]}/>
            <TwIconThree icon={["fas", "guitar"]} />
            <TwIconFour icon={["fas", "drum"]}/>
        </TwLoginSidebarWrapper>
    )
}

export default LoginSidebar