import React from 'react';
import { shallow } from 'enzyme';
import Buttton from './Button';

it('renders Buttton without crashing', () => {
  shallow(<Buttton />);
});

/*
describe('Component: Button', () => {
    const renderMock = jest.fn();
    const minProps = {
        goToSlide: {renderMock},
        className: '',
        text: '',
        toolTip: ''
    };  
  
    it('renders a Buttton with props without crashing', () => {
      const wrapper = shallow(
        <Button {...minProps} />
      );
  
    });
  });

  */



