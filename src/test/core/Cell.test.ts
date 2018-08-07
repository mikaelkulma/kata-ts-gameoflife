import each from 'jest-each';

import {DeadCell, LiveCell} from "../../main/core/Cell";

describe("a live cell", () => {

    each([[0], [1], [4], [5], [6]])
        .it('should die when it has %d neighbour(s)',
            (numberOfNeighbours: number) => {
                expect(new LiveCell().evolve(numberOfNeighbours))
                    .toBeInstanceOf(DeadCell);
            },
        );

    each([[2], [3]])
        .it('should stay alive when it has %d neighbour(s)',
            (numberOfNeighbours: number) => {
                expect(new LiveCell().evolve(numberOfNeighbours))
                    .toBeInstanceOf(LiveCell);
            },
        );

    it("should know that its alive", () => {
        expect(new LiveCell().isAlive()).toBe(true)
    })

});

describe("a dead cell", () => {

    it("should be reborn when it has 3 neighbours", () => {
        expect(new DeadCell().evolve(3))
            .toBeInstanceOf(LiveCell);
    });

    it("should know that its dead", () => {
        expect(new DeadCell().isAlive()).toBe(false)
    })

});

