import React from 'react';
import { shallow, mount } from 'enzyme';
import SearchBarComponent from '../components/SearchBar';
import SearchBar from '../containers/SearchBar';



describe('(Component) Search Bar', () => {
    const wrapper = shallow(<SearchBarComponent />);

    it('should render an <input /> to type movie names', () => {
        expect(wrapper.find('input')).toHaveLength(1);
    });

    it('should render a <button /> to search for movies', () => {
        expect(wrapper.find('button')).toHaveLength(1);
    });

    it('should call onQueryChange while typing', () => {
        const mockFn = jest.fn();
        const value = "inception";
        const wrapper = shallow(
            <SearchBarComponent
                onQueryChange={mockFn}
            />
        )

        wrapper.find('#search-bar').simulate('change', null, value)
        expect(mockFn).toBeCalledWith(null, value);
        expect(wrapper.props()).toMatchSnapshot();
    })

    it('should be able to click search button', () => {
        const mockFn = jest.fn();
        const wrapper = shallow(
            <SearchBarComponent
                onSearch={mockFn}
            />
        )

        wrapper.find('button').simulate('click')
        expect(mockFn).toHaveBeenCalled();
        expect(wrapper.props()).toMatchSnapshot();
    })

});


describe('(Container) Search Bar', () => {
    it('should be able to click search when button is disabled', () => {
        const mockFn = jest.fn();
        const wrapper = mount(
            <SearchBar
                onSearch={mockFn}
            />
        )

        wrapper.setState({ disabled: true });

        wrapper.find('button').simulate('click')
        expect(mockFn).not.toHaveBeenCalled();
    })
})


