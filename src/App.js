import './App.css';
import me from './assets/images/me.svg';
import gapstack from './assets/images/gapstack.png';
import solgates from './assets/images/solgates.svg';
import brck from './assets/images/BRCK.png';
import ajua from './assets/images/AJUA.png';
import cytonn from './assets/images/cytonn.png';
import {RiCheckDoubleLine, RiFile2Line, RiGithubLine, RiMailLine, RiPhoneLine} from "react-icons/ri";
import {useState} from "react";

function App() {
  const [projectType, setProjectType] = useState('work');
  return (
      <div className="w-full bg-white h-screen p-4 mb-2">
          <div className="grid grid-cols-12 h-full">
            <div className="col-span-12 md:col-start-2 md:col-span-11 xl:col-start-3 xl:col-span-8 2xl:col-start-4 2xl:col-span-5 3xl:col-start-5 3xl:col-span-4">
                <p className="text-gray-600 text-x13 font-normal uppercase 2xl::text-x15 3xl:text-base">Menu</p>
                <div className="inline-flex mt-3">
                    <span className="text-gray-900 text-x13 font-[900] xl:text-base">Home&nbsp;/</span>
                    <span className="text-rose-500 text-x13 font-[900] xl:text-base">About Me&nbsp;</span>
                    <span className="text-gray-900 text-x13 font-[900] xl:text-base">/&nbsp;</span>
                    <span className="text-rose-500 text-x13 font-[900] xl:text-base">Tech Stack&nbsp;</span>
                    <span className="text-gray-900 text-x13 font-[900] xl:text-base">/&nbsp;</span>
                    <span className="text-rose-500 text-x13 font-[900] xl:text-base">Projects&nbsp;</span>
                    <span className="text-gray-900 text-x13 font-[900] xl:text-base">/&nbsp;</span>
                    <span className="text-rose-500 text-x13 font-[900] xl:text-base">Experience&nbsp;</span>
                </div>

                <div className="grid grid-cols-12">
                    <div className="col-span-8 mt-4 xl:mt-8">
                        <p className="text-gray-900 font-[900] text-4xl xl:text-4xl">Code Artist at Work</p>
                        <p className="text-gray-900 font-[900] text-4xl xl:text-4xl mt-2 xl:mt-4">Discover the <span className="text-rose-500">Artistry</span> of a Senior Engineer</p>

                        <section>
                            <p className="text-gray-900 uppercase text-x8 font-[900] mt-10 xl:text-x15">ABOUT ME</p>

                            <p className="text-gray-900 text-x13 mt-2.5 w-3/4 lg:text-sm">
                                Hello, my name is William, a passionate code craftsman who believes that love is at the heart of his work. With years of experience in the tech industry, my dedication to my craft shines through in every project I touch. My commitment to excellence and attention to detail are evident in the elegant products I creat, where each line of code is meticulously crafted with care.
                            </p>
                        </section>

                        <section>
                            <p className="text-gray-900 uppercase text-x8 font-[900] mt-10 xl:text-x15">TECH STACK</p>

                            <p className="text-gray-900 text-x13 mt-2.5 w-3/4 lg:text-sm">
                                My frontend tech stack is a robust arsenal of cutting-edge technologies, ensuring I can create immersive and responsive user interfaces
                            </p>
                            <div className="inline-flex mt-3">
                                <span className="mr-2 text-gray-900 text-x13 lg:text-sm inline-flex items-center"><RiCheckDoubleLine className="mr-1" />React</span>
                                <span className="mr-2 text-gray-900 text-x13 lg:text-sm inline-flex items-center"><RiCheckDoubleLine className="mr-1" />Angular</span>
                                <span className="mr-2 text-gray-900 text-x13 lg:text-sm inline-flex items-center"><RiCheckDoubleLine className="mr-1" />Flutter</span>
                                <span className="mr-2 text-gray-900 text-x13 lg:text-sm inline-flex items-center"><RiCheckDoubleLine className="mr-1" />Javascript</span>
                                <span className="mr-2 text-gray-900 text-x13 lg:text-sm inline-flex items-center"><RiCheckDoubleLine className="mr-1" />Node JS</span>
                                <span className="mr-2 text-gray-900 text-x13 lg:text-sm inline-flex items-center"><RiCheckDoubleLine className="mr-1" />Remix</span>
                            </div>
                        </section>

                        <section>
                            <div className="text-gray-900 uppercase text-x8 font-[900] mt-10 xl:text-x15">
                                <span className={`${projectType === 'work' ? 'text-rose-500' : ''} cursor-pointer`} onClick={() => setProjectType('work')}>WORK EXPERIENCE</span>&nbsp;/&nbsp;
                                <span className={`${projectType === 'personal' ? 'text-rose-500' : ''} cursor-pointer`} onClick={() => setProjectType('personal')}>PERSONAL PROJECTS</span>
                            </div>
                            {
                                projectType === 'work' ? (
                                    <div className="grid grid-cols-2 gap-6 mt-2.5">
                                        <div>
                                            <img src={gapstack} className="mb-2" alt="Gapstack Logo"/>
                                            <p className="text-gray-900 text-x13 lg:text-sm">
                                                <strong>Gapstack:</strong> This is some placeholder text. I am passionate about helping creatives and entrepreneurial.
                                            </p>
                                        </div>

                                        <div>
                                            <img src={brck} className="mb-2" alt="BRCK Logo"/>

                                            <p className="text-gray-900 text-x13 lg:text-sm">
                                                <strong>BRCK:</strong> This is some placeholder text. I am passionate about helping creatives and entrepreneurial.
                                            </p>
                                        </div>

                                        <div>
                                            <img src={ajua} className="mb-2" alt="AJUA Logo"/>
                                            <p className="text-gray-900 text-x13 lg:text-sm">
                                                <strong>AJUA:</strong> This is some placeholder text. I am passionate about helping creatives and entrepreneurial.
                                            </p>
                                        </div>

                                        <div>
                                            <img src={cytonn} className="mb-2" alt="Cytonn Logo"/>
                                            <p className="text-gray-900 text-x13 lg:text-sm">
                                                <strong>Cytonn Investments:</strong> This is some placeholder text. I am passionate about helping creatives and entrepreneurial.
                                            </p>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="grid grid-cols-2 gap-6 mt-2.5">
                                        <div>
                                            <img src={solgates} className="mb-2" alt="Solgates Logo"/>
                                            <p className="text-gray-900 text-x13 lg:text-sm">
                                                <strong>Solgates:</strong> This is some placeholder text. I am passionate about helping creatives and entrepreneurial.
                                            </p>
                                        </div>
                                    </div>
                                )
                            }
                        </section>
                    </div>
                    <div className="col-span-4 mt-4 xl:mt-12 ml-0 md:ml-4 xl:ml-8 2xl:ml-16">
                        <img src={me} alt="William Kamau" className="h-36 w-36 rounded-full" />

                        <p className="uppercase text-x8 font-[900] text-gray-600 mt-3 xl:mt-4 xl:text-x15">ONE-LINE SUMMARY(TL:DR)</p>

                        <p className="text-gray-900 text-x13 font-[900] mt-2">Design Leader, Advisor & Mentor</p>

                        <p className="uppercase text-gray-600 text-x8 mt-4">ELSEWHERE</p>

                        <div className="mt-1.5 cursor-pointer" onClick={() => window.open('mailto:kamuyu.will@gmail.com', '_blank')}>
                            <div className="text-x13 lg:text-sm text-rose-500 inline-flex items-center justify-center">
                                <RiMailLine className="mr-1.5" /> Email
                            </div>
                        </div>

                        <div className="mt-1 cursor-pointer" onClick={() => window.open('https://github.com/willikay11', '_blank')}>
                            <div className="text-x13 lg:text-sm text-rose-500 inline-flex items-center justify-center">
                                <RiGithubLine className="mr-1.5" /> Github
                            </div>
                        </div>

                        <div className="mt-1">
                            <div className="text-x13 lg:text-sm text-rose-500 inline-flex items-center justify-center">
                                <RiFile2Line className="mr-1.5" /> CV
                            </div>
                        </div>

                        <div className="mt-1 cursor-pointer" onClick={() => window.open('tel:+254706020966', '_blank')}>
                            <div className="text-x13 lg:text-sm text-rose-500 inline-flex items-center justify-center">
                                <RiPhoneLine className="mr-1.5" /> +254 706 020 966
                            </div>
                        </div>

                        <p className="text-x15 lg:text-sm text-rose-500 mt-4">Let's work together</p>
                    </div>
                </div>
            </div>
          </div>
      </div>
  );
}

export default App;
