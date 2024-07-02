import classes from "./navbar.module.scss";
import PersonIcon from "@mui/icons-material/Person";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { GoBell } from "react-icons/go";
import SegmentIcon from "@mui/icons-material/Segment";
import useImage from "./../../assets/images/userimg.png";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { useState } from "react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import SettingsIcon from "@mui/icons-material/Settings";
import LanguageIcon from "@mui/icons-material/Language";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import { AnimatePresence, motion } from "framer-motion";
import { CiLogout } from "react-icons/ci";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
const NavBar = ({ setShow }) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const dropdownVariants = {
    hidden: { opacity: 0, y: "120%" },
    visible: { opacity: 1, y: " 100%", transition: { duration: 0.3 } }
  };
  return (
    <div
      className={`${classes.navbar} navbar-dash`}
      style={{
        border: "1px solid #EDEFF2",
        borderRadius: "10px",
        backgroundColor: "white"
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "32px",
          position: "relative",
          alignItems: "center"
        }}
      >
        <div className={classes.forMobile}>
          <MenuOutlinedIcon
            sx={{ width: "30px", height: "30px", color: "#7E8799" }}
            onClick={() => setShow(true)}
          />
        </div>
        <div>
          <div className={`${classes.Profile}`}>
            <img
              src={useImage}
              alt="user-avatar"
              onClick={() => setShowDropDown(!showDropDown)}
            />
            <div className={classes.greenBall}></div>
            <AnimatePresence>
              {showDropDown && (
                <motion.div
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className={`${classes.dropDownMenu} drop-menu--1`}
                >
                  <div>
                    <AccountBalanceWalletIcon sx={{ color: "#A3AED0" }} />
                    حساب المنصة
                  </div>
                  <div>
                    <SettingsIcon sx={{ color: "#A3AED0" }} />
                    ادارة النظام
                  </div>
                  <div>
                    <LanguageIcon sx={{ color: "#A3AED0" }} />
                    اللغة (العربية)
                  </div>
                  <div>
                    <BedtimeIcon sx={{ color: "#A3AED0" }} />
                    الوضع (فاتح)
                  </div>
                  <div className="d-flex align-items-center">
                    <LogoutOutlinedIcon sx={{ color: "#A3AED0" }} />
                    <span style={{ color: "red" }}> الخروج</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        <NotificationsNoneOutlinedIcon
          sx={{ width: "30px", height: "30px", color: "#7E8799" }}
        />
      </div>
      <div className={`${classes.Title} input--info`}>
        {/* Search Bar with Search Icon */}
        <div className={classes.searchBar}>
          <input type="text" placeholder="ابحث..." />
          <SearchIcon
            sx={{ width: "20px", height: "20px", color: "#7E8799" }}
          />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
