
import CoreSkills from "./CoreSkills";
import { Element } from "react-scroll";
import SectionHeader from "../../shared/SectionHeader";

const Skills = () => {
  return (
    <Element name="skill">
      <SectionHeader title="My Skills" subtitle="What Skills I Have" />
      <CoreSkills />
    </Element>
  );
};

export default Skills;
