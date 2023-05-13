import { Container } from "@mui/material";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { tw } from "twind";
import { css } from "twind/css";
import SingleFeedback from "./Feedback";
import { feedbacks } from "./static.data";

const Feedbacks = () => {
  return (
    <div className="py-6 text-black" id="review">
      <Container maxWidth="lg" className="justify-center my-5">
        <h2 className="font-bold text-center py-6 text-4xl capitalize mt-4 mb-6">
          <span style={{ color: "#111430" }}>Client's</span>{" "}
          <span style={{ color: "#7AB259" }}>Feedback</span>
        </h2>
        <Swiper
          autoHeight={true}
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          navigation
          autoplay={{
            delay: 2000,
          }}
          spaceBetween="10"
          pagination={{ clickable: true, el: ".slider-page" }}
          className={tw(
            css({
              "& .swiper-scrollbar": {
                "@apply": "hidden",
              },
            })
          )}
          loop
          breakpoints={{
            600: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {feedbacks.map((feedback, idx) => (
            <SwiperSlide key={idx}>
              <SingleFeedback {...feedback} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div
          className={tw(
            "slider-page text-center mt-4 space-x-2 flex flex-row items-center justify-center"
          )}
        />
      </Container>
    </div>
  );
};

export default Feedbacks;
