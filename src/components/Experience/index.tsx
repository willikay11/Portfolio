import React, {useState} from "react";
import {ProjectType, Section} from "../../utils/enums";
import {Project} from "../../utils/interfaces";
import ProjectModal from "./ProjectModal";
import {RiArrowRightUpLine} from "react-icons/ri";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
interface ExperienceComponentProps {
    section: Section;
    projects: Project[]
}
const ExperienceComponent = ({ section, projects }: ExperienceComponentProps) => {
    const [projectType, setProjectType] = useState('work');
    const [project, setProject] = useState<Project | null>(null);
    return(
        <>
            <ProjectModal project={project} onClose={() => setProject(null)} />
            <section className={section === 'experience' ? 'animate-jump' : ''}>
                <div className="text-gray-900 uppercase text-x13 md:text-x8 font-[900] mt-10 xl:text-x15">
                    <span className={`${projectType === 'work' ? 'text-rose-500' : ''} cursor-pointer`} onClick={() => setProjectType('work')}>WORK EXPERIENCE</span>&nbsp;/&nbsp;
                    <span className={`${projectType === 'personal' ? 'text-rose-500' : ''} cursor-pointer`} onClick={() => setProjectType('personal')}>PERSONAL PROJECTS</span>
                </div>
                {
                    projectType === ProjectType.work ? (
                        <>
                            <div className="hidden md:grid grid-cols-2 gap-6 mt-2.5">
                                {
                                    projects?.filter((project) => project.type === ProjectType.work)?.map((project, index) => (
                                        <div key={`${project.title}-${index}`}>
                                            <div className="flex flex-row items-center mb-2">
                                                <img src={project.image} alt={`${project.title} Logo`}/>
                                                <span className={`text-xs cursor-pointer hover:text-rose-500 ml-2.5 ${project.canView ? 'visible' : 'hidden'}`} onClick={() => setProject(project)}>
                                                <RiArrowRightUpLine size={22} />
                                            </span>
                                            </div>
                                            <p className="text-gray-900 text-x13 lg:text-sm">
                                                <strong>{project.title}:</strong> {project.description}
                                            </p>
                                        </div>
                                    ))
                                }
                            </div>

                            <Swiper
                                slidesPerView={'auto'}
                                spaceBetween={30}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[Pagination]}
                                className="visible md:hidden w-full h-full"
                            >
                                {
                                    projects?.filter((project) => project.type === ProjectType.work)?.map((project, index) => (
                                        <SwiperSlide key={`${project.title}-${index}`} className="!w-[80%] flex items-center justify-center pt-6">
                                            <div className="flex flex-row items-center mb-2">
                                                <img src={project.image} alt={`${project.title} Logo`}/>
                                                <span className={`text-xs cursor-pointer hover:text-rose-500 ml-2.5 ${project.canView ? 'visible' : 'hidden'}`} onClick={() => setProject(project)}>
                                                <RiArrowRightUpLine size={22} />
                                            </span>
                                            </div>
                                            <p className="text-gray-900 text-x13 lg:text-sm">
                                                <strong>{project.title}:</strong> {project.description}
                                            </p>
                                        </SwiperSlide>
                                    ))

                                }
                            </Swiper>
                        </>
                    ) : (
                        <>
                            <div className="hidden md:grid grid-cols-2 gap-6 mt-2.5">
                                {
                                    projects?.filter((project) => project.type === ProjectType.personal)?.map((project, index) => (
                                        <div key={`${project.title}-${index}`}>
                                            <div className="flex flex-row items-center mb-2">
                                                <img src={project.image} alt={`${project.title} Logo`}/>
                                                <span className={`text-xs cursor-pointer hover:text-rose-500 ml-2.5 ${project.canView ? 'visible' : 'hidden'}`} onClick={() => setProject(project)}>
                                                <RiArrowRightUpLine size={22} />
                                            </span>                                        </div>
                                            <p className="text-gray-900 text-x13 lg:text-sm">
                                                <strong>{project.title}:</strong> {project.description}
                                            </p>
                                        </div>
                                    ))
                                }
                            </div>

                            <Swiper
                                slidesPerView={'auto'}
                                spaceBetween={30}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[Pagination]}
                                className="visible md:hidden w-full h-full"
                            >
                                {
                                    projects?.filter((project) => project.type === ProjectType.personal)?.map((project, index) => (
                                        <SwiperSlide key={`${project.title}-${index}`} className="!w-[80%] flex items-center justify-center pt-6">
                                            <div className="flex flex-row items-center mb-2">
                                                <img src={project.image} alt={`${project.title} Logo`}/>
                                                <span className={`text-xs cursor-pointer hover:text-rose-500 ml-2.5 ${project.canView ? 'visible' : 'hidden'}`} onClick={() => setProject(project)}>
                                                <RiArrowRightUpLine size={22} />
                                            </span>
                                            </div>
                                            <p className="text-gray-900 text-x13 lg:text-sm">
                                                <strong>{project.title}:</strong> {project.description}
                                            </p>
                                        </SwiperSlide>
                                    ))

                                }
                            </Swiper>
                        </>
                    )
                }
            </section>
        </>
  );
}

export default ExperienceComponent;