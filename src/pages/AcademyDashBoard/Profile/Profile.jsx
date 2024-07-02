import useImage from "./../../../assets/icons/Acadmy.png";
import { RiTwitterXFill } from "react-icons/ri";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { FaFacebook } from "react-icons/fa";
import { FaSnapchatGhost } from "react-icons/fa";
import Insta from "../../../assets/icons/Insta.svg";
import { useEffect, useState } from "react";
import axiosInstance from "../../../../axios";
const Profile = () => {
  const [profileData, setProfileData] = useState([]);
  useEffect(() => {
    axiosInstance.get("profile").then((res) => {
      console.log(res.data.data);
      setProfileData(res.data.data);
    });
  });
  return (
    <div className="all-info-top-header main-info-top">
      <div className="mt-3">
        <div className="ProfileHeader">
          <div className="ProfileBg"></div>
          <div className="ProfileInfo">
            <div className="info-content-header d-flex align-items-center justify-content-between gap-3 flex-wrap w-100">
              <div className="d-flex flex-wrap">
                <div className="ProfileImage">
                  <img src={useImage} className="object-fit-cover" />
                </div>
                <div>
                  <h2 className="fs-6 fw-medium title-text--1">
                    أكاديمية ضوء{" "}
                  </h2>
                  <p className="fs-6 fw-medium  text-content--1">@Thoao</p>
                </div>
              </div>
              <div className="updateBtn">تحديث المعلومات</div>
            </div>
          </div>
        </div>
        <div className="mt-3 g-3 row">
          <div className="col-lg-6 col-md-12">
            <div className="personalCard">
              <div className="personalCardHeader">
                <h2 className="fs-6 fw-medium title-text--1">
                  المعلومات الشخصية
                </h2>
              </div>
              <div className="row PersonalInfo">
                <div className=" col-12 col-sm-6 ">
                  <h3 className="fs-6 fw-medium title-text--1">الاسم</h3>
                  <span className="fs-6 fw-medium title-text--1">
                    محمد محمد
                  </span>
                </div>
                <div className=" col-12 col-sm-6 ">
                  <h3 className="fs-6 fw-medium title-text--1">الدور</h3>
                  <span className="fs-6 fw-medium title-text--1">
                    مدير النظام{" "}
                  </span>
                </div>
                <div className=" col-12 col-sm-6 ">
                  <h3 className="fs-6 fw-medium title-text--1">النوع</h3>
                  <span className="fs-6 fw-medium title-text--1">ذكر </span>
                </div>
                <div className=" col-12 col-sm-6 ">
                  <h3 className="fs-6 fw-medium title-text--1">كلمة المرور</h3>
                  <span className="fs-6 fw-medium title-text--1">
                    {" "}
                    * * * * *{" "}
                  </span>
                </div>
                <div className=" col-12 col-sm-6 ">
                  <h3 className="fs-6 fw-medium title-text--1">رقم الهاتف</h3>
                  <span className="fs-6 fw-medium title-text--1">
                    +96650123456{" "}
                  </span>
                </div>
                <div className=" col-12 col-sm-6 ">
                  <h3 className="fs-6 fw-medium title-text--1">
                    البريد الالكتروني
                  </h3>
                  <span className="fs-6 fw-medium title-text--1">
                    Mohammed@sayan.com{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="personalCard">
              <div className="personalCardHeader">
                <h2 className="fs-6 fw-medium title-text--1">
                  وسائل التواصل الاجتماعي{" "}
                </h2>
              </div>
              <div className="socialLinks">
                <div className="socialRow">
                  <div className="socialInfo">
                    <div className="socialIcon">
                      <RiTwitterXFill style={{ fontSize: "32px" }} />
                    </div>
                    <div>
                      <h3 className="fs-6 fw-medium title-text--1">Twitter</h3>
                      <span className="fs-6 fw-medium title-text--1">
                        @Mohammed
                      </span>
                    </div>
                  </div>
                  <div>
                    <MoreVertIcon />
                  </div>
                </div>
                <div className="socialRow">
                  <div className="socialInfo">
                    <div className="socialIcon">
                      <FaFacebook
                        style={{ fontSize: "32px", color: "#0E85FF" }}
                      />
                    </div>
                    <div>
                      <h3 className="fs-6 fw-medium title-text--1">Facebook</h3>
                      <span className="fs-6 fw-medium title-text--1">
                        @Mohammed
                      </span>
                    </div>
                  </div>
                  <div>
                    <MoreVertIcon />
                  </div>
                </div>
                <div className="socialRow">
                  <div className="socialInfo">
                    <div className="socialIcon">
                      <FaSnapchatGhost
                        style={{ fontSize: "32px", color: "#F7CF00" }}
                      />
                    </div>
                    <div>
                      <h3 className="fs-6 fw-medium title-text--1">Snapchat</h3>
                      <span className="fs-6 fw-medium title-text--1">
                        @Mohammed
                      </span>
                    </div>
                  </div>
                  <div>
                    <MoreVertIcon />
                  </div>
                </div>
                <div className="socialRow">
                  <div className="socialInfo">
                    <div className="socialIcon">
                      <img src={Insta} width={32} />
                    </div>
                    <div>
                      <h3 className="fs-6 fw-medium title-text--1">
                        Instagram
                      </h3>
                      <span className="fs-6 fw-medium title-text--1">
                        @Mohammed
                      </span>
                    </div>
                  </div>
                  <div>
                    <MoreVertIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
