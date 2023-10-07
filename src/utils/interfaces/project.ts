import {ProjectType} from "../enums";

export interface Project {
    type: ProjectType,
    image: string,
    title: string,
    description: string
}