import * as React from 'react'
import styled from "styled-components";

interface IProps {
    running : boolean
    onClick?(event: React.MouseEvent<HTMLButtonElement>): void,
}

const Container = styled.div`
    > button {
        padding: 10px 20px;
        border-radius: 10px;
        &:hover {
            background: black;
            color: white;
        }
    }
`

const TickButton = (props: IProps) => {
    const buttonText = props.running? "Stop" : "Start"
    return (
        <Container>
            <button onClick={props.onClick}>
                {buttonText}
            </button>
        </Container>
    )
}

export default TickButton