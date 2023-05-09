import NavSection from "./NavSection";
import "./Header.css";
import HeaderContainer from "./HeaderContainer";

const Header = () => {
  return (
    <div className="headerContainer relative flex items-center justify-between flex-col">
      <NavSection />
      <HeaderContainer />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="absolute bottom-0"
      >
        <path
          fill="#e0e0e0"
          fillOpacity="1"
          d="M0,192L48,208C96,224,192,256,288,250.7C384,245,480,203,576,202.7C672,203,768,245,864,245.3C960,245,1056,203,1152,192C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default Header;
