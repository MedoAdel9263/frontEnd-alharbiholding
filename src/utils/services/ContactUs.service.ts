import { API } from '../api';
export const ContactUsService: any = API.injectEndpoints({
  endpoints: (build) => ({
    getContactUs: build.query<any, any>({
      query: () => ({
        method: 'GET',
        url: `contact-us?locale=${'en'}`,
      }),
      transformResponse: (data) => data,
      transformErrorResponse: (error) => error,
    }),
  }),
});

export const { useGetContactUsQuery } = ContactUsService;
