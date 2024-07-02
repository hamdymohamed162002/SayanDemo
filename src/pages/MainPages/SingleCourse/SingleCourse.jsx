import Style from "./SingleCourse.module.scss";
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
import CoursePic from "../../../assets/images/CoursePic.png";
import ContentCourse from "../../../assets/icons/ContentCourse";
import CourseOutLine from "../../../assets/icons/CourseOutLine";
import CourseStar from "../../../assets/icons/CourseStar";
import fi_4626794 from "../../../assets/icons/fi_4626794.png";
import fi_860780 from "../../../assets/icons/fi_860780.png";
import fi_1055204 from "../../../assets/icons/fi_1055204.png";
import iphone from "../../../assets/icons/iphone.png";
import AboutCourse from "../../../assets/icons/AboutCourse";
import { AnimatePresence, motion } from "framer-motion";

const SingleCourse = () => {
  const [active, setActive] = useState(0);
  return (
    <>
      <Header2>
        <div className={Style.Container} style={{ paddingBottom: "150px" }}>
          <h2>دورة التفاوض والإقناع</h2>
          <div className="row">
            <div className="col-lg-9 col-md-8 col-12 mt-3">
              <div className={Style.Course}>
                <img src={CoursePic} />
                <div className={Style.Tabs}>
                  <div
                    className={active == 0 ? Style.Active : ""}
                    onClick={() => setActive(0)}
                  >
                    <AboutCourse active={active == 0} />
                    المحتوى
                  </div>

                  <div
                    className={active == 1 ? Style.Active : ""}
                    onClick={() => setActive(1)}
                  >
                    <ContentCourse active={active == 1} />
                    المحتوى
                  </div>
                  <div
                    className={active == 2 ? Style.Active : ""}
                    onClick={() => setActive(2)}
                  >
                    <CourseOutLine active={active == 2} />
                    ماذا سوف يتعلم الطالب
                  </div>
                  <div
                    className={active == 4 ? Style.Active : ""}
                    onClick={() => setActive(4)}
                  >
                    <CourseStar active={active == 4} />
                    تجربة الطلاب
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-12 mt-3">
              <div className={Style.detials}>
                <div className={Style.Price}>
                  99.00 ر.س.
                  <span>110.00 ر.س.</span>
                </div>
                <div className={Style.JoinBtn}>انضم الان</div>
                <div className="mt-4">
                  <div className={Style.Line}>
                    <img src={fi_4626794} />
                    مستوى متوسط
                  </div>
                  <div className={Style.Line}>
                    <img src={fi_860780} />
                    32 دروس تعليمية
                  </div>
                  <div className={Style.Line}>
                    <img src={fi_1055204} />
                    بإمكانك مشاهدتها في أي وقت
                  </div>
                  <div className={Style.Line}>
                    <img src={iphone} />
                    بامكانك مشاهدتها على هاتفك
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-9">
              <AnimatePresence mode="sync" >
                {active == 0 ? (
                  <motion.div
                  
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 100, opacity: 0 }}
                  transition={{ duration: 1 }}
                    className={Style.Card}
                  >
                    <h2
                      style={{
                        fontSize: "20px",
                        color: "black",
                        fontWeight: "bold",
                        marginTop: "0px ",
                      }}
                    >
                      نظرة عامة:
                    </h2>
                    <p
                      style={{
                        fontSize: "16px",
                        color: "rgba(0,0,0,0.6)",
                        marginTop: "20px ",
                      }}
                    >
                      تقوم استراتيجيات تطوير الموارد البشرية بتعزيز مهارات
                      العاملين، وتحسين أدائهم، مما يؤدي إلى زيادة الإنتاجية
                      والفعالية. كما أنها تلعب دورًا حاسمًا في تحقيق أهداف "رؤية
                      السعودية 2030" من خلال تحقيق التنمية المستدامة والابتكار.
                      أفضل استراتيجيات تطوير القيادة والإدارة في الموارد البشرية
                      في السعودية التدريب والتطوير: يعزز من مهارات الموظفين
                      وقدراتهم، مما يساهم في تحسين أدائهم وزيادة إنتاجية الشركة.
                      تحسين الأداء: يساعد على تحديد نقاط الضعف والقوة في أداء
                      الموظف، وبالتالي يمكن تحسينه. التخطيط للخلافة: يضمن
                      استمرارية الأعمال حتى في حالة فقدان الموظفين الأساسيين.
                      الخلاصة: تعتبر استراتيجيات تطوير الموارد البشرية أمرًا
                      حاسمًا لنجاح الشركات في المملكة العربية السعودية. من خلال
                      تنفيذ استراتيجيات فعالة لتطوير الموارد البشرية، يمكن
                      للشركات جذب وتطوير المواهب والحفاظ على موظفيها المميزين.
                      بالإضافة إلى ذلك، يمكن لهذه الاستراتيجيات أن تسهم في تعزيز
                      رضا الموظفين وتحفيزهم لتحقيق أداء متميز.
                    </p>
                    <h2
                      style={{
                        fontSize: "20px",
                        color: "black",
                        fontWeight: "bold",
                        marginTop: "30px ",
                      }}
                    >
                      تحليل احتياجات الموارد البشرية
                    </h2>
                    <p
                      style={{
                        fontSize: "16px",
                        color: "rgba(0,0,0,0.6)",
                        marginTop: "20px ",
                      }}
                    >
                      في السعودية، تعتبر استراتيجيات تطوير الموارد البشرية أحد
                      الأسس الرئيسية لنجاح أي مؤسسة. ومن بين هذه الاستراتيجيات،
                      يأتي تحليل احتياجات الموارد البشرية في مقدمة الأولويات.
                    </p>
                  </motion.div>
                ):
                active == 1 ? (
                  <motion.div
                  
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 1 }}
                    className={Style.Card}
                  ></motion.div>
                ):
                null}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </Header2>

      <div className="mt-3 CustomContainer"></div>

      <Footer />
    </>
  );
};

export default SingleCourse;
