import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type {  StrapiResponse } from '../../Types/StrapiTypes';
import type { HeroResponse, NavItemsResponse, ProjectsResponse } from '../../Types/StrapiResponseTypes';

const BASE_URL = import.meta.env.VITE_APP_STRAPI_BASE_URL; // Replace with your deployed Strapi URL

export const strapiApi = createApi({
  reducerPath: 'strapiApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}/api/` }),
  endpoints: (builder) => ({
    getProjects: builder.query<StrapiResponse<ProjectsResponse[]>, void>({
      query: () => 'projects?populate=*',
    }),
    getProjectById: builder.query<any, string>({
      query: (id) => `projects/${id}?populate=*`,
    }),
    getHero: builder.query<StrapiResponse<HeroResponse>, void>({
      query: () => 'intro?populate=*'
    }),
    getNavItems: builder.query<StrapiResponse<NavItemsResponse[]>, void>({
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
