import React from "react";
import { Container } from "@mui/material";
import office from "../../../assets/office.jpg";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <>
      {/* <Helmet>
        <title>Techzone - About</title>
      </Helmet> */}
      <div className="py-6 text-black mt-5" id="about">
        <Container maxWidth="lg">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col gap-6 justify-center">
              <h2 className="font-bold text-4xl capitalize">
                Who <span style={{ color: "#7AB259" }}>we</span> are?
              </h2>
              <p className="font-bold text-[17px] font-[calibri]">
                Techzone is known as a highly attractive workplace that puts
                emphasis on technology, the work environment, and sharing of
                knowledge for collective growth and success. We continue to grow
                as a company as well, currently employing more than 150 people.
                <br /> We make sure our employees have the best terms in the
                industry and place great emphasis on well-being, job security,
                and personal development for our developers. High stability in
                our workforce.
              </p>
            </div>

            <img src={office} alt="office" />
          </div>
        </Container>
      </div>
    </>
  );
};

export default About;
