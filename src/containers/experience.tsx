import React from "react";
import ExperienceComponent from "../components/Experience";
import {Section} from "../utils/enums";

interface ExperienceContainerProps {
  section: Section;
}
const ExperienceContainer = ({ section }: ExperienceContainerProps) => {
  return(
      <ExperienceComponent section={section} />
  );
}

export default ExperienceContainer;