import { API } from '../api';
debugger
export const SubscribeService: any = API.injectEndpoints({
  endpoints: (build) => ({
    Subscribe: build.mutation<any, any>({
      query: (data) => ({
        method: 'POST',
        url: `subscription`,
        body: {
            data:data
        } 
      }),
      transformResponse: (data) => data,
      transformErrorResponse: (error) => error,
    }),
  }),
});

export const { useSubscribeMutation } = SubscribeService;
