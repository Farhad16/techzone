import React from "react";
import { tw } from "twind";
import { css } from "twind/css";
import bg from "../../../assets/headerbg.jpg";
import { pages } from "../header/NavSection";
import useScrollSectionById from "../../../hooks/useScrollById";
import { Container, Divider } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import iso1 from "../../../assets/logos/iso1.png";
import iso2 from "../../../assets/logos/iso2.png";
import iso3 from "../../../assets/logos/iso3.png";
import FooterLinks from "./FooterLinks";

const Footer = () => {
  const { scroll } = useScrollSectionById();

  return (
    <div
      className={tw(
        css({
          minHeight: "300px",
          background: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6)), url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          paddingBottom: "20px",
        }),
        "text-white flex items-center py-14"
      )}
    >
      <Container maxWidth="lg">
        <div className="flex flex-col space-y-10">
          <div className="flex flex-col sm:flex-row justify-between gap-8">
            <div className="flex flex-col">
              <h1 className=" flex flex-row items-center font-bold">
                <span className="pb-1 text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] to-[#ffc3cf] text-[40px]">
                  T
                </span>
                <div className="text-[24px] pt-2">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] to-[#ff6680]">
                    ECH
                  </span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6680] to-[#ff2247]">
                    ZONE
                  </span>
                </div>
              </h1>
              <p className="text-lg">Your dream our mission</p>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex flex-row gap-3 items-center">
                <LocationOnIcon /> <p>Dhanmondi, Dhaka, Bangladesh</p>
              </div>
              <div className="flex flex-row gap-3 items-center">
                <PhoneIcon /> <p>+880175---16</p>
              </div>
              <div className="flex flex-row gap-3 items-center">
                <EmailIcon /> <p>techzone@gmail.com</p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              {pages.map((page, idx) => (
                <p
                  key={page.name}
                  onClick={() => {
                    scroll(page.id);
                  }}
                  className="cursor-pointer"
                >
                  {page.name}
                </p>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <p>Certifications</p>
              <div className="flex flex-row items-center gap-4">
                <img src={iso1} alt="iso1" className="w-12 h-12 rounded-full" />
                <img src={iso2} alt="iso2" className="w-12 h-12 rounded-full" />
                <img src={iso3} alt="iso3" className="w-12 h-12 rounded-full" />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Divider className="bg-white bg-opacity-50 w-full h-[2px] " />
            <FooterLinks />
            <small>@Copyright techzone {new Date().getFullYear()}</small>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
