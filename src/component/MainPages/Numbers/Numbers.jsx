import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import classes from "./Numbers.module.scss";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay
} from "swiper/modules";
import GraduateLay from "../../../assets/images/GraduateLay.png";
import TraneeLayOut from "../../../assets/images/TraneeLayOut.png";
import certifacateLayout from "../../../assets/images/certifacateLayout.png";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import UpStaris from "../../../assets/icons/UpStaris.svg";
const Numbers = () => {
  const [Grad, setGrad] = useState(0);

  return (
    <div className="all-header-content-top">
      <div
        className={`${classes.Container} flex-column gap-0 align-items-start`}
      >
        <div className={`${classes.Title} text-start mb-2`}>
          <h2 className="title-header--1">هنا تبدأ رحلتك من العلم الى العمل</h2>
        </div>
        <div
          className={`${classes.SwieperContainer}`}
          style={{ width: "100%" }}
        >
          <Swiper
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            loop={true}
            style={{ width: "100%" }}
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={15}
            breakpoints={{
              0: {
                slidesPerView: 1
              },
              575: {
                slidesPerView: 2
              },

              991: {
                slidesPerView: 3
              },

              1200: {
                slidesPerView: 4
              }
            }}
          >
            <SwiperSlide>
              <div className={`${classes.SliderCard} card-style-1`}>
                <div className={classes.Icon}>
                  <img src={UpStaris} />
                </div>
                <h2 className="fs-6 fw-bold  title-text--1">زيادة الإنتاجية</h2>
                <p className="fs-6 fw-medium text-content--1">
                  التدريب يجعل الموظفين أكثر كفاءة وإنتاجية، حيث يكونون مجهزين
                  بشكل أفضل
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={`${classes.SliderCard} card-style-1`}>
                <div className={classes.Icon}>
                  <img src={UpStaris} />
                </div>
                <h2 className="fs-6 fw-bold  title-text--1">زيادة الإنتاجية</h2>
                <p className="fs-6 fw-medium text-content--1">
                  التدريب يجعل الموظفين أكثر كفاءة وإنتاجية، حيث يكونون مجهزين
                  بشكل أفضل
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={`${classes.SliderCard} card-style-1`}>
                <div className={classes.Icon}>
                  <img src={UpStaris} />
                </div>
                <h2 className="fs-6 fw-bold  title-text--1">زيادة الإنتاجية</h2>
                <p className="fs-6 fw-medium text-content--1">
                  التدريب يجعل الموظفين أكثر كفاءة وإنتاجية، حيث يكونون مجهزين
                  بشكل أفضل
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={`${classes.SliderCard} card-style-1`}>
                <div className={classes.Icon}>
                  <img src={UpStaris} />
                </div>
                <h2 className="fs-6 fw-bold  title-text--1">زيادة الإنتاجية</h2>
                <p className="fs-6 fw-medium text-content--1">
                  التدريب يجعل الموظفين أكثر كفاءة وإنتاجية، حيث يكونون مجهزين
                  بشكل أفضل
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={`${classes.SliderCard} card-style-1`}>
                <div className={classes.Icon}>
                  <img src={UpStaris} />
                </div>
                <h2 className="fs-6 fw-bold  title-text--1">زيادة الإنتاجية</h2>
                <p className="fs-6 fw-medium text-content--1">
                  التدريب يجعل الموظفين أكثر كفاءة وإنتاجية، حيث يكونون مجهزين
                  بشكل أفضل
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={`${classes.SliderCard} card-style-1`}>
                <div className={classes.Icon}>
                  <img src={UpStaris} />
                </div>
                <h2 className="fs-6 fw-bold  title-text--1">زيادة الإنتاجية</h2>
                <p className="fs-6 fw-medium text-content--1">
                  التدريب يجعل الموظفين أكثر كفاءة وإنتاجية، حيث يكونون مجهزين
                  بشكل أفضل
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Numbers;
