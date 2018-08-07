export interface ICell {
    evolve(numberOfNeighbours : number): ICell
    isAlive() : boolean
    isEvolved() : boolean
}

export class LiveCell implements ICell {

    private evolved : boolean = false;

    public evolve(numberOfNeighbours : number): ICell {
        this.evolved = true;

        if (numberOfNeighbours === 2 || numberOfNeighbours === 3) {
            return new LiveCell()
        }
        return new DeadCell()
    }

    public isAlive(): boolean {
        return true;
    }

    public isEvolved(): boolean {
        return this.evolved;
    }
}

export class DeadCell implements ICell {
    private evolved = false;

    public evolve(numberOfNeighbours : number): ICell {
        this.evolved = true;

        if (numberOfNeighbours === 3) {
            return new LiveCell();
        }
        return new DeadCell();
    }

    public isAlive(): boolean {
        return false;
    }

    public isEvolved(): boolean {
        return this.evolved;
    }
}
