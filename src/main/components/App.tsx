import * as React from 'react';

import styled from "styled-components";
import {Board, IGameBoard} from "../core/Board";
import {Point} from "../core/Point";
import TickButton from "./TickButton";
import VisualBoard from "./VisualBoard";

interface IState {
    board: IGameBoard,
    generations: number,
    running: boolean
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
);

const Container = styled.div`
    text-align: center;
    font-family: sans-serif;
`

class App extends React.Component<{}, IState> {

    public state = {
        board: initialBoard,
        generations: 0,
        running: false
    };

    private timerId: number;

    public render() {
        return (
            <Container>
                <TickButton running={this.state.running} onClick={this.onTickClickHandler}/>
                <p>Generation: {this.state.generations}</p>
                <VisualBoard cells={this.state.board.cells}/>
            </Container>
        );
    }

    private onTickClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (this.state.running) {
            this.stop();
        } else {
            this.run()
        }
    };

    private run() : void {
        this.setState(prevState => {
            return {
                ...prevState,
                running: true
            };
        });
        this.timerId = window.setInterval(this.tick.bind(this), 200)
    }

    private tick() {
        this.setState(prevState => {
            return {
                ...prevState,
                board: prevState.board.tick(),
                generations: prevState.generations + 1
            };
        });
    }

    private stop() {
        window.clearInterval(this.timerId)
        this.setState(prevState => {
            return {
                ...prevState,
                running: false
            };
        });
    }
}

export default App;
