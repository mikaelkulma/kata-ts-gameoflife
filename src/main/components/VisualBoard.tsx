import * as React from 'react';

import styled from "styled-components";
import {IPoint} from "../core/Point";

export interface IProps {
    cells?: IPoint[],

}

const Container = styled.div`
       position: relative;
       width: 500px;
       margin: auto;
       > div {
           display: inline-block;
           background: #eee;
           margin: 5px;
           padding: 8px;
           position: absolute
       }
`;


const VisualBoard = (props: IProps) => {

    return <Container className="board">
        {props.cells && props.cells.map(point =>
            (<div style={{
                left : point.x * 50,
                top: point.y * 50
            }} key={point.toString()}>{point.toString()}</div>)
        )}
    </Container>

}

export default VisualBoard;