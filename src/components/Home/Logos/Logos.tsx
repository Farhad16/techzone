import React from "react";
import slack from "../../../assets/logos/slack.png";
import google from "../../../assets/logos/google.png";
import uber from "../../../assets/logos/uber.png";
import netflix from "../../../assets/logos/netflix.png";
import airbnb from "../../../assets/logos/airbnb.png";
import flipkart from "../../../assets/logos/flipkart.png";
import "./Logos.css";
import { Container } from "@mui/material";

const Logos = () => {
  const allLogos = [slack, google, uber, netflix, airbnb, flipkart];
  return (
    <section>
      <Container maxWidth="lg">
        <div className="flex flex-row items-center gap-6 justify-center flex-wrap py-4">
          {allLogos.map((logo, i) => (
            <img
              src={logo}
              alt=""
              key={i}
              className="w-[100px] h-[35px] max-w-screen-sm"
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Logos;
