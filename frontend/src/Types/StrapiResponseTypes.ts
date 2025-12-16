import type { StrapiImage } from "./StrapiTypes"

export type HeaderResponse = {
    name: string,
    title: string,
    biography: string
    picture: StrapiImage
}

export type NavType='text'|'dropdown'|'button'|'link'
export type NavItemsResponse = {
    id: number;
    documentId: string;
    itemName: string;
    navType: NavType;
    displayOrder: number;
}