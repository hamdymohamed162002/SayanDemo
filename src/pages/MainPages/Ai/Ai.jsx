import Style from "./Ai.module.scss";
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
import Goals from "../../../assets/icons/Goals.svg";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import Mangment from "../../../assets/images/Mangment.png";
import CreateAcademy from "../../../assets/images/CreateAcademy.png";
import Desing from "../../../assets/images/Desing.png";
import VideoCreate from "../../../assets/images/VideoCreate.png";

import Education from "../../../assets/images/Education.png";
import { useState, useEffect, useRef } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import FAQ from "../../../component/MainPages/FAQ/FAQ";

const Ai = () => {
  const [active, setActive] = useState(0);
  return (
    <>
      <Header2>
        <div className={`${Style.Container} container-ai`}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column"
            }}
            className={Style.BannerText}
            data-aos="fade-up"
          >
            <div style={{ position: "relative" }}>
              <img className={Style.FloaitngImage1} src={affiliatesmarketing} />
              <img className={Style.FloaitngImage} src={TrainingSession} />
              <img className={Style.FloaitngImage2} src={sessions} />
            </div>
            <h1 className="fs-4 fw-bold  title-text--1 title-page--1">
              {" "}
              الذكاء الاصطناعي{" "}
            </h1>
            <p className="fs-6 fw-medium text-content--1">
              في منصة سيان، نعتبر الذكاء الاصطناعي حجر الزاوية في تعزيز تجربة
              التعليم الرقمي. نؤمن بأهمية دمجه كأداة مساعدة وداعمة ليس فقط
              للطلاب، بل أيضًا لمنشئي المحتوى التعليمي، مما يعزز فاعلية التعلم
              والتدريس.
              <br />
              في منصة سيان، نقدم مجموعة متنوعة من الميزات الفريدة المدعومة
              بالذكاء الاصطناعي لتحسين وتعزيز تجربة التعلم وإعداد المحتوى.
            </p>
          </div>
        </div>
      </Header2>

      <div className={Style.BackGroundParent}>
        <div className="CustomContainer mt-5">
          <div className={Style.WhoText}></div>
          <div className="row mt-2 justify-content-center">
            <div className="col-lg-4 col-md-6 col-12 mt-4">
              <div className={Style.GoalCard}>
                <div className="d-flex">
                  <div className={Style.GoalIcon}>
                    <img src={AiIcon} />
                  </div>
                </div>
                <h2 className="fs-6 fw-bold  title-text--1">
                  {" "}
                  زيادة الإنتاجية{" "}
                </h2>
                <p className="fs-6 fw-medium  text-content--1">
                  التدريب يجعل الموظفين أكثر كفاءة وإنتاجية، حيث يكونون مجهزين
                  بشكل أفضل لمواجهة مهامهم ويكتسبون ثقة أكبر في قدراتهم، مما
                  يؤدي إلى تحسين الأداء.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 mt-4">
              <div className={Style.GoalCard}>
                <div className="d-flex">
                  <div className={Style.GoalIcon}>
                    <img src={CallCenter} />
                  </div>
                </div>
                <h2 className="fs-6 fw-bold  title-text--1">
                  دعم فني بلا توقف
                </h2>
                <p className="fs-6 fw-medium  text-content--1">
                  تمتع بالطمأنينة مع دعمنا الفني المتاح على مدار الساعة، مهما
                  كان استفسارك أو تحديك.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 mt-4">
              <div className={Style.GoalCard}>
                <div className="d-flex">
                  <div className={Style.GoalIcon}>
                    <img src={Statics} />
                  </div>
                </div>
                <h2 className="fs-6 fw-bold  title-text--1">
                  نقلة نوعية في المبيعات
                </h2>
                <p className="fs-6 fw-medium  text-content--1">
                  استفد من أدواتنا الذكية لتعزيز مبيعاتك وتحسين تفاعل الطلاب. في
                  سيان، نساعدك على تحقيق أهدافك التجارية بفعالية.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 mt-4">
              <div className={Style.GoalCard}>
                <div className="d-flex">
                  <div className={Style.GoalIcon}>
                    <img src={maps} />
                  </div>
                </div>
                <h2 className="fs-6 fw-bold  title-text--1">
                  تحسين تجربة التعليم
                </h2>
                <p className="fs-6 fw-medium  text-content--1">
                  استكشف قوة الذكاء الاصطناعي في تعزيز فهم الطلاب وتلبية
                  احتياجاتهم التعليمية بدقة{" "}
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 mt-4">
              <div className={Style.GoalCard}>
                <div className="d-flex">
                  <div className={Style.GoalIcon}>
                    <img src={maps} />
                  </div>
                </div>
                <h2 className="fs-6 fw-bold  title-text--1">
                  تحسين تجربة التعليم
                </h2>
                <p className="fs-6 fw-medium  text-content--1">
                  استكشف قوة الذكاء الاصطناعي في تعزيز فهم الطلاب وتلبية
                  احتياجاتهم التعليمية بدقة{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <FAQ />
      </div>
      <Footer />
    </>
  );
};

export default Ai;
