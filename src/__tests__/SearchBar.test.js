import React from 'react';
import { shallow } from 'enzyme';
import SearchBarComponent from '../components/SearchBarComponent';

const wrapper = shallow(<SearchBarComponent />);

describe('(Component) Search Bar', () => {
    it('should render an <input /> to type movie names', () => {
        expect(wrapper.find('input')).toHaveLength(1);
    });

    it('should call onQueryChange while typing', () => {
        const mock = jest.fn();
        const value = "inception";
        const wrapper = shallow(
            <SearchBarComponent
                onQueryChange={mock}
            />
        )

        wrapper.find('#search-bar').simulate('change', null, value)
        expect(mock).toBeCalledWith(null, value);
    })

});
