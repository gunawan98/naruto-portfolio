import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";
import { intro1, intro2, intro3, intro4 } from "../assets/images";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <div className="fixed bottom-7 mr-10">
        <img src={intro1} alt="Introduce" width={320} height="auto" />
      </div>
    );

  if (currentStage === 2) {
    return (
      <div className="fixed bottom-7 mr-10">
        <img src={intro2} alt="Introduce" width={320} height="auto" />

        <Link to="/about" className="neo-brutalism-white neo-btn">
          Learn more
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className="fixed bottom-7 mr-10">
        <img src={intro3} alt="Introduce" width={320} height="auto" />

        <Link to="/projects" className="neo-brutalism-white neo-btn">
          My portfolio
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className="fixed bottom-7 mr-10">
        <img src={intro4} alt="Introduce" width={320} height="auto" />

        <Link to="/contact" className="neo-brutalism-white neo-btn">
          Let's talk
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );
  }

  return null;
};

export default HomeInfo;
