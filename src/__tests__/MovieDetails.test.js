import React from 'react';
import { shallow, mount } from 'enzyme';
import MovieDetails from '../containers/MovieDetails';
import MovieDetailsComponent from '../components/MovieDetails';

const API_SITE = process.env.REACT_APP_API_SITE;
const API_KEY = process.env.REACT_APP_API_KEY;


describe('(Component) MovieDetails', () => {
    it('should render a modal of movie details correctly', () => {
        const movie = {
            title: 'movie 1',
            id: 122,
            release_date: '12-12-2019'
        }
        const wrapper = mount(
            <MovieDetailsComponent
                movie={movie}
            />
        );

        expect(wrapper.props()).toEqual({movie});
        expect(wrapper.props()).toMatchSnapshot();
    })
});

describe('(Container) MovieDetails', () => {
    it('should fetch movie details when rendered', () => {
        const fetchSpy = jest.spyOn(window, 'fetch');
        const wrapper = shallow(
            <MovieDetails movieDetails={{ id: 64330 }} />
        );
        expect(fetchSpy).toBeCalled();
        expect(fetchSpy).toBeCalledWith(`${API_SITE}movie/64330?api_key=${API_KEY}`);
    });
});
