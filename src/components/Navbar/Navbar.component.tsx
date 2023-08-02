import { useState } from "react"
import { Link } from "react-router-dom"
import Aside from "../Aside/Aside.component"
import TwNavbarWrapper, { TwAsideButton, TwAsideButtonWrapper, TwAsideLinkButtonWrapper, TwLogo, TwNavbarButtonsGroup } from "./style"
import { useLogOutMutation } from "../../redux/auth/auth.api"

const Navbar = () => {
    const [visible, setVisibility] = useState(false)
    const open = () => setVisibility(true)
    const close = () => setVisibility(false)
    const [logOut] = useLogOutMutation()
    const userLogOut = () => logOut(undefined)

    return (
        <TwNavbarWrapper>
            <TwNavbarButtonsGroup>
                <Link to="/homepage">
                    <TwLogo src="/logo.svg" />
                </Link>
                <TwAsideButtonWrapper onClick={open} title="Lista Brani">
                    <TwAsideButton icon={["fas", "list-ol"]} />
                </TwAsideButtonWrapper>
            </TwNavbarButtonsGroup>
            <TwNavbarButtonsGroup>
                <TwAsideLinkButtonWrapper to={"/add"}>
                    <TwAsideButton icon={["fas", "file-arrow-up"]} title="Nuovo Brano"/>
                </TwAsideLinkButtonWrapper>
                <TwAsideButtonWrapper onClick={userLogOut} title="Esci">
                    <TwAsideButton icon={["fas", "right-from-bracket"]} />
                </TwAsideButtonWrapper>
            </TwNavbarButtonsGroup>
            <Aside onClose={close} visible={visible} />
        </TwNavbarWrapper>
    )
}

export default Navbar