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
    description: 'Lead the engineering team in building the trade finance platform and the API gateway with are been actively used by the clients.',
    canView: false,
  },
  {
    type: ProjectType.work,
    title: 'BRCK',
    image: brck,
    description: 'Reworked the internal content repository and distribution platform which led to easier management of content',
    canView: false,
  },
  {
    type: ProjectType.work,
    title: 'AJUA',
    image: ajua,
    description: 'Worked with other engineers to build, test and deploy the customer analytics platform',
    canView: false,
  },
  {
    type: ProjectType.work,
    title: 'Cytonn',
    image: cytonn,
    description: 'Built their customer facing mobile application using react native.',
    canView: false,
  },
  {
    type: ProjectType.personal,
    title: 'Solgates Fashion',
    image: solgates,
    secondaryImage: solgates,
    description: 'Built the customer facing ecommerce website and the internal admin platform.',
    canView: true,
    imageWidth: '150px',
    tech: ['React', 'Remix', 'Redis'],
    displayImages: [
        'https://res.cloudinary.com/drauzqmrk/image/upload/f_auto,q_auto/v1/solgates-fashion/ypexripvrsxkbowuqaqt',
        'https://res.cloudinary.com/drauzqmrk/image/upload/f_auto,q_auto/v1/solgates-fashion/nwgngwgo8chrr2vwzkfo',
        'https://res.cloudinary.com/drauzqmrk/image/upload/f_auto,q_auto/v1/solgates-fashion/ylndl9hd7ofk4ogmh1n1',
        'https://res.cloudinary.com/drauzqmrk/image/upload/f_auto,q_auto/v1/solgates-fashion/ajnrojop5ngrjs6cxph7',
    ]
  },
  {
    type: ProjectType.personal,
    title: 'Solgates Component Library',
    image: solgates,
    secondaryImage: solgates,
    description: 'Built the component to ensure consistency through out the entire ecommerce platform.',
    canView: true,
    imageWidth: '150px',
    tech: ['Tailwind CSS', 'Headless UI', 'React'],
    link: 'https://willikay11.github.io/solgates-component-library',
    displayImages: [
        'https://res.cloudinary.com/drauzqmrk/image/upload/f_auto,q_auto/v1/solgates-component-library/mrtx0pqpnawbh6pmgywv',
        'https://res.cloudinary.com/drauzqmrk/image/upload/f_auto,q_auto/v1/solgates-component-library/sr8blskbrfchsk4xcrrp',
        'https://res.cloudinary.com/drauzqmrk/image/upload/f_auto,q_auto/v1/solgates-component-library/rrquk8dxcsa8969r1d57',
        'https://res.cloudinary.com/drauzqmrk/image/upload/f_auto,q_auto/v1/solgates-component-library/fjdgsar7g4lubsxid4jp'
    ]
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