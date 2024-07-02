import classes from "./Footer.module.scss";
import Logo from "../../../assets/images/logoFooter.png";
import Facebook from "../../../assets/images/Social/Facebook.svg";
import Instagram from "../../../assets/images/Social/Instagram.svg";
import LinkedIn from "../../../assets/images/Social/LinkedIn.svg";
import Twitter from "../../../assets/images/Social/Twitter.svg";
import YouTube from "../../../assets/images/Social/YouTube.svg";

const AcademyFooter = () => {
  return (
   <>
    <div className={classes.FooterContainer}>
      <div className={classes.Socials}>
        <img src={Logo} />
        <div className="d-flex" style={{ gap: "16px", marginTop: "35px" }}>
          <img src={YouTube} />
          <img src={LinkedIn} />
          <img src={Instagram} />
          <img src={Twitter} />
          <img src={Facebook} />
        </div>
        <div
          style={{
            fontSize: "28px",
            color: "white",
            fontWeight: "800",
            marginTop: "35px",
          }}
          className="fs-6 fw-bold  title-text--1"
        >
          بيانات التواصل
        </div>
      </div>
      <div>
        <h2 className="fs-4 fw-bold title-text--1">اسم الاكادمية </h2>
        <p style={{maxWidth:'600px'}} className="fs-6 fw-medium text-content--1">
        نبذه عن الاكادمية نبذه عن الاكادمية نبذه عن الاكادمية نبذه عن الاكادمية نبذه عن الاكادمية نبذه عن الاكادمية نبذه عن الاكادمية نبذه عن الاكادمية نبذه عن الاكادمية نبذه عن الاكادمية نبذه عن الاكادمية نبذه عن الاكادمية نبذه عن الاكادمية نبذه عن الاكادمية نبذه عن الاكادمية نبذه عن الاكادمية نبذه عن الاكادمية نبذه عن الاكادمية نبذه عن الاكادمية نبذه عن الاكادمية نبذه عن الاكادمية 
        </p>
      </div>
    </div>
    <div className={`${classes.CopyRight} copy-text--1`}>
      
        جميع الحقوق محفوظة لمنصة سيان © 2023  | الشروط والأحكام | سياسة الخصوصية
      
        </div></>
  );
};

export default AcademyFooter;
