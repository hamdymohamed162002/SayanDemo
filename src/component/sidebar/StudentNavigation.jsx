import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import AddIcon from "@mui/icons-material/Add";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import GroupsIcon from "@mui/icons-material/Groups";
import { IoSettings } from "react-icons/io5";
import AssessmentIcon from "@mui/icons-material/Assessment";
import { useEffect, useRef, useState } from "react";
import Collection from "./Collection/collection";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { FaBookOpen } from "react-icons/fa";
import { HiMiniBriefcase } from "react-icons/hi2";
import PersonIcon from "@mui/icons-material/Person";
import WalletIcon from "@mui/icons-material/Wallet";
import ShopIcon from "../../assets/icons/shop.svg";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArticleIcon from "@mui/icons-material/Article";
import classes from "./sidebar.module.scss";
import SmartToyIcon from "@mui/icons-material/SmartToy";
const StudentNavigation = ({ setShow }) => {
  const location = useLocation();
  return (
    <>
      <NavLink
        to="/student/dashboard"
        end
        className={({ isActive, isPending }) => {
          return isPending ? "pending" : isActive ? classes.activeLink : "";
        }}
      >
        <div className={classes.mainIcon}>
          <div>
            <HomeIcon sx={{ width: "35px", height: "35px" }} />
            <span className="title-dash-link">لوحة التحكم</span>
          </div>
        </div>
      </NavLink>

      <Collection
        mainIcon={
          <HiMiniBriefcase
            style={{
              width: "30px",
              height: "30px",
              display: "flex",
              justfiyContent: "center"
            }}
          />
        }
        mainTitle={"حقيبة الطلاب  "}
        acitve={[
          "student/StudentRate",
          "student/Comments",
          "student/Subscription",
          "student/Purchases",
          "student/Cart"
        ].find((path) => location.pathname === path)}
      >
        <NavLink
          to="student/TrainingCourses"
          className={({ isActive, isPending }) => {
            return isPending
              ? "pending"
              : isActive
              ? `${classes.Link} LinkActive`
              : classes.Link;
          }}
        >
          <div
            className={classes.subIcon}
            onClick={(e) => {
              mobile ? setShow(false) : null;
            }}
          >
            <div>
              <FiberManualRecordIcon
                sx={{
                  color: "       #7E8799",
                  width: "10px",
                  height: "10px"
                }}
              />
            </div>
            <span className="title-dash-link">الدورات التدريبية</span>
          </div>
        </NavLink>
        <NavLink
          className={({ isActive, isPending }) => {
            return isPending
              ? "pending"
              : isActive
              ? `${classes.Link} LinkActive`
              : classes.Link;
          }}
          to="student/Sessions"
        >
          <div
            className={classes.subIcon}
            onClick={(e) => {
              mobile ? setShow(false) : null;
            }}
          >
            <div>
              <FiberManualRecordIcon
                sx={{
                  color: "       #7E8799",
                  width: "10px",
                  height: "10px"
                }}
              />
            </div>
            <span className="title-dash-link">الجلسات الحضورية </span>
          </div>
        </NavLink>
        <NavLink
          className={({ isActive, isPending }) => {
            return isPending
              ? "pending"
              : isActive
              ? `${classes.Link} LinkActive`
              : classes.Link;
          }}
          to="student/Exams"
        >
          <div
            className={classes.subIcon}
            onClick={(e) => {
              mobile ? setShow(false) : null;
            }}
          >
            <div>
              <FiberManualRecordIcon
                sx={{
                  color: "       #7E8799",
                  width: "10px",
                  height: "10px"
                }}
              />
            </div>
            <span className="title-dash-link">الاختبارات </span>
          </div>
        </NavLink>
        <NavLink
          className={({ isActive, isPending }) => {
            return isPending
              ? "pending"
              : isActive
              ? `${classes.Link} LinkActive`
              : classes.Link;
          }}
          to="student/Certficates"
        >
          <div
            className={classes.subIcon}
            onClick={(e) => {
              mobile ? setShow(false) : null;
            }}
          >
            <div>
              <FiberManualRecordIcon
                sx={{
                  color: "       #7E8799",
                  width: "10px",
                  height: "10px"
                }}
              />
            </div>
            <span className="title-dash-link">الشهادات </span>
          </div>
        </NavLink>
        <NavLink
          className={({ isActive, isPending }) => {
            return isPending
              ? "pending"
              : isActive
              ? `${classes.Link} LinkActive`
              : classes.Link;
          }}
          to="student/Favorate"
        >
          <div
            className={classes.subIcon}
            onClick={(e) => {
              mobile ? setShow(false) : null;
            }}
          >
            <div>
              <FiberManualRecordIcon
                sx={{
                  color: "       #7E8799",
                  width: "10px",
                  height: "10px"
                }}
              />
            </div>
            <span className="title-dash-link">قائمة المفضلة </span>
          </div>
        </NavLink>
        <NavLink
          className={({ isActive, isPending }) => {
            return isPending
              ? "pending"
              : isActive
              ? `${classes.Link} LinkActive`
              : classes.Link;
          }}
          to="student/Rates"
        >
          <div
            className={classes.subIcon}
            onClick={(e) => {
              mobile ? setShow(false) : null;
            }}
          >
            <div>
              <FiberManualRecordIcon
                sx={{
                  color: "       #7E8799",
                  width: "10px",
                  height: "10px"
                }}
              />
            </div>
            <span className="title-dash-link">التقييمات </span>
          </div>
        </NavLink>
      </Collection>
      <NavLink
        to="/student/pruchases"
        className={({ isActive, isPending }) => {
          return isPending ? "pending" : isActive ? classes.activeLink : "";
        }}
      >
        <div className={classes.mainIcon}>
          <div>
            <ArticleIcon sx={{ width: "35px", height: "35px" }} />
            <span className="title-dash-link">المشتريات </span>
          </div>
        </div>
      </NavLink>
      <NavLink
        to="/student/shoppingCart"
        className={({ isActive, isPending }) => {
          return isPending ? "pending" : isActive ? classes.activeLink : "";
        }}
      >
        <div className={classes.mainIcon}>
          <div>
            <ShoppingCartIcon sx={{ width: "35px", height: "35px" }} />
            <span className="title-dash-link">عربة التسوق </span>
          </div>
        </div>
      </NavLink>
      <Collection
        mainIcon={
          <img src={ShopIcon} style={{ width: "28px", height: "28px" }} />
        }
        mainTitle={" التسويق  "}
        acitve={[
          "student/JoiningForms",
          "student/FinancialTransactions",
          "student/AffiliateMarketing",
          "student/Sales"
        ].find((path) => location.pathname === path)}
      >
        <NavLink
          className={({ isActive, isPending }) => {
            return isPending
              ? "pending"
              : isActive
              ? `${classes.Link} LinkActive`
              : classes.Link;
          }}
          to="student/Marketing"
        >
          <div
            className={classes.subIcon}
            onClick={(e) => {
              mobile ? setShow(false) : null;
            }}
          >
            <div>
              <FiberManualRecordIcon
                sx={{
                  color: "       #7E8799",
                  width: "10px",
                  height: "10px"
                }}
              />
            </div>
            <span className="title-dash-link">التسويق بالعمولة </span>
          </div>
        </NavLink>
        <NavLink
          className={({ isActive, isPending }) => {
            return isPending
              ? "pending"
              : isActive
              ? `${classes.Link} LinkActive`
              : classes.Link;
          }}
          to="student/Transactions"
        >
          <div
            className={classes.subIcon}
            onClick={(e) => {
              mobile ? setShow(false) : null;
            }}
          >
            <div>
              <FiberManualRecordIcon
                sx={{
                  color: "       #7E8799",
                  width: "10px",
                  height: "10px"
                }}
              />
            </div>
            <span className="title-dash-link">المعاملات المالية </span>
          </div>
        </NavLink>
      </Collection>

      <NavLink
        to="student/Wallet"
        className={({ isActive, isPending }) => {
          return isPending ? "pending" : isActive ? classes.activeLink : "";
        }}
      >
        <div className={classes.mainIcon}>
          <div>
            <WalletIcon sx={{ width: "35px", height: "35px" }} />
            <span className="title-dash-link">المحفظة </span>
          </div>
        </div>
      </NavLink>
      <NavLink
        to="student/profile"
        className={({ isActive, isPending }) => {
          return isPending ? "pending" : isActive ? classes.activeLink : "";
        }}
      >
        <div className={classes.mainIcon}>
          <div>
            <PersonIcon sx={{ width: "35px", height: "35px" }} />
            <span className="title-dash-link">الملف الشخصي </span>
          </div>
        </div>
      </NavLink>
      <NavLink
        to="student/ReportsAndStatistics"
        className={({ isActive, isPending }) => {
          return isPending ? "pending" : isActive ? classes.activeLink : "";
        }}
      >
        <div className={classes.mainIcon}>
          <div>
            <AssessmentIcon style={{ width: "35px", height: "35px" }} />
            <span className="title-dash-link">التقارير والاحصائيات </span>
          </div>
        </div>
      </NavLink>
    </>
  );
};

export default StudentNavigation;
