import './App.css';
import me from './assets/images/me.svg';
import gapstack from './assets/images/gapstack.png';
import solgates from './assets/images/solgates.svg';
import brck from './assets/images/BRCK.png';
import ajua from './assets/images/AJUA.png';
import cytonn from './assets/images/cytonn.png';
import {RiCheckDoubleLine, RiFile2Line, RiGithubLine, RiMailLine, RiMessage2Line, RiPhoneLine} from "react-icons/ri";

function App() {
  return (
      <div className="w-full bg-white h-screen p-4 mb-2">
          <div className="grid grid-cols-12 h-full">
            <div className="col-start-3 col-span-8">
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
                        <p className="text-gray-900 font-[900] text-4xl xl:text-5xl">Whatever the design is</p>
                        <p className="text-gray-900 font-[900] text-4xl xl:text-5xl mt-2 xl:mt-4">I always <span className="text-rose-500">implement</span> it</p>

                        <section>
                            <p className="text-gray-900 uppercase text-x8 font-[900] mt-10 xl:text-x15">ABOUT ME</p>

                            <p className="text-gray-900 text-x13 mt-2.5 w-3/4">
                                Hello, my name is William. Generative AI has hit the ground running so fast that it can feel hard to keep up. Here’s a quick take pulled from our top articles and reports on the subject. Generative AI has hit the ground running so fast that it can feel hard to keep.
                            </p>
                        </section>

                        <section>
                            <p className="text-gray-900 uppercase text-x8 font-[900] mt-10 xl:text-x15">TECH STACK</p>

                            <p className="text-gray-900 text-x13 mt-2.5 w-3/4">
                                This is some placeholder text. Iam passionate about helping creatives and entrepreneurial teams meet their goals and achieve what they set out to do through strategic
                            </p>
                            <div className="inline-flex mt-3">
                                <span className="mr-2 text-gray-900 text-x13 inline-flex items-center"><RiCheckDoubleLine className="mr-1" />React</span>
                                <span className="mr-2 text-gray-900 text-x13 inline-flex items-center"><RiCheckDoubleLine className="mr-1" />Angular</span>
                                <span className="mr-2 text-gray-900 text-x13 inline-flex items-center"><RiCheckDoubleLine className="mr-1" />Flutter</span>
                                <span className="mr-2 text-gray-900 text-x13 inline-flex items-center"><RiCheckDoubleLine className="mr-1" />Javascript</span>
                                <span className="mr-2 text-gray-900 text-x13 inline-flex items-center"><RiCheckDoubleLine className="mr-1" />Node JS</span>
                                <span className="mr-2 text-gray-900 text-x13 inline-flex items-center"><RiCheckDoubleLine className="mr-1" />Remix</span>
                            </div>
                        </section>

                        <section>
                            <p className="text-gray-900 uppercase text-x8 font-[900] mt-10 xl:text-x15">WORK EXPERIENCE/PERSONAL PROJECTS</p>
                            <div className="grid grid-cols-2 gap-6 mt-2.5">
                                <div>
                                    <img src={gapstack} className="mb-2" alt="Gapstack Logo"/>
                                    <p className="text-gray-900 text-x13">
                                        <strong>Gapstack:</strong> This is some placeholder text. I am passionate about helping creatives and entrepreneurial.
                                    </p>
                                </div>

                                <div>
                                    <img src={solgates} className="mb-2" alt="Solgates Logo"/>
                                    <p className="text-gray-900 text-x13">
                                        <strong>Solgates:</strong> This is some placeholder text. I am passionate about helping creatives and entrepreneurial.
                                    </p>
                                </div>

                                <div>
                                    <img src={brck} className="mb-2" alt="BRCK Logo"/>

                                    <p className="text-gray-900 text-x13">
                                        <strong>BRCK:</strong> This is some placeholder text. I am passionate about helping creatives and entrepreneurial.
                                    </p>
                                </div>

                                <div>
                                    <img src={ajua} className="mb-2" alt="AJUA Logo"/>
                                    <p className="text-gray-900 text-x13">
                                        <strong>AJUA:</strong> This is some placeholder text. I am passionate about helping creatives and entrepreneurial.
                                    </p>
                                </div>

                                <div>
                                    <img src={cytonn} className="mb-2" alt="Cytonn Logo"/>
                                    <p className="text-gray-900 text-x13">
                                        <strong>Cytonn Investments:</strong> This is some placeholder text. I am passionate about helping creatives and entrepreneurial.
                                    </p>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="col-span-4 mt-4 xl:mt-12 ml-16">
                        <img src={me} alt="William Kamau" className="h-36 w-36 rounded-full" />

                        <p className="uppercase text-x8 font-[900] text-gray-600 mt-3 xl:mt-4 xl:text-x15">ONE-LINE SUMMARY(TL:DR)</p>

                        <p className="text-gray-900 text-x13 font-[900] mt-2">Design Leader, Advisor & Mentor</p>

                        <p className="uppercase text-gray-600 text-x8 mt-4">ELSEWHERE</p>

                        <div className="mt-1.5">
                            <div className="text-x13 text-rose-500 inline-flex items-center justify-center">
                                <RiMailLine className="mr-1.5" /> Email
                            </div>
                        </div>

                        <div className="mt-1">
                            <div className="text-x13 text-rose-500 inline-flex items-center justify-center">
                                <RiGithubLine className="mr-1.5" /> Github
                            </div>
                        </div>

                        <div className="mt-1">
                            <div className="text-x13 text-rose-500 inline-flex items-center justify-center">
                                <RiFile2Line className="mr-1.5" /> CV
                            </div>
                        </div>

                        <div className="mt-1">
                            <div className="text-x13 text-rose-500 inline-flex items-center justify-center">
                                <RiPhoneLine className="mr-1.5" /> +254 706 020 966
                            </div>
                        </div>

                        <p className="text-x15 text-rose-500 mt-4">Let's work together</p>
                    </div>
                </div>
            </div>
          </div>
      </div>
  );
}

export default App;
