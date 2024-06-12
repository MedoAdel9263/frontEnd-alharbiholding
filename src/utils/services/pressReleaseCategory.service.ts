import { API } from '../api';
export const PressReleasesCategoryService: any = API.injectEndpoints({
  endpoints: (build) => ({
    getPressReleasesCategory: build.query<any, any>({
      query: () => ({
        method: 'GET',
        url: `press-releases-category?locale=${'en'}`,
      }),
      transformResponse: (data) => data,
      transformErrorResponse: (error) => error,
    }),
  }),
});

export const { useGetPressReleasesCategoryQuery } = PressReleasesCategoryService;
