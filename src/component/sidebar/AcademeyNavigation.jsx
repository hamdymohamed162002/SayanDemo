import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

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
import classes from "./sidebar.module.scss";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import HomeIcon from "../../assets/icons/home";
import SettingIcon from "../../assets/icons/SettingIcon";
import PeopleIcon from "../../assets/icons/PeopleIcon";
import OpenBookIcon from "../../assets/icons/OpenbookIcon";
import BagCustomIcon from "../../assets/icons/BagIcon";
import ShopCustomIcon from "../../assets/icons/ShopCustomIcon";
import WalletCustomIcon from "../../assets/icons/WalletCustomIcon";
import ProfIleCustomIcon from "../../assets/icons/ProfIleCustomIcon";
import StaticsCustomIcon from "../../assets/icons/StaticsCustomIcon";
import AcademyIcon from "../../assets/icons/AcademyIcon";
import EmployeeMangment from "../../assets/icons/EmployeeMangement";
const AcademeyNavigation = ({ setShow }) => {
  const location = useLocation();

  return (
    <>
      <NavLink
        to="/academy"
        end
        className={({ isActive, isPending }) => {
          return isPending ? "pending" : isActive ? classes.activeLink : "";
        }}
      >
        <div className={classes.mainIcon}>
          <div>
            <HomeIcon active={location.pathname === "/academy"} />
            <span className="title-dash-link">لوحة التحكم</span>
          </div>
        </div>
      </NavLink>
      <NavLink
        to="/academy/profile"
        end
        className={({ isActive, isPending }) => {
          return isPending ? "pending" : isActive ? classes.activeLink : "";
        }}
      >
        <div className={classes.mainIcon}>
          <div>
            <AcademyIcon active={location.pathname === "/academy/profile"} />
            <span className="title-dash-link">الاكاديمية </span>
          </div>
        </div>
      </NavLink>

      <Collection
        mainIcon={
          <OpenBookIcon
            active={[
              "/academy/TrainingCourses",
              "/academy/Sessions",
              "/academy/DigitalProducts",
              "/academy/ProductPackages",
              "/academy/Blogs",
              "/academy/Exams",
              "/academy/dashboard/AddClient",
              "/academy/Video",
              "/academy/Categories",
              "/academy/SingleExam",
              "/academy/Certficates"
            ].find(
              (path) =>
                location.pathname === path || location.pathname.includes(path)
            )}
          />
        }
        mainTitle={"ادارة المحتوى "}
        acitve={[
          "/academy/TrainingCourses",
          "/academy/Sessions",
          "/academy/DigitalProducts",
          "/academy/ProductPackages",
          "/academy/Blogs",
          "/academy/Exams",
          "/academy/dashboard/AddClient",
          "/academy/Video",
          "/academy/Categories",
          "/academy/SingleExam",
          "/academy/Certficates"
        ].find(
          (path) =>
            location.pathname === path || location.pathname.includes(path)
        )}
      >
        <Collection
          mainIcon={
            <div
              className="d-flex justify-content-center"
              style={{ width: "35px", height: "35px" }}
            >
              <FiberManualRecordIcon
                sx={{
                  color: "       #7E8799",
                  width: "10px",
                  height: "10px"
                }}
              />
            </div>
          }
          mainTitle={"المواد التعليمية  "}
          nested
        >
          <NavLink
            to="academy/TrainingCourses"
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
            to="academy/Certficates"
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
              <span>الشهادات </span>
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
            to="academy/Exams"
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
              <span className="title-dash-link"> الاختبارات </span>
            </div>
          </NavLink>
        </Collection>

        <NavLink
          className={({ isActive, isPending }) => {
            return isPending
              ? "pending"
              : isActive
              ? `${classes.Link} LinkActive`
              : classes.Link;
          }}
          to="academy/Sessions"
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
          to="academy/DigitalProducts"
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
            <span className="title-dash-link">المنتجات الرقمية </span>
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
          to="academy/ProductPackages"
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
            <span className="title-dash-link"> حزم المنتجات </span>
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
          to="academy/Blogs"
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
            <span className="title-dash-link">المدونات </span>
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
          to="academy/Video"
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
            <span className="title-dash-link">مكتبة الفيديو </span>
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
          to="academy/Categories"
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
            <span className="title-dash-link">التصنيفات </span>
          </div>
        </NavLink>
      </Collection>
      <Collection
        mainIcon={
          <BagCustomIcon
            active={[
              "/academy/StudentInfo",
              "/academy/Comments",
              "/academy/Exams",
              "/academy/Requests",
              "/academy/Cart",
              "/academy/StudentBagExams",
              "/academy/StudentBagCertifcate"
            ].find((path) => location.pathname === path)}
          />
        }
        mainTitle={"حقيبة الطلاب  "}
        acitve={[
          "/academy/StudentInfo",
          "/academy/Comments",
          "/academy/Exams",
          "/academy/Requests",
          "/academy/Cart",
          "/academy/StudentBagExams",
          "/academy/StudentBagCertifcate"
        ].find((path) => location.pathname === path)}
      >
        <NavLink
          to="academy/StudentInfo"
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
            <span className="title-dash-link">معلومات الطلاب</span>
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
          to="/academy/StudentBagExams"
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
          to="/academy/StudentBagCertifcate"
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
          to="academy/Comments"
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
            <span className="title-dash-link">التعليقات </span>
          </div>
        </NavLink>
      </Collection>
      <NavLink
        to="academy/EmployeeMangment"
        className={({ isActive, isPending }) => {
          return isPending ? "pending" : isActive ? classes.activeLink : "";
        }}
      >
        <div className={classes.mainIcon}>
          <div>
            <EmployeeMangment
              active={["/academy/EmployeeMangment"].find(
                (path) => location.pathname === path
              )}
            />
            <span className="title-dash-link">ادارة الموظفين </span>
          </div>
        </div>
      </NavLink>
      <Collection
        mainIcon={
          <ShopCustomIcon
            active={[
              "/academy/JoiningForms",
              "/academy/FinancialTransactions",
              "/academy/AffiliateMarketing",
              "/academy/Sales"
            ].find((path) => location.pathname === path)}
          />
        }
        mainTitle={" التسويق  "}
        acitve={[
          "/academy/SubscreptionPacks",
          "/academy/FinancialTransactions",
          "/academy/AffiliateMarketing",
          "/academy/Sales"
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
          to="academy/AffiliateMarketing"
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
          to="academy/FinancialTransactions"
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

        <NavLink
          className={({ isActive, isPending }) => {
            return isPending
              ? "pending"
              : isActive
              ? `${classes.Link} LinkActive`
              : classes.Link;
          }}
          to="academy/Sales"
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
            <span className="title-dash-link">العروض </span>
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
          to="academy/SubscreptionPacks"
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
            <span className="title-dash-link">باقات الاشتراك </span>
          </div>
        </NavLink>
      </Collection>

      <NavLink
        to="academy/Wallet"
        className={({ isActive, isPending }) => {
          return isPending ? "pending" : isActive ? classes.activeLink : "";
        }}
      >
        <div className={classes.mainIcon}>
          <div>
            <WalletCustomIcon
              active={["/academy/Wallet"].find(
                (path) => location.pathname === path
              )}
            />
            <span className="title-dash-link">المحفظة </span>
          </div>
        </div>
      </NavLink>

      <NavLink
        to="academy/ReportsAndStatistics"
        className={({ isActive, isPending }) => {
          return isPending ? "pending" : isActive ? classes.activeLink : "";
        }}
      >
        <div className={classes.mainIcon}>
          <div>
            <StaticsCustomIcon
              active={["/academy/ReportsAndStatistics"].find(
                (path) => location.pathname === path
              )}
            />
            <span className="title-dash-link">التقارير والاحصائيات </span>
          </div>
        </div>
      </NavLink>
      <div className={`${classes.Bot} gap-3`}>
        <div className={classes.Icon}>
          <SmartToyIcon sx={{ fontSize: "35px", color: "white" }} />
        </div>
        <div className="main-info-sidebar-bottom">
          <h2 className="fs-6 fw-bold">
            مساعدك الذكي !
            <br />
            متصل الان
          </h2>
          <span className="fs-6 fw-medium  button-sidebar-bottom">
            {" "}
            تواصل
            <KeyboardBackspaceIcon />
          </span>
        </div>
      </div>
    </>
  );
};

export default AcademeyNavigation;
