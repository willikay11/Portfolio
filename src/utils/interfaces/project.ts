import {ProjectType} from "../enums";

export interface Project {
    type: ProjectType,
    image: string,
    title: string,
    description: string,
    canView: boolean,
    imageWidth?: string,
    secondaryImage?: string,
    displayImages?: string[],
    tech?: string[],
    link?: string,
    images?: string[]
}