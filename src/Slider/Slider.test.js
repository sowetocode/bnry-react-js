import React from 'react';
import { shallow } from 'enzyme';
import Slider from './Slider';

it('renders Slider without crashing', () => {
    let image = {};
    shallow(<Slider image={image}/>);
});

