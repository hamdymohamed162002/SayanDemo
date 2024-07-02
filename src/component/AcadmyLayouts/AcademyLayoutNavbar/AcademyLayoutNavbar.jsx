import classes from "./AcademyLayoutNavbar.module.scss";
import image from "../../../assets/images/acadmeylogo.png";
import Offcanvas from "react-bootstrap/Offcanvas";
import MenuIcon from "@mui/icons-material/Menu";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
const AcademyLayoutNavbar = ({}) => {
  const [show, setShow] = useState(false);
  const [path, setPath] = useState("");
  const location = useLocation();
  useEffect(() => {
    let temp = location.pathname;
    if (temp.split("/").length === 3) {
      console.log(temp); // Output: "/academyLayout/3"
    } else {
      // Remove the last segment and trailing slash if they exist
      temp = temp.replace(/\/[^\/]+\/?$/, "");
    }
    console.log(temp);

    setPath(temp);
  });
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div data-aos="fade-down" className={`container`}>
      <div className={`${classes.NavBarContainer} all-navbar-layout-1`}>
        <div className={classes.NavBarRoutes}>
          <div className={classes.logo}>
            <img src={image} alt="sayn academy logo" />
          </div>
          <div className={classes.Routes}>
            <ul>
              <li>
                <Link to={path}>الرئيسية</Link>
              </li>
              <li>
                <Link to={`${path}/AllCoursesPage`}>الدورات</Link>
              </li>
              <li>
                <Link to={`${path}/AllBlogs`}>المدونة</Link>
              </li>
              <li>
                <Link to={`${path}/AllProductsPage`}>المنتجات الرقمية</Link>
              </li>
              <li>
                {" "}
                <Link to={`${path}/ContactUs`}>تواصل معنا</Link>{" "}
              </li>
            </ul>
          </div>
        </div>
        <div className={classes.NavBarBtns}>
          <div className={classes.Secondry}>دخول</div>
        <div className={`${classes.Primary} button-new-account`}>حساب جديد</div>
        </div>
        <div className={classes.MobileMenu} onClick={handleShow}>
          <MenuIcon />
        </div>
      </div>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default AcademyLayoutNavbar;
