import Style from "./MainBlog.module.scss";
import MainHomeBanner from "../../../assets/images/MainHomeBanner.png";
import Numbers from "../../../component/MainPages/Numbers/Numbers";
import SubjectSlider from "../../../component/MainPages/SubjectCard/subjectSlider";
import Footer from "../../../component/MainPages/Footer/Footer";
import Header2 from "../../../component/MainPages/Header2/Header2";
import TrainingSession from "../../../assets/images/Ai.png";
import affiliatesmarketing from "../../../assets/images/Ai1.png";
import sessions from "../../../assets/images/Ai2.png";
import fund from "../../../assets/images/fund.png";
import AiIcon from "../../../assets/icons/AiIcon.svg";
import CallCenter from "../../../assets/icons/CallCenter.svg";
import Statics from "../../../assets/icons/Statics.svg";
import maps from "../../../assets/icons/maps.svg";
import BlogsPic from "../../../assets/images/Blogs.png";

import { useState, useEffect, useRef } from "react";
import Image from "../../../assets/images/singleblog.png";
import userImage from "../../../assets/images/userimg.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SearchIcon from "@mui/icons-material/Search";
import SingleBlogCard from "../../../component/AcadmyLayouts/Blog/SingleBlogCard";

const MainBlog = () => {
  const [active, setActive] = useState(0);
  return (
    <>
      <Header2>
        <div className={Style.Container} style={{ paddingBottom: "150px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}
            className={Style.BannerText}
            data-aos="fade-up"
          >
            <div>
              <h1 className="fs-4 fw-bold  title-text--1">المدونة</h1>
              <p className="fs-6 fw-medium  text-content--1">
                نعمل لبناء تقديم افضل تعليمية, سيان هي مستقبل التعليم تعليمية,
                سيان هي مستقبل التعليم.
              </p>
            </div>
            <div>
              <img src={BlogsPic} />
            </div>
          </div>
        </div>
      </Header2>

      <div className="mt-3 CustomContainer">
        <div className="d-flex">
          <div className="searchBar">
            <input type="text" placeholder="ابحث عن ..." />
            <div className="iconWrapper">
              <SearchIcon />
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-lg-8">
            <div className={`${Style.CardContainer}`}>
              <div className={`${Style.ImageContainer}`}>
                <img src={Image} />
                <div className={Style.Badge}>تأسيس شركات</div>
              </div>
              <p className="fs-6 fw-medium  title-text--1">
                الملكية الفكرية وتسجيل العلامة التجارية في السعودية
              </p>
              <div className={`${Style.Footer} flex-wrap gap-3`}>
                <span className="fs-6 fw-medium  title-text--1">
                  خدمة تأسيس الشركات الخارجية وفي السعودية
                
                </span>
                <span className="fs-6 fw-medium  title-text--1">
                  تفاصيل أكثر
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-4" style={{ height: "100%" }}>
            <div className="mb-4" style={{ height: "50%" }}>
              {" "}
              <div className={Style.CardContainer}>
                <div className={Style.ImageContainer}>
                  <img src={Image} />
                  <div className={Style.Badge}>تأسيس شركات</div>
                </div>
                <p>الملكية الفكرية وتسجيل العلامة التجارية في السعودية</p>
              </div>
            </div>
            <div style={{ height: "50%" }}>
              {" "}
              <div className={Style.CardContainer}>
                <div className={Style.ImageContainer}>
                  <img src={Image} />
                  <div className={Style.Badge}>تأسيس شركات</div>
                </div>
                <p>الملكية الفكرية وتسجيل العلامة التجارية في السعودية</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-3 mt-4">
          {[1, 2, 3, 4, 5, 6].map((item, index) => (
            <div className="col-12 col-md-6 col-lg-4">
              <SingleBlogCard />
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default MainBlog;
