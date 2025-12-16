import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { StrapiCollection, StrapiSingle } from '../../Types/StrapiTypes';
import type { HeaderResponse, NavItemsResponse } from '../../Types/StrapiResponseTypes';

const BASE_URL = import.meta.env.VITE_APP_STRAPI_BASE_URL; // Replace with your deployed Strapi URL

export const strapiApi = createApi({
  reducerPath: 'strapiApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}/api/` }),
  endpoints: (builder) => ({
    getProjects: builder.query<any, void>({
      query: () => 'projects?populate=*',
    }),
    getProjectById: builder.query<any, string>({
      query: (id) => `projects/${id}?populate=*`,
    }),
    getHero: builder.query<StrapiSingle<HeaderResponse>, void>({
      query: () => 'intro?populate=*'
    }),
        getNavItems: builder.query<StrapiCollection<NavItemsResponse>, void>({
      query: () => 'nav-items'
    }),
  }),
});

export const { 
  useGetProjectsQuery, 
  useGetProjectByIdQuery, 
  useGetHeroQuery,
  useGetNavItemsQuery
} = strapiApi;
