const STRAPI_BASE_URL = import.meta.env.VITE_APP_STRAPI_BASE_URL
export const getStrapiImageURL = (url: string): string => {
    return STRAPI_BASE_URL + url
}