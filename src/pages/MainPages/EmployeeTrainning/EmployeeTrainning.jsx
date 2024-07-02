import Style from "./EmployeeTrainning.module.scss";
import MainHomeBanner from "../../../assets/images/MainHomeBanner.png";
import Numbers from "../../../component/MainPages/Numbers/Numbers";
import SubjectSlider from "../../../component/MainPages/SubjectCard/subjectSlider";
import Footer from "../../../component/MainPages/Footer/Footer";
import Header2 from "../../../component/MainPages/Header2/Header2";
import TrainingSession from "../../../assets/images/TrainingSession.png";
import affiliatesmarketing from "../../../assets/images/FloatinSeesion.png";
import sessions from "../../../assets/images/FloatinSeesion2.png";
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

const EmployeeTrainning = () => {
  const [active, setActive] = useState(0);
  return (
    <>
      <Header2>
        <div className={Style.Container}>
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
            <h1 className="fs-4 fw-bold  title-text--1">
              تدريب وتطوير الموظفين
            </h1>
            <p className="fs-6 fw-medium text-content--1">
              في منصة سيان، نقوم بتطوير مهارات موظفيكم من خلال تجربة تدريبية
              فريدة من نوعها، تمزج بين خبراتنا الواسعة وأساليب التدريب الحديثة.
              نلتزم بتصميم برامج تدريبية تركز على تعزيز الكفاءة العملية ومواكبة
              التطورات المستمرة في العصر الحديث، لضمان تطوير مهارات فريق عملكم
              بأعلى مستوى وتحقيق النجاح المستدام.
            </p>
          </div>
        </div>
      </Header2>

      <div className={Style.BackGroundParent}>
        <div className="CustomContainer mt-5">
          <div className={Style.WhoText}>
            <h2
              className="fs-5 fw-bold  title-text--1"
              style={{ textAlign: "center", fontSize: "22px" }}
            >
              أهمية تدريب الموظفين:
            </h2>
          </div>
          <div className="row mt-2">
            <div className="col-lg-3 col-md-6 col-12 mt-4">
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
                <p className="fs-6 fw-medium text-content--1">
                  التدريب يجعل الموظفين أكثر كفاءة وإنتاجية، حيث يكونون مجهزين
                  بشكل أفضل لمواجهة مهامهم ويكتسبون ثقة أكبر في قدراتهم، مما
                  يؤدي إلى تحسين الأداء.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12 mt-4">
              <div className={Style.GoalCard}>
                <div className="d-flex">
                  <div className={Style.GoalIcon}>
                    <img src={CallCenter} />
                  </div>
                </div>
                <h2 className="fs-6 fw-bold  title-text--1">
                  دعم فني بلا توقف
                </h2>
                <p className="fs-6 fw-medium text-content--1">
                  تمتع بالطمأنينة مع دعمنا الفني المتاح على مدار الساعة، مهما
                  كان استفسارك أو تحديك.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12 mt-4">
              <div className={Style.GoalCard}>
                <div className="d-flex">
                  <div className={Style.GoalIcon}>
                    <img src={Statics} />
                  </div>
                </div>
                <h2 className="fs-6 fw-bold  title-text--1">
                  نقلة نوعية في المبيعات
                </h2>
                <p className="fs-6 fw-medium text-content--1">
                  استفد من أدواتنا الذكية لتعزيز مبيعاتك وتحسين تفاعل الطلاب. في
                  سيان، نساعدك على تحقيق أهدافك التجارية بفعالية.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12 mt-4">
              <div className={Style.GoalCard}>
                <div className="d-flex">
                  <div className={Style.GoalIcon}>
                    <img src={maps} />
                  </div>
                </div>
                <h2 className="fs-6 fw-bold  title-text--1">
                  تحسين تجربة التعليم
                </h2>
                <p className="fs-6 fw-medium text-content--1">
                  استكشف قوة الذكاء الاصطناعي في تعزيز فهم الطلاب وتلبية
                  احتياجاتهم التعليمية بدقة{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="CustomContainer " style={{ marginTop: "120px" }}>
          <h1
            style={{
              fontSize: "32px",
              textAlign: "center",
              marginBottom: "80px"
            }}
            className="fs-6 fw-bold  title-text--1"
          >
            مميزات منصة سيان
          </h1>
          <div
            className="row flex-lg-row flex-column-reverse  "
            style={{ alignItems: "center" }}
          >
            <div
              data-aos="fade-up"
              className="col-lg-6 mt-3 d-flex justify-content-center"
            >
              <img src={Mangment} style={{ maxWidth: "100%" }} />
            </div>
            <div
              data-aos="fade-right"
              className="col-lg-6 d-flex justify-content-center"
            >
              <div>
                <h2
                  style={{
                    fontSize: "24px",
                    color: "black",
                    marginBottom: "20px"
                  }}
                  className="fs-6 fw-bold  title-text--1"
                >
                  نظام إدارة ومتابعة المتدربين
                </h2>
                <p
                  className="fs-6 fw-medium text-content--1"
                  style={{ fontSize: "18px" }}
                >
                  نؤمن بأن التعليم هو القوة الدافعة لمستقبل مشرق،
                  <br /> يسوده الإبداع والابتكا بناء جيل متعلم ومبدع، مجهز
                  <br /> بالمعرفة والقدرات لقيادة عصر جديد من التقدم.ر.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="CustomContainer " style={{ marginTop: "120px" }}>
          <div className="row " style={{ alignItems: "center" }}>
            <div
              data-aos="fade-right"
              className="col-lg-6  d-flex justify-content-center"
            >
              <div>
                <h2
                  style={{
                    fontSize: "24px",
                    color: "black",
                    marginBottom: "20px"
                  }}
                  className="fs-6 fw-bold  title-text--1"
                >
                  نظام إدارة ومتابعة المتدربين
                </h2>
                <p
                  className="fs-6 fw-medium text-content--1"
                  style={{ fontSize: "18px" }}
                >
                  نؤمن بأن التعليم هو القوة الدافعة لمستقبل مشرق،
                  <br /> يسوده الإبداع والابتكا بناء جيل متعلم ومبدع، مجهز
                  <br /> بالمعرفة والقدرات لقيادة عصر جديد من التقدم.ر.
                </p>
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="col-lg-6 d-flex justify-content-center"
            >
              <img src={CreateAcademy} style={{ maxWidth: "100%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className={Style.DownPokeh}>
        <div className="CustomContainer ">
          <h1
            style={{
              fontSize: "32px",
              textAlign: "center",
              marginBottom: "80px"
            }}
            className="fs-6 fw-bold  title-text--1"
          >
            خدماتنا في منصة سيان
          </h1>
          <div className="row " style={{ alignItems: "center" }}>
            <div
              data-aos="fade-up"
              className="col-lg-6 d-flex justify-content-center"
            >
              <img src={Desing} style={{ maxWidth: "100%" }} />
            </div>
            <div
              data-aos="fade-left"
              className="col-lg-6 d-flex justify-content-center"
            >
              <div>
                <h2
                  style={{
                    fontSize: "24px",
                    color: "black",
                    marginBottom: "20px"
                  }}
                  className="fs-6 fw-bold  title-text--1"
                >
                  خدمات تصميم تعليمي
                </h2>
                <p
                  className="fs-6 fw-medium text-content--1"
                  style={{ fontSize: "18px" }}
                >
                  نقدم تصميم مواد تعليمية مخصصة للموظفين، معتمدين
                  <br /> على خبراتنا الواسعة في هذا المجال.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="CustomContainer " style={{ marginTop: "120px" }}>
          <div
            className="row flex-lg-row flex-column-reverse "
            style={{ alignItems: "center" }}
          >
            <div
              data-aos="fade-left"
              className="col-lg-6  d-flex justify-content-center"
            >
              <div>
                <h2
                  style={{
                    fontSize: "24px",
                    color: "black",
                    marginBottom: "20px"
                  }}
                  className="fs-6 fw-bold  title-text--1"
                >
                  إنتاج مقاطع فيديو تعليمية
                </h2>
                <p
                  className="fs-6 fw-medium text-content--1"
                  style={{ fontSize: "18px" }}
                >
                  لدينا فريق متخصص قادر على إنتاج محتوى مرئي جذاب
                  <br /> وفعال للمواد التعليمية.
                </p>
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="col-lg-6 d-flex justify-content-center"
            >
              <img src={VideoCreate} style={{ maxWidth: "100%" }} />
            </div>
          </div>
        </div>
        <div className="CustomContainer " style={{ marginTop: "120px" }}>
          <div className="row " style={{ alignItems: "center" }}>
            <div
              data-aos="fade-up"
              className="col-lg-6 d-flex justify-content-center"
            >
              <img src={Education} style={{ maxWidth: "100%" }} />
            </div>
            <div
              data-aos="fade-right"
              className="col-lg-6  d-flex justify-content-center"
            >
              <div>
                <h2
                  style={{
                    fontSize: "24px",
                    color: "black",
                    marginBottom: "20px"
                  }}
                  className="fs-6 fw-bold  title-text--1"
                >
                  إدارة البرامج التعليمية
                </h2>
                <p
                  className="fs-6 fw-medium text-content--1"
                  style={{ fontSize: "18px" }}
                >
                  نقوم بإدارة المواد التعليمية بطريقة تضمن رفع كفاءة
                  <br /> ومهارات الموظفين.
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

export default EmployeeTrainning;
