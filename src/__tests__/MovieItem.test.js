import React from 'react';
import { shallow, mount } from 'enzyme';
import MovieItemComponent from '../components/MovieItem';


describe('(Component) MovieList', () => {

    const movie = {
        id: 1,
        title: "Movie 1",
        poster_path: '1234',
        release_date: '12-2-2019'
    }

    const wrapper = shallow(
        <MovieItemComponent
            movie={ movie }
        />
    );

    it('renders without crashing', () => {
        expect(wrapper).toHaveLength(1);
    });

    it('render movie item props correctly', () => {
        expect(wrapper.props()).toMatchSnapshot();
    });
});
