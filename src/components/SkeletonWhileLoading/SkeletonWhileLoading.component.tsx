import TwLoadingCard, { TwLoadingBody, TwLoadingFooter, TwLoadingHeader, TwLoadingRow } from "./style"

interface Props {
    isLoading: boolean,
    children: React.ReactNode
    [key: string]: any
}
const SkeletonWhileLoading = ({children, isLoading}: Props) => {    
    return isLoading ? (
        <TwLoadingCard>
            <TwLoadingHeader />
            <TwLoadingBody>
                <TwLoadingRow />
                <TwLoadingRow />
                <TwLoadingRow />
            </TwLoadingBody>
            <TwLoadingFooter>
                <TwLoadingRow />            
                <TwLoadingRow />
            </TwLoadingFooter>
        </TwLoadingCard>
    ) : (
        <>
        {children}
        </>)
}

export default SkeletonWhileLoading