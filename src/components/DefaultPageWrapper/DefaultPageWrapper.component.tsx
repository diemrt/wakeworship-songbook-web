import React from "react"
import Navbar from "../Navbar/Navbar.component"
import TwContentWrapper from "./style"

interface Props {
    children: React.ReactNode
}
const DefaultPageWrapper = ({children}: Props) => {

    return (
        <div>
            <Navbar />
            <TwContentWrapper>
                {children}
            </TwContentWrapper>
        </div>
    )
}

export default DefaultPageWrapper