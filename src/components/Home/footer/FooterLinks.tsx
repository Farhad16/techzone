import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";

function FooterLinks() {
  const icons = [
    {
      icon: <FacebookIcon />,
      link: "#",
    },
    {
      icon: <GoogleIcon />,
      link: "#",
    },
    {
      icon: <TwitterIcon />,
      link: "#",
    },
    {
      icon: <LinkedInIcon />,
      link: "#",
    },
  ];
  return (
    <div className="flex flex-row items-center gap-4 mt-10 mb-4">
      {icons.map((obj, idx) => (
        <Link key={idx} to={obj.link}>
          <div className="bg-[#dad9d9] bg-opacity-20 rounded-full p-2.5 border border-1 transition duration-300 hover:bg-opacity-30 group">
            {obj.icon}
          </div>
        </Link>
      ))}
    </div>
  );
}

export default FooterLinks;
