import { API } from '../api';
export const PressReleasesDetailsService: any = API.injectEndpoints({
  endpoints: (build) => ({
    getPressReleasesDetails: build.query<any, any>({
      query: () => ({
        method: 'GET',
        url: `press-releases-detail?locale=${'en'}`,
      }),
      transformResponse: (data) => data,
      transformErrorResponse: (error) => error,
    }),
  }),
});

export const { useGetPressReleasesDetailsQuery } = PressReleasesDetailsService;
