import React from "react";
import ExperienceComponent from "../components/Experience";
import {ProjectType, Section} from "../utils/enums";

import gapstack from "../assets/images/gapstack.png";
import ajua from "../assets/images/AJUA.png";
import brck from "../assets/images/BRCK.png";
import cytonn from "../assets/images/cytonn.png";
import solgates from "../assets/images/solgates.svg";
import {Project} from "../utils/interfaces";

const projects: Project[] = [
  {
    type: ProjectType.work,
    title: 'Gapstack',
    image: gapstack,
    description: 'This is some placeholder text. I am passionate about helping creatives and entrepreneurial',
    canView: false,
    imageWidth: 'auto'
  },
  {
    type: ProjectType.work,
    title: 'BRCK',
    image: brck,
    description: 'This is some placeholder text. I am passionate about helping creatives and entrepreneurial',
    canView: false,
    imageWidth: 'auto'
  },
  {
    type: ProjectType.work,
    title: 'AJUA',
    image: ajua,
    description: 'This is some placeholder text. I am passionate about helping creatives and entrepreneurial',
    canView: false,
    imageWidth: 'auto'
  },
  {
    type: ProjectType.work,
    title: 'Cytonn',
    image: cytonn,
    description: 'This is some placeholder text. I am passionate about helping creatives and entrepreneurial',
    canView: false,
    imageWidth: '70px'
  },
  {
    type: ProjectType.personal,
    title: 'Solgates Fashion',
    image: solgates,
    secondaryImage: solgates,
    description: 'This is some placeholder text. I am passionate about helping creatives and entrepreneurial',
    canView: true,
    imageWidth: '150px',
    tech: ['React', 'Remix', 'Redis']
  },
  {
    type: ProjectType.personal,
    title: 'Solgates Component Library',
    image: solgates,
    secondaryImage: solgates,
    description: 'This is some placeholder text. I am passionate about helping creatives and entrepreneurial',
    canView: true,
    imageWidth: '150px',
    tech: ['Tailwind CSS', 'Headless UI', 'React']
  }
];

interface ExperienceContainerProps {
  section: Section;
}
const ExperienceContainer = ({ section }: ExperienceContainerProps) => {
  return(
      <ExperienceComponent section={section} projects={projects} />
  );
}

export default ExperienceContainer;