import classes from "./ProductCard.module.scss";
import Image from "../../../assets/images/CourseImage.png";
import StarIcon from "@mui/icons-material/Star";
import TeacherMask from "../../../assets/images/TeacherMask.png";
import Book from "../../../assets/images/book.png";
const ProductCard = () => {
  return (
    <div className={classes.CardContainer}>
      <img src={Book} />
      <div className="d-flex justify-content-between mt-2">
        <h2 className="fs-6 fw-bold title-text--1">اسم المنتج</h2>
        <div className={classes.Badge}>PDF</div>
      </div>
      <div className={`${classes.Rate} justify-content-between  mt-3`}>
        <p>تقييمات المادة العلمية</p>
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
          <img src={TeacherMask} />
          <div>
            <h3>بيانات الناشر</h3>
            <h4>اسم الاكادمية</h4>
          </div>
        </div>
        <div>
          <h5 className="fs-6 fw-bold">320 ريال</h5>
          <h6 className="fs-6 fw-medium">320 ريال</h6>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
