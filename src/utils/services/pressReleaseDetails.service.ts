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
    PressReleasesDetailsByCategoryId: build.query<any, any>({
      query: (data) => ({
        method: 'GET',
        url: `press-releases-detail/category/${data.id}`,
      }),
      transformResponse: (data) => data,
      transformErrorResponse: (error) => error,
    }),
    PressReleasesDetailsById: build.query<any, any>({
      query: (data) => ({
        method: 'GET',
        url: `press-releases-detail/${data.id}`,
      }),
      transformResponse: (data) => data,
      transformErrorResponse: (error) => error,
    }),
  }),
});

export const { useGetPressReleasesDetailsQuery, useLazyPressReleasesDetailsByCategoryIdQuery ,useLazyPressReleasesDetailsByIdQuery } = PressReleasesDetailsService;
