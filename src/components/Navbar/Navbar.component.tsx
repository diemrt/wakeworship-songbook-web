import { Link } from "react-router-dom"
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
        </TwNavbarWrapper>
    )
}

export default Navbar