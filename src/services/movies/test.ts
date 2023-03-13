import { getNextMonth } from 'utils/formatters/dateFormatter';
import api from 'services/api.config';
import {
  getMostPopularMovies,
  getMovies,
  getTopUpcommingMovies
} from './index';

jest.mock('services/api.config');

describe('Movies service', () => {
  describe('getMovies', () => {
    it('should return an array of movies', async () => {
      const mockedResponse = {
        data: {
          results: [
            { id: 1, title: 'Movie 1' },
            { id: 2, title: 'Movie 2' }
          ],
          total_pages: 1,
          total_results: 2
        }
      };

      (api.get as jest.Mock).mockResolvedValueOnce(mockedResponse);

      const movies = await getMovies(1, 0);

      expect(movies.results.length).toBe(2);
      expect(movies.total_pages).toBe(1);
      expect(movies.total_results).toBe(2);
    });
  });

  describe('getMostPopularMovies', () => {
    it('should return an array of the 10 most popular movies', async () => {
      const mockedResponse = {
        data: {
          results: [
            { id: 1, title: 'Movie 1', popularity: 8.5 },
            { id: 2, title: 'Movie 2', popularity: 8.0 },
            { id: 3, title: 'Movie 3', popularity: 7.5 },
            { id: 4, title: 'Movie 4', popularity: 7.0 },
            { id: 5, title: 'Movie 5', popularity: 6.5 },
            { id: 6, title: 'Movie 6', popularity: 6.0 },
            { id: 7, title: 'Movie 7', popularity: 5.5 },
            { id: 8, title: 'Movie 8', popularity: 5.0 },
            { id: 9, title: 'Movie 9', popularity: 4.5 },
            { id: 10, title: 'Movie 10', popularity: 4.0 },
            { id: 11, title: 'Movie 11', popularity: 3.5 }
          ]
        }
      };

      (api.get as jest.Mock).mockResolvedValueOnce(mockedResponse);

      const movies = await getMostPopularMovies();

      expect(movies.length).toBe(10);
      expect(movies[0].id).toBe(1);
      expect(movies[1].id).toBe(2);
      expect(movies[2].id).toBe(3);
      expect(movies[3].id).toBe(4);
      expect(movies[4].id).toBe(5);
      expect(movies[5].id).toBe(6);
      expect(movies[6].id).toBe(7);
      expect(movies[7].id).toBe(8);
      expect(movies[8].id).toBe(9);
      expect(movies[9].id).toBe(10);
    });
  });

  describe('getTopUpcommingMovies', () => {
    it('should return an array of the 10 top upcoming movies', async () => {
      const mockedResponse = {
        data: {
          results: [
            {
              id: 1,
              title: 'Movie 1',
              popularity: 8.5,
              release_date: getNextMonth()
            },
            {
              id: 2,
              title: 'Movie 2',
              popularity: 8.0,
              release_date: getNextMonth()
            },
            {
              id: 3,
              title: 'Movie 3',
              popularity: 7.5,
              release_date: getNextMonth()
            },
            {
              id: 4,
              title: 'Movie 4',
              popularity: 7.0,
              release_date: getNextMonth()
            },
            {
              id: 5,
              title: 'Movie 5',
              popularity: 6.5,
              release_date: getNextMonth()
            },
            {
              id: 6,
              title: 'Movie 6',
              popularity: 6.0,
              release_date: getNextMonth()
            },
            {
              id: 7,
              title: 'Movie 7',
              popularity: 5.5,
              release_date: getNextMonth()
            },
            {
              id: 8,
              title: 'Movie 8',
              popularity: 5.0,
              release_date: getNextMonth()
            },
            {
              id: 9,
              title: 'Movie 9',
              popularity: 4.5,
              release_date: getNextMonth()
            },
            {
              id: 10,
              title: 'Movie 10',
              popularity: 4.0,
              release_date: getNextMonth()
            },
            {
              id: 11,
              title: 'Movie 11',
              popularity: 3.5,
              release_date: getNextMonth()
            }
          ]
        }
      };

      (api.get as jest.Mock).mockResolvedValueOnce(mockedResponse);

      const movies = await getTopUpcommingMovies();

      expect(movies.length).toBe(10);
      expect(movies[0].id).toBe(1);
      expect(movies[1].id).toBe(2);
      expect(movies[2].id).toBe(3);
      expect(movies[3].id).toBe(4);
      expect(movies[4].id).toBe(5);
      expect(movies[5].id).toBe(6);
      expect(movies[6].id).toBe(7);
      expect(movies[7].id).toBe(8);
      expect(movies[8].id).toBe(9);
      expect(movies[9].id).toBe(10);
    });
  });
});
