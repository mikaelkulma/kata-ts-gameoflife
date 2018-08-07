export interface IPoint {
    x: number
    y: number,
    neighbours() : Point[]
}

export class Point implements IPoint {
    public static at(x : number, y: number): IPoint {
        return new Point(x, y);
    }

    public x: number;
    public y: number;

    constructor(x : number, y: number) {
        this.x = x;
        this.y = y;
    }

    public toString() : string {
        return "(" + this.x + "," + this.y + ")"
    }

    public neighbours(): Point[] {
        return [
            Point.at(this.x - 1, this.y - 1),
            Point.at(this.x, this.y - 1),
            Point.at(this.x + 1, this.y - 1),
            Point.at(this.x - 1, this.y),
            Point.at(this.x + 1, this.y),
            Point.at(this.x - 1, this.y + 1),
            Point.at(this.x, this.y + 1),
            Point.at(this.x + 1, this.y + 1)
        ];
    }
}