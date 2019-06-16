import React from 'react';
import { shallow } from 'enzyme';
import Home from '../containers/Home';

const wrapper = shallow(<Home />);

describe('(Container) Home', () => {
    it('renders without crashing', () => {
        expect(wrapper).toHaveLength(1);
    });

    it('should render a <SearchBar />', () => {
        expect(wrapper.find('SearchBar')).toHaveLength(1);
        expect(wrapper.props()).toMatchSnapshot();
    });

    it('should render a <MovieList /> if movies are found', () => {
        const movies = [
            {
                id: 1,
                name: "movie 1"
            }
        ]
        wrapper.setState({ movies })
        expect(wrapper.find('MovieList')).toHaveLength(1);
        expect(wrapper.props()).toMatchSnapshot();
    });

    it('should display a message if there are no movies', () => {
        const movies = []
        wrapper.setState({ movies })
        expect(wrapper.find('h1').text()).toEqual("Please do a search.");
        expect(wrapper.props()).toMatchSnapshot();
    });

});
