import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay
} from "swiper/modules";
import SubjectCard from "./SubjectCard";
import { useLocation, useNavigate } from "react-router-dom";

// Import Swiper styles

const SubjectSlider = ({ LayOut2, Laytout3 }) => {
  const [path, setPath] = useState("");
  const router = useNavigate();
  const location = useLocation();
  useEffect(() => {
    let temp = location.pathname;
    if (temp.split("/").length === 3) {
      console.log(temp); // Output: "/academyLayout/3"
    } else {
      // Remove the last segment and trailing slash if they exist
      temp = temp.replace(/\/[^\/]+\/?$/, "");
    }

    setPath(temp);
  });
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className="CustomContainer"
      style={{ position: "relative", marginTop: "120px" }}
    >
      {LayOut2 ? (
        <div className="Layout2Title"> المواد التعليمية</div>
      ) : Laytout3 ? (
        <div className="d-flex justify-content-between">
          <div className="LayoutSectionTitle">
            المواد <span>التعليمية.</span>
          </div>
          <div
            onClick={() => {
              router(`${path}/AllCoursesPage`);
            }}
            style={{
              color: "#009AFF",
              fontSize: "18px",
              fontWeight: "800",
              cursor: "pointer"
            }}
          >
            شاهد المزيد
          </div>
        </div>
      ) : (
        <div className="LayoutSectionTitle fs-5 fw-bold  title-text--1" style={{ textAlign: "center" }}>
          المواد التعليمية الأكثر مبيعا
        </div>
      )}
      <Swiper
        pagination={{
          clickable: true
        }}
        dir="rtl"
        navigation={{
          nextEl: ".swiper-button-prev",
          prevEl: ".swiper-button-next"
        }}
        autoplay={{
          delay: 1600,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        spaceBetween={10}
        loop={true}
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        breakpoints={{
          0: {
            slidesPerView: 1,
          
          },

          768: {
            slidesPerView: 2,
     
          },


          991: {
            slidesPerView: 3,
          
          },
          

          1200: {
            slidesPerView: 4,
           
            pagination: {
              el: ".swiper-pagination",
              enabled: true
            }
          }
        }}
        className="mySwiperContainer pb-5"
        wrapperClass="container pt-lg-3"
      >
        <SwiperSlide>
          <div className="d-flex justify-content-center">
            <SubjectCard />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="d-flex justify-content-center">
            <SubjectCard />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="d-flex justify-content-center">
            <SubjectCard />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="d-flex justify-content-center">
            <SubjectCard />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="d-flex justify-content-center">
            <SubjectCard />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="d-flex justify-content-center">
            <SubjectCard />
          </div>
        </SwiperSlide>

        {/* Add more slides as needed */}

        {/* Custom navigation arrows */}
        <div className="swiper-pagination" style={{ bottom: "5px" }}></div>
      </Swiper>

      <div
        className="swiper-button-next"
        id="next"
        style={{ right: "-25px" }}
      ></div>
      <div className="swiper-button-prev" style={{ left: "-25px" }}></div>
    </div>
  );
};

export default SubjectSlider;
