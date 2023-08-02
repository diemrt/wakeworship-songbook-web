import TwLoginSidebarWrapper, { TwIconBottomLeft, TwIconTopRight } from "./style"

const LoginSidebar = () => {
    return (
        <TwLoginSidebarWrapper>
            <TwIconBottomLeft icon={["fas", "guitar"]} />
            <TwIconTopRight icon={["fas", "microphone"]}/>
        </TwLoginSidebarWrapper>
    )
}

export default LoginSidebar