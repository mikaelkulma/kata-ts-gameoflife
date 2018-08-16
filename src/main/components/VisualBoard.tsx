import * as React from 'react';

import styled from "styled-components";
import {IPoint} from "../core/Point";

export interface IProps {
    cells?: IPoint[],

}

const Container = styled.div`
       position: relative;
       width: 500px;
       margin: 150px auto 0;
       > div {
           display: inline-block;
           background: black;
           padding: 5px;
           position: absolute
           width: 35px;
           height: 20px;
           color: #eee;
           font-size: 0.8em;
       }
`;


const VisualBoard = (props: IProps) => {

    return <Container className="board">
        {props.cells && props.cells.map(point =>
            (<div style={{
                left : point.x * 50,
                top: point.y * 35
            }} key={point.toString()}>{point.toString()}</div>)
        )}
    </Container>

}

export default VisualBoard;