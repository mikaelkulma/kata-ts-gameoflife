import {Point} from "../../main/core/Point";

describe("Point", () => {

    it("should have a string representation with position", () => {
        expect(new Point(1, 2).toString()).toEqual("(1,2)");
    });

    it("should have a static factory method", () => {
        expect(Point.at(1, 2)).toEqual(new Point(1, 2));
    })

    it("should know its neighbours", () => {
        expect(Point.at(2, 2).neighbours()).toEqual(
            [
                Point.at(1, 1),
                Point.at(2, 1),
                Point.at(3, 1),
                Point.at(1, 2),
                Point.at(3, 2),
                Point.at(1, 3),
                Point.at(2, 3),
                Point.at(3, 3),

            ]
        );
    })
})