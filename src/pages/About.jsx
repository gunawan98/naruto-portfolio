import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { CTA } from "../components";
import { experiences, skills } from "../constants";
import { mountBg } from "../assets/images";

import "react-vertical-timeline-component/style.min.css";

const About = () => {
  return (
    <div
      style={{
        backgroundImage: `url('${mountBg}')`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center top",
        backgroundAttachment: "fixed",
      }}
    >
      <section className="max-container">
        <h1 className="head-text">
          Hello, I'm{" "}
          <span className="orange-gradient_text font-semibold drop-shadow">
            {" "}
            Adrian
          </span>{" "}
          👋
        </h1>

        <div className="mt-5 flex flex-col gap-3 text-slate-300">
          <p>
            Software Engineer based in Croatia, specializing in technical
            education through hands-on learning and building applications.
          </p>
        </div>

        <div className="py-10 flex flex-col">
          <h3 className="subhead-text">My Skills</h3>

          <div className="mt-16 flex flex-wrap gap-12">
            {skills.map((skill) => (
              <div className="block-container w-20 h-20" key={skill.name}>
                <div className="btn-back rounded-xl" />
                <div className="btn-front rounded-xl flex justify-center items-center">
                  <img
                    src={skill.imageUrl}
                    alt={skill.name}
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="py-16">
          <h3 className="subhead-text">Work Experience.</h3>
          <div className="mt-5 flex flex-col gap-3 text-slate-300">
            <p>
              I've worked with all sorts of companies, leveling up my skills and
              teaming up with smart people. Here's the rundown:
            </p>
          </div>

          <div className="mt-12 flex">
            <VerticalTimeline className="custom-line">
              {experiences.map((experience) => (
                <VerticalTimelineElement
                  key={experience.company_name}
                  date={experience.date}
                  iconStyle={{ background: experience.iconBg }}
                  icon={
                    <div className="flex justify-center items-center w-full h-full">
                      <img
                        src={experience.icon}
                        alt={experience.company_name}
                        className="w-[60%] h-[60%] object-contain"
                      />
                    </div>
                  }
                  contentStyle={{
                    borderBottom: "8px",
                    borderStyle: "solid",
                    borderBottomColor: experience.iconBg,
                    boxShadow: "none",
                    // background: "#252525",
                    color: "white",
                    background: "rgba(37,37,37,0.5)",
                    backdropFilter: "saturate(180%) blur(10px)",
                  }}
                >
                  <div>
                    <h3 className="text-white text-xl font-poppins font-semibold">
                      {experience.title}
                    </h3>
                    <p
                      className="text-white font-medium text-base"
                      style={{ margin: 0 }}
                    >
                      {experience.company_name}
                    </p>
                  </div>

                  <ul className="my-5 list-disc ml-5 space-y-2">
                    {experience.points.map((point, index) => (
                      <li
                        key={`experience-point-${index}`}
                        className="text-white font-normal pl-1 text-sm"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        </div>

        <hr className="border-orange-500" />

        <CTA />
      </section>
    </div>
  );
};

export default About;
