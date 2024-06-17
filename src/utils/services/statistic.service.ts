import { API } from '../api';
export const StatisticService: any = API.injectEndpoints({
  endpoints: (build) => ({
    getStatistic: build.query<any, any>({
      query: () => ({
        method: 'GET',
        url: `statistic`,
      }),
      transformResponse: (data) => data,
      transformErrorResponse: (error) => error,
    }),
  }),
});

export const { useGetStatisticQuery } = StatisticService;
