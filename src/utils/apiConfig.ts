import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query';

const baseUrl = 'https://middlenation1-002-site1.ctempurl.com/api/';
//const router = useNavigate();
const baseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers) => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      headers.set('authorization', `Bearer ${accessToken}`);
    }
  },
});

const customFetchBase: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);

  return result;
};

export default customFetchBase;
