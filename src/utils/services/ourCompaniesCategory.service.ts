import { API } from '../api';
export const OurCompanyCategoryService: any = API.injectEndpoints({
  endpoints: (build) => ({
    getOurCompanyCategory: build.query<any, any>({
      query: () => ({
        method: 'GET',
        url: `company-categories?locale=${'en'}`,
      }),
      transformResponse: (data) => data,
      transformErrorResponse: (error) => error,
    }),
  }),
});

export const { useGetOurCompanyCategoryQuery } = OurCompanyCategoryService;
