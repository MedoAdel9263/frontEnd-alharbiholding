import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBaseQuery from "./apiConfig";

export const API = createApi({
  baseQuery: customFetchBaseQuery,
  endpoints: () => ({}),
});
