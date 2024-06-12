import { API } from '../api';
export const OurCompaniesService: any = API.injectEndpoints({
  endpoints: (build) => ({
    getCompanies: build.query<any, any>({
      query: () => ({
        method: 'GET',
        url: `our-company?locale=${'en'}`,
      }),
      transformResponse: (data) => data,
      transformErrorResponse: (error) => error,
    }),
  }),
});

export const { useGetCompaniesQuery } = OurCompaniesService;
