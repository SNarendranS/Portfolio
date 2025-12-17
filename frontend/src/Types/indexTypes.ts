import type { SerializedError } from "@reduxjs/toolkit";
import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";

export type Prop<T> = {
    data: T | undefined;
    isLoading: boolean;
    error: FetchBaseQueryError | SerializedError | undefined
}

export type RefType = {
    introRef?: React.RefObject<HTMLDivElement | null>;
    projectsRef?: React.RefObject<HTMLDivElement | null>;
    contactRef?: React.RefObject<HTMLDivElement | null>;
    aboutRef?: React.RefObject<HTMLDivElement | null>;
}