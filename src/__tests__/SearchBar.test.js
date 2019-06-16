import React from 'react';
import { shallow } from 'enzyme';
import SearchBarComponent from '../components/SearchBarComponent';

const wrapper = shallow(<SearchBarComponent />);

describe('(Component) Search Bar', () => {
    it('should render an <input /> to type movie names', () => {
        expect(wrapper.find('input')).toHaveLength(1);
    });

});
