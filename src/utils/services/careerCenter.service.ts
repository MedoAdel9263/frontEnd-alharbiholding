import { API } from '../api';
export const CareerCenterService: any = API.injectEndpoints({
  endpoints: (build) => ({
    getCareerCenter: build.query<any, any>({
      query: () => ({
        method: 'GET',
        url: `career-center?locale=${'en'}`,
      }),
      transformResponse: (data) => data,
      transformErrorResponse: (error) => error,
    }),
  }),
});

export const { useGetCareerCenterQuery } = CareerCenterService;
