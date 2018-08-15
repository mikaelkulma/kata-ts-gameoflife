import * as React from 'react';
import '../../assets/App.css';

import {Board, IGameBoard} from "../core/Board";
import {Point} from "../core/Point";
import TickButton from "./TickButton";
import VisualBoard from "./VisualBoard";

interface IState {
    board: IGameBoard,
    generations: number
}

const initialBoard = new Board();
initialBoard.addCells(
    Point.at(1, 2),
    Point.at(2, 2),
    Point.at(2, 3),
    Point.at(7, 1),
    Point.at(6, 3),
    Point.at(7, 3),
    Point.at(8, 3)
)


class App extends React.Component<{}, IState> {

    public state = {
        board: initialBoard,
        generations: 0
    }

    public render() {
        return (
            <div className="App">
                <VisualBoard cells={this.state.board.cells}/>
                <TickButton onClick={this.onTickClickHandler}/>
                <p>Generation: {this.state.generations}</p>
            </div>
        );
    }

    private onTickClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {

        console.log("TICK!", this.state.board.countItems());

        this.setState(prevState => {
            return {
                board: prevState.board.tick(),
                generations: prevState.generations + 1
            };
        });
    }
}

export default App;
