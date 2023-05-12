import React from "react";
import SingleService from "./SingleService";
import { services } from "./static.data";
import { Container } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Pagination } from "swiper";
import "swiper/css";
import { tw } from "twind";
import { css } from "twind/css";
import { Helmet } from "react-helmet";

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Techzone - Feedbacks</title>
      </Helmet>
      <div className="py-6 text-black" id="services">
        <Container maxWidth="lg" className="justify-center my-5">
          <h2 className="font-bold text-center py-6 text-4xl capitalize mt-4 mb-6">
            Provide awesome <span style={{ color: "#7AB259" }}>services</span>
          </h2>
          <div className="hidden sm:grid md:grid-cols-3 sm:grid-cols-2 gap-6">
            {services.map((service, idx) => (
              <SingleService {...service} key={idx} />
            ))}
          </div>
          <div className="block sm:hidden w-full">
            <Swiper
              autoHeight={true}
              modules={[Pagination, A11y]}
              slidesPerView={1}
              scrollbar={{ draggable: true }}
              spaceBetween="30"
              pagination={{ clickable: true, el: ".slider-pagination" }}
              className={tw(
                css({
                  "& .swiper-scrollbar": {
                    "@apply": "hidden",
                  },
                })
              )}
            >
              {services.map((service) => (
                <SwiperSlide key={service.name}>
                  <SingleService {...service} />
                </SwiperSlide>
              ))}
            </Swiper>
            <div
              className={tw(
                "slider-pagination text-center mt-4 space-x-2 flex flex-row items-center justify-center"
              )}
            />
          </div>
        </Container>
      </div>
    </>
  );
};

export default Services;
