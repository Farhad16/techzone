import React from "react";
import dev from "../../../assets/dev.png";
import { Link } from "react-router-dom";
import { Container } from "@mui/material";

const HeaderContainer = () => {
  return (
    <Container maxWidth="lg" className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-5 text-white pt-20 sm:pt-18">
        <div className="col-span-3 flex justify-center flex-col w-full space-y-5">
          <h1 className="font-bold text-4xl">
            Let's Grow Your Brand <br />
            To The Next Level
          </h1>
          <p className="my-3">
            We are providing Cost-Effective Solutions, Faster Time to Market,
            Flexible Solutions, Custom Software Development, Software Consulting
            Services, Software Testing Services by our highly experienced and
            expert developers.
          </p>
          <Link to="/appointment">
            <button className="bg-[#dc143c] px-6 py-2 text-base my-4 font-semibold rounded-lg focus:outline-none capitalize">
              Hire us
            </button>
          </Link>
        </div>
        <div className="col-span-2 flex justify-center w-full">
          <img src={dev} alt="" className="" />
        </div>
      </div>
    </Container>
  );
};

export default HeaderContainer;
