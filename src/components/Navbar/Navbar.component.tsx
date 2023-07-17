import { Link } from "react-router-dom"
import Aside from "../Aside/Aside.component"
import TwNavbarWrapper, { TwAsideButton, TwAsideButtonWrapper, TwLogo } from "./style"

const Navbar = () => {

    return (
        <TwNavbarWrapper>
            <Link to="/homepage">
                <TwLogo src="/logo.svg" />
            </Link>
            <TwAsideButtonWrapper>
                <TwAsideButton icon={["fas", "table-columns"]} />
            </TwAsideButtonWrapper>
            <Aside visible={true} />
        </TwNavbarWrapper>
    )
}

export default Navbar