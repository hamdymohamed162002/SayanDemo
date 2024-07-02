import classes from "./PartnerSection.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import comp1 from "../../../assets/images/comp1.png";
import comp2 from "../../../assets/images/comp2.png";
import comp3 from "../../../assets/images/comp3.png";
import comp4 from "../../../assets/images/comp4.png";
import comp5 from "../../../assets/images/comp5.png";
import comp6 from "../../../assets/images/comp6.png";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import Divider from "../AcademyHeaderContainer/dvider";
const PartnerSection = ({ LayOut2 }) => {
  return (
    <>
      <div
        className={classes.sectionContainer}
        style={
          LayOut2
            ? {
                paddingTop: "20px",
                backgroundColor: "white",
                marginBottom: "150px"
              }
            : { marginTop: "-150px" }
        }
      >
        <div className="container">
          {LayOut2 ? (
            <div className="Layout2Title"> شركاء النجاح </div>
          ) : (
            <div
              className="LayoutSectionTitle"
              style={{ marginBottom: "55px" }}
            >
              شركاء <span>النجاح.</span>
            </div>
          )}
        </div>
        <div
          className={classes.SwiperContainer}
          style={{ backgroundColor: "white", paddingBlock: "20px" }}
        >
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            breakpoints={{
              0: {
                slidesPerView: 1
              },
              450: {
                slidesPerView: 2
              },
              600: {
                slidesPerView: 3,
                spaceBetween: 10
              },
              1200: {
                slidesPerView: 5,
                spaceBetween: 20
              }
            }}
          >
            <SwiperSlide>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <img
                  src={comp1}
                  alt="sayn academy logo object-fit-cover w-100 h-100"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <img
                  src={comp2}
                  alt="sayn academy logo object-fit-cover w-100 h-100"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <img
                  src={comp3}
                  alt="sayn academy logo object-fit-cover w-100 h-100"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <img
                  src={comp4}
                  alt="sayn academy logo object-fit-cover w-100 h-100"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <img
                  src={comp5}
                  alt="sayn academy logo object-fit-cover w-100 h-100 "
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <img
                  src={comp6}
                  alt="sayn academy logo object-fit-cover w-100 h-100"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <img
                  src={comp6}
                  alt="sayn academy logo object-fit-cover w-100 h-100"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      {!LayOut2 && <Divider />}
    </>
  );
};

export default PartnerSection;
