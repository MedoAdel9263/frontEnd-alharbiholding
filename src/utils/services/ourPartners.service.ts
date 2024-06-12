import { API } from '../api';
export const OurPartnersService: any = API.injectEndpoints({
  endpoints: (build) => ({
    getPartners: build.query<any, any>({
      query: () => ({
        method: 'GET',
        url: `our-partners?locale=${'en'}`,
      }),
      transformResponse: (data) => data,
      transformErrorResponse: (error) => error,
    }),
  }),
});

export const { useGetPartnersQuery } = OurPartnersService;
