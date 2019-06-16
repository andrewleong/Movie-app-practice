import React from 'react';
import { shallow } from 'enzyme';
import MovieDetails from '../containers/MovieDetails';

const API_SITE = process.env.REACT_APP_API_SITE;
const API_KEY = process.env.REACT_APP_API_KEY;

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
