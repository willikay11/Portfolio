import React, {useState} from "react";
import {ProjectType, Section} from "../../utils/enums";
import {Project} from "../../utils/interfaces";

interface ExperienceComponentProps {
    section: Section;
    projects: Project[]
}
const ExperienceComponent = ({ section, projects }: ExperienceComponentProps) => {
    const [projectType, setProjectType] = useState('work');

    return(
      <section className={section === 'experience' ? 'animate-jump' : ''}>
        <div className="text-gray-900 uppercase text-x8 font-[900] mt-10 xl:text-x15">
          <span className={`${projectType === 'work' ? 'text-rose-500' : ''} cursor-pointer`} onClick={() => setProjectType('work')}>WORK EXPERIENCE</span>&nbsp;/&nbsp;
          <span className={`${projectType === 'personal' ? 'text-rose-500' : ''} cursor-pointer`} onClick={() => setProjectType('personal')}>PERSONAL PROJECTS</span>
        </div>
        {
          projectType === 'work' ? (
              <div className="grid grid-cols-2 gap-6 mt-2.5">
                  {
                      projects?.filter((project) => project.type === ProjectType.work)?.map((project, index) => (
                          <div key={`${project.title}-${index}`}>
                              <img src={project.image} className="mb-2" alt={`${project.title} Logo`} />
                              <p className="text-gray-900 text-x13 lg:text-sm">
                                  <strong>{project.title}:</strong> {project.description}
                              </p>
                          </div>
                      ))
                  }
              </div>
          ) : (
              <div className="grid grid-cols-2 gap-6 mt-2.5">
                  {
                      projects?.filter((project) => project.type === ProjectType.personal)?.map((project, index) => (
                          <div key={`${project.title}-${index}`}>
                              <img src={project.image} className="mb-2" alt={`${project.title} Logo`}/>
                              <p className="text-gray-900 text-x13 lg:text-sm">
                                  <strong>{project.title}:</strong> {project.description}
                              </p>
                          </div>
                      ))
                  }
              </div>
          )
        }
      </section>
  );
}

export default ExperienceComponent;