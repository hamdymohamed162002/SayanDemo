import classes from "./SingleBlogCard.module.scss";
import Image from "../../../assets/images/singleblog.png";
import userImage from "../../../assets/images/userimg.png";
const SingleBlogCard = () => {
  return (
    <div className={`${classes.CardContainer} card-container--info`}>
      <div className={`${classes.ImageContainer} img-card-container`}>
        <img src={Image} />
        <div className={classes.Badge}>تأسيس شركات</div>
        <div className={`${classes.detials} details-card--1`}>
          <div className="d-flex gap-2">
            تأسيس شركات <span style={{ color: "#6D6D6D" }}>6 دقائق</span>
          </div>
          <div>10 ابريل 2023</div>
        </div>
      </div>
      <p className="fs-6 fw-medium text--1">
        الملكية الفكرية وتسجيل العلامة التجارية في السعودية
      </p>
      <div className={classes.Footer}>
        <span className="fs-6 fw-medium title-text--1">تفاصيل أكثر</span>
        <div>
          <img src={userImage} />
        </div>
      </div>
    </div>
  );
};

export default SingleBlogCard;
