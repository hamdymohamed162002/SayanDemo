import classes from "./NavBar.module.scss";
import image from "../../../assets/images/SayanLogo.png";
import Offcanvas from "react-bootstrap/Offcanvas";
import MenuIcon from "@mui/icons-material/Menu";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
const NavBar = ({}) => {
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
  // FIXED TOP NAVBAR
  const [isMenuFixed, setMenuFixed] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      // Check the scroll position
      const scrollTop = window.scrollY;
      const shouldBeFixed = scrollTop > 100; // Change 100 to the scroll position where you want the menu to become fixed
      // Update state to trigger the fixed or unfixed state of the menu
      setMenuFixed(shouldBeFixed);
    };
    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);
  }, []); // Runs only once on mount

  return (
    <div data-aos="fade-down">
      <div
        className={`navbar--1 ${classes.NavBarContainer} ${
          isMenuFixed ? "menu-fixed" : ""
        }`}
      >
        <div className={classes.NavBarRoutes}>
          <div className={classes.logo}>
            <Link to="/">
              <img src={image} alt="sayn academy logo" />
            </Link>
          </div>
          <div className={classes.Routes}>
            <ul>
              <li>
                <NavLink
                  className={({ isActive, isPending }) => {
                    return isPending
                      ? "pending"
                      : isActive
                      ? classes.NavActive
                      : "";
                  }}
                  to={"/"}
                >
                  الرئيسية
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive, isPending }) => {
                    return isPending
                      ? "pending"
                      : isActive
                      ? classes.NavActive
                      : "";
                  }}
                  to={`/LaunchYourAcademy`}
                >
                  اطلق اكادميتك
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive, isPending }) => {
                    return isPending
                      ? "pending"
                      : isActive
                      ? classes.NavActive
                      : "";
                  }}
                  to={`/Blogs`}
                >
                  المدونة
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive, isPending }) => {
                    return isPending
                      ? "pending"
                      : isActive
                      ? classes.NavActive
                      : "";
                  }}
                  to={`/Ai`}
                >
                  الذكاء الاصطناعي{" "}
                </NavLink>
              </li>
              <li>
                {" "}
                <NavLink
                  className={({ isActive, isPending }) => {
                    return isPending
                      ? "pending"
                      : isActive
                      ? classes.NavActive
                      : "";
                  }}
                  to={`/EmployeeTrainning`}
                >
                  تدريب وتطوير الموظفين{" "}
                </NavLink>{" "}
              </li>
            </ul>
          </div>
        </div>
        <div className={classes.NavBarBtns}>
          <div className={classes.Secondry}>دخول</div>
          <div className={classes.Primary}>انضم الان </div>
        </div>
        <div className={classes.MobileMenu} onClick={handleShow}>
          <MenuIcon />
        </div>
      </div>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title style={{ direction: "rtl" }}>
            {" "}
            <div className={classes.logo}>
              <img src={image} alt="sayn academy logo" />
            </div>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body style={{ direction: "rtl" }}>
          <ul className={classes.Offcanvas}>
            <li>
              <NavLink
                className={({ isActive, isPending }) => {
                  return isPending
                    ? "pending"
                    : isActive
                    ? classes.NavActive
                    : "";
                }}
                to={"/"}
              >
                الرئيسية
              </NavLink>
            </li>
            <li>
              <NavLink to={`/LaunchYourAcademy`}>اطلق اكادميتك</NavLink>
            </li>
            <li>
              <NavLink to={`/Blogs`}>المدونة</NavLink>
            </li>
            <li>
              <NavLink to={`/Ai`}>الذكاء الاصطناعي </NavLink>
            </li>
            <li>
              {" "}
              <NavLink to={`/EmployeeTrainning`}>
                تدريب وتطوير الموظفين{" "}
              </NavLink>{" "}
            </li>
          </ul>
          <div
            className={classes.NavBarBtnss}
            style={{ flexDirection: "column" }}
          >
            <div className={classes.Secondry}>دخول</div>
            <div className={classes.Primary}>انضم الان </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default NavBar;
