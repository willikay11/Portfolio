import React, { Fragment } from "react";
import {Dialog, Transition} from "@headlessui/react";
import {RiCheckDoubleLine, RiCloseLine} from "react-icons/ri";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';

import {Project} from "../../utils/interfaces";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const backgroundGradientColors = [
    {
        colorOne: '#FF8008',
        colorTwo: '#FFC837',
    },
    {
        colorOne: '#1E87F0',
        colorTwo: '#7AA5F3',
    },
    {
        colorOne: '#d946ef',
        colorTwo: '#8b5cf6',
    },
    {
        colorOne: '#ec4899',
        colorTwo: '#a855f7',
    },
]
interface ProjectModalProps {
    open: boolean;
    project: Project | null,
    onClose: () => void
}
const ProjectModal = ({ open, project, onClose }: ProjectModalProps) => {

    const onCloseModal = () => {
        onClose();
    };

    return(
        <Transition appear show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={onCloseModal}>
                <Transition.Child
                    as={Fragment}
                    enter="transition ease-out duration-1000"
                    enterFrom="translate-y-[110%]"
                    enterTo="translate-y-0"
                    leave="transition ease-in duration-1000"
                    leaveFrom="translate-y-0"
                    leaveTo="translate-y-[110%]"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur" />
                </Transition.Child>
                <Transition.Child
                    as={Fragment}
                    enter="transition ease-out duration-1000"
                    enterFrom="translate-y-[110%]"
                    enterTo="translate-y-0"
                    leave="transition ease-in duration-1000"
                    leaveFrom="translate-y-0"
                    leaveTo="translate-y-[110%]"
                >
                    <div className="fixed inset-0 overflow-y-auto">
                    <div className="grid grid-cols-12 h-full">
                        <div className="col-span-12 md:col-start-2 md:col-span-10 xl:col-start-3 xl:col-span-8 2xl:col-start-3 2xl:col-span-7 3xl:col-start-3 3xl:col-span-6">
                            <div className="flex min-h-full pt-24 text-center">

                                    <Dialog.Panel className="w-full transform overflow-hidden rounded-t-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                        <div className="flex flex-row justify-between items-center border-b-[1px] border-[#f4f4f4] pb-4">
                                            <div className="flex-col">
                                                <img src={project?.secondaryImage ?? project?.image} width={project?.imageWidth} alt={`${project?.title} Logo`} />
                                                <div className="flex flex-col mt-2 md:mt-4">
                                                    <p className="text-base font-[600] text-gray-900">{project?.title}</p>
                                                    <p className="text-x13 font-normal text-gray-900 mt-1.5 w-2/3">{project?.description}</p>
                                                </div>
                                            </div>

                                            <div className="rounded-full w-10 h-10 bg-gray-100 flex justify-center items-center cursor-pointer" onClick={onCloseModal}>
                                                <RiCloseLine size={18} />
                                            </div>
                                        </div>

                                        <div className="h-full overflow-auto">
                                            <p className="text-gray-900 uppercase text-x13 md:text-x8 font-[900] mt-4 xl:text-x15">TECH STACK</p>
                                            <div className="inline-flex mt-2">
                                                {project?.tech?.map((tech, index) =>
                                                    <span key={`${tech}-${index}`} className="mr-2 text-gray-900 text-x13 lg:text-sm inline-flex items-center"><RiCheckDoubleLine className="mr-1" />{tech}</span>
                                                )}
                                            </div>
                                            <div className="mt-4">
                                                <Swiper
                                                    slidesPerView={'auto'}
                                                    spaceBetween={30}
                                                    pagination={{
                                                        clickable: true,
                                                    }}
                                                    modules={[Scrollbar]}
                                                    className="w-full h-full"
                                                >
                                                    {project?.displayImages?.map((image, index) => {
                                                        const color = backgroundGradientColors[index];
                                                        return (
                                                                <SwiperSlide key={index} style={{ background: `linear-gradient(97deg, ${color?.colorOne} -0.4%, ${color.colorTwo} 100%)`}} className="rounded-2xl !w-[80%] flex items-center justify-center pt-6 pl-4 md:pt-16 md:pl-12">
                                                                    <img src={image} alt="1" />
                                                                </SwiperSlide>
                                                            )
                                                        }
                                                    )}
                                                </Swiper>
                                            </div>

                                            <div className="mt-4">
                                                <p className="text-gray-900 text-x13 mt-2.5 w-full md:w-3/4 lg:text-sm">
                                                    My frontend tech stack is a robust arsenal of cutting-edge technologies, ensuring I can create immersive and responsive user interfaces
                                                </p>

                                                <button className="text-x15 text-rose-500 mt-4 outline-0" onClick={() => window.open(project?.link, '_blank')}>View Site</button>
                                            </div>
                                        </div>
                                    </Dialog.Panel>
                            </div>
                        </div>
                    </div>
                </div>
                </Transition.Child>
            </Dialog>
        </Transition>
    );
}

export default ProjectModal;