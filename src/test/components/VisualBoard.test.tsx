import {shallow} from "enzyme";
import * as React from "react";
import VisualBoard from "../../main/components/VisualBoard";
import {Point} from "../../main/core/Point";

it("should render all points", () => {
    const cells = [
        Point.at(1, 2),
        Point.at(2, 2),
        Point.at(3, 2)
    ]

    const wrapped = shallow(<VisualBoard cells={cells}/>)

    expect(wrapped.find(".board").children()).toHaveLength(3);

})