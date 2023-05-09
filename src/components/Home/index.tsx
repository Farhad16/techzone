import About from "./about/About";
import Header from "./header/Header";
import Logos from "./Logos/Logos";
import Services from "./services";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Header />
      <Logos />
      <Services />
      <About />
    </div>
  );
};

export default Home;
