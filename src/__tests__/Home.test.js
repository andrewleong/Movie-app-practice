import React from 'react';
import { shallow } from 'enzyme';
import Home from '../containers/Home';

const wrapper = shallow(<Home />);

describe('(Container) Home', () => {
    it('renders without crashing', () => {
        expect(wrapper).toHaveLength(1);
    });
});
