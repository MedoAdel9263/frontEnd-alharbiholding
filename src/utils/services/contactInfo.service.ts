import { API } from '../api';
export const ContactInfoService: any = API.injectEndpoints({
  endpoints: (build) => ({
    getContactInfo: build.query<any, any>({
      query: () => ({
        method: 'GET',
        url: `contact-info?locale=${'en'}`,
      }),
      transformResponse: (data) => data,
      transformErrorResponse: (error) => error,
    }),
  }),
});

export const { useGetContactInfoQuery } = ContactInfoService;
