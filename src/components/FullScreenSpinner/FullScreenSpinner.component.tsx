import {IconName } from "@fortawesome/fontawesome-svg-core"
import React, { useEffect, useState } from "react"
import TwFullScreenWrapper, { TwLoadingIcon } from "./style"

interface Props {
    isLoading: boolean,
    [key: string]: any
}

const FullScreenSpinner = (WrapperdComponent: React.ElementType) => {
    const LoaderComponent = ({isLoading, ...otherProps}: Props) => {
        const instruments: IconName[] = ["guitar", "drum", "microphone"]
        const [counter, setCounter] = useState(1)
        const [current, setCurrent] = useState<IconName>("guitar")

        const SwitchInstrument = () => {
            if(isLoading){
                setTimeout(() => {
                    setCounter(counter > 1 ? 0 : counter + 1)
                    setCurrent(instruments[counter])
                }, 1000)
            }
        }

        useEffect(() => SwitchInstrument())

        return (
            isLoading ? (
                <TwFullScreenWrapper>
                    <TwLoadingIcon beatFade icon={["fas", current]} />
                </TwFullScreenWrapper>
            ) :
            (
                <WrapperdComponent {...otherProps} />
            )
        )
    }
    return LoaderComponent
}

export default FullScreenSpinner