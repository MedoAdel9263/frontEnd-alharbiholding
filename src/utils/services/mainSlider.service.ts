import { API } from '../api';
export const MainSliderService: any = API.injectEndpoints({
  endpoints: (build) => ({
    getMainSlider: build.query<any, any>({
      query: () => ({
        method: 'GET',
        url: `main-slider?locale=${'en'}`,
      }),
      transformResponse: (data) => data,
      transformErrorResponse: (error) => error,
    }),
  }),
});

export const { useGetMainSliderQuery } = MainSliderService;
