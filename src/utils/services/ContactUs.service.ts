import { API } from '../api';
export const ContactUsService: any = API.injectEndpoints({
  endpoints: (build) => ({
    ContactUs: build.mutation<any, any>({
      query: (data) => ({
        method: 'POST',
        url: `contact-us`,
        body:{data:data}
      }),
      transformResponse: (data) => data,
      transformErrorResponse: (error) => error,
    }),
  }),
});

export const { useContactUsMutation } = ContactUsService;
