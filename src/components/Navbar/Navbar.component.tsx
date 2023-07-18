import { useState } from "react"
import { Link } from "react-router-dom"
import Aside from "../Aside/Aside.component"
import TwNavbarWrapper, { TwAsideButton, TwAsideButtonWrapper, TwLogo } from "./style"

const Navbar = () => {
    const [visible, setVisibility] = useState(false)
    const open = () => setVisibility(true)
    const close = () => setVisibility(false)

    return (
        <TwNavbarWrapper>
            <Link to="/homepage">
                <TwLogo src="/logo.svg" />
            </Link>
            <TwAsideButtonWrapper onClick={open}>
                <TwAsideButton icon={["fas", "table-columns"]} />
            </TwAsideButtonWrapper>
            <Aside onClose={close} visible={visible} />
        </TwNavbarWrapper>
    )
}

export default Navbar