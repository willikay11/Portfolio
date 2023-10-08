import React, {useEffect, useState} from "react";
import {Dialog} from "@headlessui/react";
import {RiCheckDoubleLine, RiCloseLine} from "react-icons/ri";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';

import {Project} from "../../utils/interfaces";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

interface ProjectModalProps {
    project: Project | null,
    onClose: () => void
}
const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const onCloseModal = () => {
        onClose();
    };

    useEffect(() => {
        if (project && project.canView) {
            setIsModalOpen(true);
        } else {
            setIsModalOpen(false);
        }
    }, [project]);

    return(
        <Dialog as="div" open={isModalOpen} className="relative z-10" onClose={onCloseModal}>
            <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur" />
            <div className="fixed inset-0 overflow-y-auto">
                <div className="grid grid-cols-12 h-full">
                    <div className="col-span-12 md:col-start-2 md:col-span-11 xl:col-start-3 xl:col-span-8 2xl:col-start-4 2xl:col-span-5 3xl:col-start-5 3xl:col-span-4">
                        <div className="flex min-h-full pt-24 text-center">
                            <Dialog.Panel className="animate-fade-up w-full transform overflow-hidden rounded-t-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                <div className="flex flex-row justify-between items-center border-b-[1px] border-[#f4f4f4] pb-4">
                                    <div className="inline-flex">
                                        <img src={project?.secondaryImage ?? project?.image} width={project?.imageWidth} alt={`${project?.title} Logo`} />
                                        <div className="flex flex-col ml-4">
                                            <p className="text-base font-[600] text-gray-900">{project?.title}</p>
                                            <p className="text-x13 font-normal text-gray-900 mt-1.5 w-2/3">{project?.description}</p>
                                        </div>
                                    </div>

                                    <div className="rounded-full w-10 h-10 bg-gray-100 flex justify-center items-center cursor-pointer" onClick={onCloseModal}>
                                        <RiCloseLine size={18} />
                                    </div>
                                </div>

                                <div className="h-full overflow-auto">
                                    <p className="text-gray-900 uppercase text-x8 font-[900] mt-4 xl:text-x15">TECH STACK</p>
                                    <div className="inline-flex mt-2">
                                        {project?.tech?.map((tech, index) =>
                                            <span key={`${tech}-${index}`} className="mr-2 text-gray-900 text-x13 lg:text-sm inline-flex items-center"><RiCheckDoubleLine className="mr-1" />{tech}</span>
                                        )}
                                    </div>
                                    <div className="h-[60%] mt-4">
                                        <Swiper
                                            slidesPerView={'auto'}
                                            spaceBetween={30}
                                            pagination={{
                                                clickable: true,
                                            }}
                                            modules={[Scrollbar]}
                                            className="w-full h-full"
                                        >
                                            {project?.displayImages?.map((image, index) =>
                                                <SwiperSlide key={index} className="rounded-2xl !w-[80%] bg-orange-100 flex items-center justify-center pt-8 pl-8 pr-8">
                                                    <img src={image} alt="1" />
                                                </SwiperSlide>
                                            )}
                                        </Swiper>
                                    </div>

                                    <div className="mt-4">
                                        <p className="text-gray-900 text-x13 mt-2.5 w-3/4 lg:text-sm">
                                            My frontend tech stack is a robust arsenal of cutting-edge technologies, ensuring I can create immersive and responsive user interfaces
                                        </p>

                                        <button className="text-x15 text-rose-500 mt-4 outline-0" onClick={() => window.open(project?.link, '_blank')}>View</button>
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </div>
                    </div>
                </div>
            </div>
        </Dialog>
    );
}

export default ProjectModal;