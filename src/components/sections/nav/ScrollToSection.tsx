import { Link as ScrollLink } from "react-scroll";

export const ScrollToSectionButton = ({
  sectionId,
  button,
}: {
  sectionId: string;
  button: React.ReactNode;
}) => {
  return (
    <ScrollLink
      activeClass="active"
      to={sectionId}
      spy={true}
      smooth={true}
      offset={-70} 
      duration={500}
    >
      {button}
    </ScrollLink>
  );
};
