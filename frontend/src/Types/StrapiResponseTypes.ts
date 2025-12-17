import type { StrapiImage } from "./StrapiTypes"

export type HeroResponse = {
    firstName: string;
    lastName: string;
    title: string;
    biography: string;
    picture: StrapiImage;
}

export type NavType = 'text' | 'dropdown' | 'button' | 'link'
export type NavItemsResponse = {
    id: number;
    documentId: string;
    itemName: string;
    navType: NavType;
    displayOrder: number;
}

export type ProjectsResponse = {
    id: number;
    documentId: string;
    projectName: string,
    gitURL: string,
    liveURL: string,
    projectDescription: string;
    techStack: string[];
    thumbnail: StrapiImage,
    demoScreenshots: StrapiImage[],
    demoVideo: StrapiImage
}