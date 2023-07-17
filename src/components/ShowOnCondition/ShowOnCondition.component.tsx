type Props = {
    condition: boolean,
    [key: string]: any
}
const ShowOnCondition = (WrappedComponent: React.ElementType) => {

    return ({condition, ...otherProps}: Props) => {
        return condition ? <WrappedComponent {...otherProps} /> : null
    }
}

export default ShowOnCondition