import React from "react"

interface Props {
    children: React.ReactNode
}
const DefaultPageWrapper = ({children}: Props) => {

    return (
        <div>
            {children}
        </div>
    )
}

export default DefaultPageWrapper