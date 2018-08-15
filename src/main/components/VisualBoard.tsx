import * as React from 'react';

import {IPoint} from "../core/Point";

export interface IProps {
    cells?: IPoint[]
}

const VisualBoard = (props : IProps) => {

    return <div className="board">
        {props.cells && props.cells.map(point =>
            (<div key={point.toString()}>{point.toString()}</div>)
        )}
        </div>

}

export default VisualBoard;