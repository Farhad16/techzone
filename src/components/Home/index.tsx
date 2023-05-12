import { Helmet } from "react-helmet";
import About from "./about/About";
import Header from "./header/Header";
import Logos from "./logos/Logos";
import Services from "./services";
import Feedbacks from "./feedbacks";
import WriteFeedback from "./write-feedback";

const Home = () => {
  return (
    <div className="overflow-hidden flex flex-col space-y-12" id="home">
      <Helmet>
        <title>Techzone - Home</title>
      </Helmet>
      <Header />
      <Logos />
      <Services />
      <About />
      <Feedbacks />
      <WriteFeedback />
    </div>
  );
};

export default Home;
