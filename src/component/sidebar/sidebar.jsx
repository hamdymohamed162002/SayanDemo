import classes from "./sidebar.module.scss";

import useImage from "../../assets/images/userimg.png";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import AdminNavigation from "./AdminNavigatio";
import StudentNavigation from "./StudentNavigation";
import AcademeyNavigation from "./AcademeyNavigation";
import AcademyImage from "../../assets/icons/Acadmy.png";
const SideBar = ({ flag, setflag, mobile, setShow }) => {
  const location = useLocation();
  const router = useNavigate();

  // .body had collection which is like cateogery and has its own list (subicon ) which contain route to another pages
  return (
    <div
      className={`${
        flag ? [classes.active, classes.sideBar].join(" ") : classes.sideBar
      } poition-relative`}
    >
      <div
        onClick={() => {
          setShow(false);
        }}
        className="icon-close-side"
      >
        X
      </div>
      <div className={classes.sidebarHeader}>
        {location.pathname.includes("/student") ||
        location.pathname.includes("/admin") ? (
          <div className={classes.Profile}>
            <img src={useImage} alt="" />
            <div>
              <p style={{ color: "#2B3674", fontSize: " 24px" }}>احمد محمد</p>
            </div>
          </div>
        ) : (
          <div className={classes.Profile}>
            <img src={AcademyImage} alt="" />
            <div>
              <p style={{ color: "#2B3674", fontSize: " 24px" }}>
                أكاديمية ضوء{" "}
              </p>
            </div>
          </div>
        )}
      </div>

      <div className={classes.body}>
        {location.pathname.includes("/admin") ? (
          <AdminNavigation setShow={setShow} mobile={mobile} />
        ) : location.pathname.includes("/student") ? (
          <StudentNavigation setShow={setShow} mobile={mobile} />
        ) : (
          <AcademeyNavigation setShow={setShow} mobile={mobile} />
        )}
      </div>
    </div>
  );
};

export default SideBar;
