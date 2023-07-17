import React from "react"
import Navbar from "../Navbar/Navbar.component"

interface Props {
    children: React.ReactNode
}
const DefaultPageWrapper = ({children}: Props) => {

    return (
        <div>
            <Navbar />
            {children}
        </div>
    )
}

export default DefaultPageWrapper