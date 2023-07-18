import React from "react"
import Navbar from "../Navbar/Navbar.component"
import ShowOnCondition from "../ShowOnCondition/ShowOnCondition.component"
import TwContentWrapper, { TwPageTitle } from "./style"

interface Props {
    title?: string,
    children: React.ReactNode
}
const DefaultPageWrapper = ({title, children}: Props) => {
    const TitleOnCondition = ShowOnCondition(TwPageTitle)

    return (
        <div>
            <Navbar />
            <TwContentWrapper>
                <TitleOnCondition condition={typeof title !== "undefined"}>{title}</TitleOnCondition>
                {children}
            </TwContentWrapper>
        </div>
    )
}

export default DefaultPageWrapper