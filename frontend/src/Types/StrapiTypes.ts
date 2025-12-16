export type StrapiSingle<T, K = any> = {
    data: T;
    meta: K;
};

export type StrapiCollection<T> = {
    data: T[];
    meta: {
        pagination: {
            page: number;
            pageSize: number;
            pageCount: number;
            total: number;
        }
    }
};

type StrapiInnerImage = {
    ext: string;
    url: string;
    hash: string;
    mime: string;
    name: string;
    path: string | null;
    size: number;
    width: number;
    height: number;
    sizeInBytes: number;
};

export type StrapiImage = StrapiInnerImage & {
    id: number;
    alternativeText: string | null;
    caption: string | null;
    formats?: {
        small?: StrapiInnerImage;
        thumbnail?: StrapiInnerImage;
        medium?: StrapiInnerImage;
        large?: StrapiInnerImage;
        [key: string]: StrapiInnerImage | undefined;
    };
};
