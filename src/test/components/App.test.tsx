import {shallow} from "enzyme";
import * as React from 'react';

import App from '../../main/components/App';
import TickButton from "../../main/components/TickButton";
import VisualBoard from "../../main/components/VisualBoard";

it('should render without crashing', () => {
    shallow(<App/>);
});

it('should contain a Board element', () => {
    const wrapped = shallow(<App/>);
    expect(wrapped.find(VisualBoard)).toHaveLength(1);
});

it('should contain a TickButton element', () => {
    const wrapped = shallow(<App/>);
    expect(wrapped.find(TickButton)).toHaveLength(1);
});

