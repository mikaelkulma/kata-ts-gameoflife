import {shallow} from "enzyme";
import * as React from "react";
import TickButton from "../../main/components/TickButton";

it("should display Start when not running", () => {
   const wrapped = shallow(<TickButton running={false} />);

   expect(wrapped.find("button").text()).toContain("Start")
});

it("should display Stop when running", () => {
    const wrapped = shallow(<TickButton running={true} />);

    expect(wrapped.find("button").text()).toContain("Stop")
});

it("should inform others when it was clicked", () => {
    const mock = jest.fn()
    const wrapped = shallow(<TickButton onClick={mock} running={false} />);

    wrapped.find("button").simulate("click");

    expect(mock).toHaveBeenCalledTimes(1)
});