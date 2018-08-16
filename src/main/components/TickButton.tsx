import * as React from 'react'

interface IProps {
    running : boolean
    onClick?(event: React.MouseEvent<HTMLButtonElement>): void,
}

const TickButton = (props: IProps) => {
    const buttonText = props.running? "Stop" : "Start"
    return (
        <div>
            <button onClick={props.onClick}>
                {buttonText}
            </button>
        </div>
    )
}

export default TickButton