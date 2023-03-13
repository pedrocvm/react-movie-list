import { GenreProps } from 'models/genre';
import api from 'services/api.config';
import { AxiosResponse } from 'axios';
import { getGenres } from '.';

describe('getGenres', () => {
  it('should return an array of genres', async () => {
    const mockGenres: GenreProps[] = [
      {
        id: 1,
        name: 'Action'
      },
      {
        id: 2,
        name: 'Comedy'
      }
    ];

    const mockResponse: AxiosResponse<{ genres: GenreProps[] }> = {
      data: { genres: mockGenres },
      status: 200,
      statusText: 'OK',
      headers: {},
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      config: {} as any
    };

    jest.spyOn(api, 'get').mockResolvedValueOnce(mockResponse);

    const result = await getGenres();

    expect(result).toEqual(mockGenres);
  });
});
