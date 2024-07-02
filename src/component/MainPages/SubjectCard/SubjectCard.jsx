import classes from "./SubjectCard.module.scss";
import Image from "../../../assets/images/CourseImage.png";
import StarIcon from "@mui/icons-material/Star";
import TeacherMask from "../../../assets/images/TeacherMask.png";
const SubjectCard = () => {
  return (
    <div className={`${classes.CardContainer} border`}>
      <img src={Image} />
      <div className="d-flex justify-content-between align-items-center mt-3">
        <h2 className="fs-6 fw-bold text-dark">دورة تنمية الذات</h2>
        <div className={classes.Badge}>تفاعلية</div>
      </div>
      <div className={`${classes.Rate} mt-3 d-flex  justify-content-between`} >
        <p className="fs-6 fw-medium title-text--1">تقييمات المادة العلمية</p>
        <span>
          {" "}
          <StarIcon sx={{ color: "#F0B645" }} /> 4.5
        </span>
      </div>
      <div className={classes.Text}>
        خدمة تأسيس الشركات الخارجية وفي السعودية من مجموعة{" "}
      </div>
      <div className={classes.Footer}>
        <div className={classes.Profile}>
          <img className="object-fit-cover img-card-per" width={"50px"} height={"50px"} src={TeacherMask} />
          <div>
            <h3 className="fs-6">بيانات الناشر</h3>
            <h4 className="title-name-academy">اسم الاكادمية</h4>
          </div>
        </div>
        <div>
          <h5 className="num-price">320 ريال</h5>
          <h6 className="num-price">320 ريال</h6>
        </div>
      </div>
    </div>
  );
};

export default SubjectCard;
