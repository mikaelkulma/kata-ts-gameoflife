import {Board, IGameBoard} from "../../main/core/Board";
import {Point} from "../../main/core/Point";

const times = (n : number, fn : () => void) => {
    return Array.from(Array(n).keys()).forEach(fn);
}

describe("the board", () => {

    it("should have an empty board in 1st generation when started empty", () => {
        const board: IGameBoard = new Board();

        const newBoard: IGameBoard = board.tick();

        expect(newBoard.countItems()).toEqual(0)
    });

    it("should have 3 cells in 1st generation when started with a blinker", () => {
        const board: IGameBoard = new Board()
            .addCell(1, 2)
            .addCell(2, 2)
            .addCell(3, 2)

        const newBoard: IGameBoard = board.tick();

        expect(newBoard.countItems()).toEqual(3)
    });

    it("should have 3 cells in a column in 1st generation when started with a blinker", () => {
        const board: IGameBoard = new Board()
            .addCell(1, 2)
            .addCell(2, 2)
            .addCell(3, 2);

        const newBoard: IGameBoard = board.tick();

        expect(newBoard.containsCellsAt(
            Point.at(2, 1),
            Point.at(2, 2),
            Point.at(2, 3)
            )).toBe(true)

    });

    it("should have 3 cells in 100th generation when started with a blinker", () => {
        let board: IGameBoard = new Board()
            .addCell(1, 2)
            .addCell(2, 2)
            .addCell(3, 2);

        times(100, () => board = board.tick());

        expect(board.countItems()).toEqual(3)
    });

    it("should have 19 cells in 40th generation when started with a diehard", () => {
        let board: IGameBoard = new Board()
            .addCell(1, 2)
            .addCell(2, 2)
            .addCell(2, 3)
            .addCell(7, 1)
            .addCell(6, 3)
            .addCell(7, 3)
            .addCell(8, 3);

        times(40, () => board = board.tick());

        expect(board.countItems()).toEqual(19)
    })

    it("should have 0 cells in 130th generation when started with a diehard", () => {
        let board: IGameBoard = new Board()
            .addCell(1, 2)
            .addCell(2, 2)
            .addCell(2, 3)
            .addCell(7, 1)
            .addCell(6, 3)
            .addCell(7, 3)
            .addCell(8, 3);

        times(130, () => board = board.tick());

        expect(board.countItems()).toEqual(0)
    })

    it("should have 169 cells in 200th generation when started with a acorn", () => {
        let board: IGameBoard = new Board()
            .addCell(1, 3)
            .addCell(2, 1)
            .addCell(2, 3)
            .addCell(4, 2)
            .addCell(5, 3)
            .addCell(6, 3)
            .addCell(7, 3);

        times(200, () => board = board.tick());

        expect(board.countItems()).toEqual(169)
    })
});