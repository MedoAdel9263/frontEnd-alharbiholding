import { API } from '../api';
export const IntializeService: any = API.injectEndpoints({
  endpoints: (build) => ({
    getInit: build.query<any, any>({
      query: () => ({
        method: 'GET',
        url: `Initialize/init`,
      }),
      transformResponse: (data) => data,
      transformErrorResponse: (error) => error,
    }),
    getHistoryById: build.mutation<any, any>({
      query: (data) => ({
        method: 'GET',
        url: `Initialize/get-histories-byId?Id=${data.Id}`,
      }),
      transformResponse: (data) => data,
      transformErrorResponse: (error) => error,
    }),
    getHistoryByCategoryId: build.mutation<any, any>({
      query: (data) => ({
        method: 'GET',
        url: `Initialize/get-histories-byCategoryId?categoryId=${data.Id}`,
      }),
      transformResponse: (data) => data,
      transformErrorResponse: (error) => error,
    }),
    getAddMessage: build.mutation<any, any>({
      query: (data) => ({
        method: 'POST',
        url: `Initialize/add-message`,
        body: data
      }),
      transformResponse: (data) => data,
      transformErrorResponse: (error) => error,
    }),
  }),
});

export const { 
  useGetInitQuery ,
   useGetHistoryByIdMutation,
   useGetHistoryByCategoryIdMutation,
   useGetAddMessageMutation
   } = IntializeService;
