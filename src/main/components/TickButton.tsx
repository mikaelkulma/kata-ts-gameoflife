import * as React from 'react'

interface IProps {
    onClick?(event: React.MouseEvent<HTMLButtonElement>): void
}

const TickButton = (props: IProps) => {
    return (
        <div>
            <button onClick={props.onClick}>Tick!</button>
        </div>
    )
}

export default TickButton