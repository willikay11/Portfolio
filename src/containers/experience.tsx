import React from "react";
import ExperienceComponent from "../components/Experience";

interface ExperienceContainerProps {
  section: string;
}
const ExperienceContainer = ({ section }: ExperienceContainerProps) => {
  return(
      <ExperienceComponent section={section} />
  );
}

export default ExperienceContainer;