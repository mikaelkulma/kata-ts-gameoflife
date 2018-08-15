import {Dictionary} from "typescript-collections";

import {DeadCell, ICell, LiveCell} from "./Cell";
import {IPoint, Point} from "./Point";

interface ITicker {
    tick(): IGameBoard
}

interface ICountable {
    countItems(): number
}

export interface IGameBoard extends ITicker, ICountable {
    addCell(x: number, y: number): IGameBoard

    containsCellsAt(...points: IPoint[]): boolean
}

export class Board implements IGameBoard {

    private currentGeneration: Dictionary<IPoint, ICell>;

    constructor() {
        this.currentGeneration = new Dictionary<IPoint, ICell>();
    }

    public countItems(): number {
        return this.currentGeneration.size();
    }

    public addCell(x: number, y: number): IGameBoard {
        this.currentGeneration.setValue(new Point(x, y), new LiveCell());
        return this
    }

    public addCells(...points: IPoint[]) {
        points.forEach((point) => {
            this.addCell(point.x, point.y);
        })
    }

    public get cells(): IPoint[] {
        return this.currentGeneration.keys();
    }

    public containsCellsAt(...points: IPoint[]): boolean {
        return this.occupied(points).length === points.length;
    }

    public tick(): IGameBoard {
        const nextGeneration = new Board();

        this.currentGeneration.forEach((point: IPoint, cell: ICell) => {
            const oldCell = cell.evolve(this.countNeighboursAt(point));
            if (oldCell.isAlive()) {
                nextGeneration.addCell(point.x, point.y)
            }

            point.neighbours().forEach(neighbourPoint => {
                const neighbourCell = this.currentGeneration.getValue(neighbourPoint) || new DeadCell();

                if (!neighbourCell.isAlive() && !neighbourCell.isEvolved()) {
                    const newCell = neighbourCell.evolve(this.countNeighboursAt(neighbourPoint));

                    if (newCell.isAlive()) {
                        nextGeneration.addCell(neighbourPoint.x, neighbourPoint.y)
                    }
                }
            })

        });

        return nextGeneration
    }

    private containsCellAt(point: IPoint): boolean {
        return this.currentGeneration.containsKey(point);
    }

    private occupied(points: IPoint[]): IPoint[] {
        return points.filter((point) => {
            return this.containsCellAt(point)
        })
    }

    private countNeighboursAt(point: IPoint): number {
        const neighbours = point.neighbours();
        return this.occupied(neighbours).length
    }
}