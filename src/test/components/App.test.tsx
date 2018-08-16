import {mount, shallow} from "enzyme";
import * as React from 'react';

import App from '../../main/components/App';
import TickButton from "../../main/components/TickButton";
import VisualBoard from "../../main/components/VisualBoard";

it('should render without crashing', () => {
    mount(<App/>);
});

it('should contain a Board element', () => {
    const wrapped = shallow(<App/>);

    expect(wrapped.find(VisualBoard)).toHaveLength(1);
});

it('should contain a TickButton element', () => {
    const wrapped = shallow(<App/>);

    expect(wrapped.find(TickButton)).toHaveLength(1);
});

it('should start running when TickButton is clicked', () => {
    const wrapped = shallow(<App/>);
    const clickHandler = wrapped.find(TickButton).prop("onClick");
    if (!clickHandler) {
        throw new TypeError("click handler is undefined!")
    }

    clickHandler({} as React.MouseEvent<HTMLButtonElement>)

    expect(wrapped.state("running")).toBe(true);
});

it('should stop running when TickButton is clicked again', () => {
    const wrapped = shallow(<App/>);
    const clickHandler = wrapped.find(TickButton).prop("onClick");
    if (!clickHandler) {
        throw new TypeError("click handler is undefined!")
    }

    clickHandler({} as React.MouseEvent<HTMLButtonElement>)
    clickHandler({} as React.MouseEvent<HTMLButtonElement>)

    expect(wrapped.state("running")).toBe(false);

});

it('should keep track of generation count', (done) => {
    const wrapped = shallow(<App/>);
    const clickHandler = wrapped.find(TickButton).prop("onClick");
    if (!clickHandler) {
        throw new TypeError("click handler is undefined!")
    }

    clickHandler({} as React.MouseEvent<HTMLButtonElement>)

    setTimeout(()=> {
        expect(wrapped.state("generations")).toBe(1);
        done();
    }, 1100)


});
