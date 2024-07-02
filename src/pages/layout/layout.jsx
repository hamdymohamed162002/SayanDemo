import { useEffect, useState } from "react";
import NavBar from "../../component/navbar/navbar";
import SideBar from "../../component/sidebar/sidebar.jsx";
import MobileSideBar from "../../component/sidebar/mobileSideBar";
import { useLocation } from "react-router-dom";
const LayOut = ({ children }) => {
  const [flag, setFlag] = useState(false);
  const [show, setShow] = useState(false);
  const location = useLocation();
 
  return (
    <>
      {location.pathname.includes("/login")  || location.pathname.includes("/register") || location.pathname.includes("/home")   ? (
        children
      ) : (
        <div>
          <div
            style={{ display: "", justifyContent: "space-between" }}
            className="resposive-container"
          >
            <div
              style={
                !flag
                  ? { width: "20%", transition: "0.4s", maxWidth: "350px" }
                  : { width: "66px", transition: "0.4s" }
              }
              className="responsive-sideBar"
            >
              <SideBar flag={false} />
            </div>
            <div className="main-page">
              <NavBar setShow={setShow} />
              {children}
            </div>
          </div>
          <MobileSideBar show={show} setShow={setShow} />
        </div>
      )}
    </>
  );
};

export default LayOut;
