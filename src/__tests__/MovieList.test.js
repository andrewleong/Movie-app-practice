import React from 'react';
import { shallow, mount } from 'enzyme';
import MovieList from '../components/MovieList';


describe('(Component) MovieList', () => {
    const wrapper = shallow(
        <MovieList
        />
    );

    const movies = [
        {
            id: 1,
            title: "Movie 1"
        },
        {
            id: 2,
            title: "Movie 2"
        }
    ]

    it('renders without crashing', () => {
        expect(wrapper).toHaveLength(1);
    });

    it('renders correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('accepts movieList props', () => {
        const wrapper = mount(
            <MovieList
                movieList={movies}
            />
        );
        expect(wrapper.props().movieList).toEqual(movies);
    });

});
