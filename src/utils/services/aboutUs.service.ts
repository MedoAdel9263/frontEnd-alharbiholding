import { API } from '../api';
export const AbioutUsService: any = API.injectEndpoints({
  endpoints: (build) => ({
    getAboutUs: build.query<any, any>({
      query: () => ({
        method: 'GET',
        url: `about-us?locale=${'en'}`,
      }),
      transformResponse: (data) => data,
      transformErrorResponse: (error) => error,
    }),
  }),
});

export const { useGetAboutUsQuery } = AbioutUsService;
