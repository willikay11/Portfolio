import React, {useState} from "react";

import gapstack from "../../assets/images/gapstack.png";
import solgates from '../../assets/images/solgates.svg';
import brck from '../../assets/images/BRCK.png';
import ajua from '../../assets/images/AJUA.png';
import cytonn from '../../assets/images/cytonn.png';

interface ExperienceComponentProps {
    section: string;
}
const ExperienceComponent = ({ section }: ExperienceComponentProps) => {
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
  );
}

export default ExperienceComponent;