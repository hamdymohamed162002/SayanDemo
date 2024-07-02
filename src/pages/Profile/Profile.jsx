import useImage from "./../../assets/images/userimg.png";
import { RiTwitterXFill } from "react-icons/ri";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { FaFacebook } from "react-icons/fa";
import { FaSnapchatGhost } from "react-icons/fa";
import Insta from '../../assets/icons/Insta.svg'
import { useEffect, useState } from "react";
import axiosInstance from "../../../axios";
const Profile = () => {
  const [profileData, setProfileData] = useState([]);
  useEffect(()=>{
    axiosInstance.get("profile")
    .then(res=>{
      console.log(res.data.data)
      setProfileData(res.data.data)
    })
  })
  return (
    <>
      <div className="all-porfile mt-3">
        <div className="ProfileHeader">
          <div className="ProfileBg"></div>
          <div className="ProfileInfo">
            <div className="d-flex flex-wrap">
              <div className="ProfileImage">
                <img src={useImage} />
              </div>
              <div>
                <h2>احمد محمد</h2>
                <p>@Administration</p>
              </div>
            </div>
            <div className="updateBtn">تحديث المعلومات</div>
          </div>
        </div>
        <div className="mt-3 mb-5 row g-3">
          <div className="col-lg-6 col-md-12">
            <div className="personalCard">
              <div className="personalCardHeader">
                <h2>المعلومات الشخصية</h2>
              </div>
              <div className="row PersonalInfo">
                <div className=" col-12 col-sm-6 ">
                  <h3>الاسم</h3>
                  <span>محمد محمد</span>
                </div>
                <div className=" col-12 col-sm-6 ">
                  <h3>الدور</h3>
                  <span>مدير النظام </span>
                </div>
                <div className=" col-12 col-sm-6 ">
                  <h3>النوع</h3>
                  <span>ذكر </span>
                </div>
                <div className=" col-12 col-sm-6 ">
                  <h3>كلمة المرور</h3>
                  <span> * * * * * </span>
                </div>
                <div className=" col-12 col-sm-6 ">
                  <h3>رقم الهاتف</h3>
                  <span>+96650123456 </span>
                </div>
                <div className=" col-12 col-sm-6 ">
                  <h3>البريد الالكتروني</h3>
                  <span>Mohammed@sayan.com </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="personalCard">
              <div className="personalCardHeader">
                <h2>وسائل التواصل الاجتماعي </h2>
              </div>
              <div className="socialLinks">
                <div className="socialRow">
                  <div className="socialInfo">
                  <div className="socialIcon">
                    <RiTwitterXFill style={{ fontSize: "32px" }} />
                  </div>
                  <div>
                    <h3>Twitter</h3>
                    <span>@Mohammed</span>
                  </div>
                  </div>
                  <div>
                    <MoreVertIcon />
                  </div>
                </div>
                <div className="socialRow">
                  <div className="socialInfo">
                  <div className="socialIcon">
                    <FaFacebook style={{ fontSize: "32px",color:'#0E85FF' }} />
                  </div>
                  <div>
                    <h3>Facebook</h3>
                    <span>@Mohammed</span>
                  </div>
                  </div>
                  <div>
                    <MoreVertIcon />
                  </div>
                </div>
                <div className="socialRow">
                  <div className="socialInfo">
                  <div className="socialIcon">
                    <FaSnapchatGhost style={{ fontSize: "32px",color:'#F7CF00' }} />
                  </div>
                  <div>
                    <h3>Snapchat</h3>
                    <span>@Mohammed</span>
                  </div>
                  </div>
                  <div>
                    <MoreVertIcon />
                  </div>
                </div>
                <div className="socialRow">
                  <div className="socialInfo">
                  <div className="socialIcon">
    <img  src={Insta} width={32}/>
                  </div>
                  <div>
                    <h3>Instagram</h3>
                    <span>@Mohammed</span>
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
    </>
  );
};

export default Profile;
