import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001"
  }),
  tagTypes: ["Jobs"],
  endpoints: builder => ({
    getAllJobs: builder.query({
      query: () => "/jobs",
      providesTags: ["Jobs"]
    }),
    addJob: builder.mutation({
      query: data => ({
        url: `/jobs`,
        method: "POST",
        body: data
      }),
      invalidatesTags: ["Jobs"]
    })
  })
});

export const { useGetAllJobsQuery, useAddJobMutation } = apiSlice;
