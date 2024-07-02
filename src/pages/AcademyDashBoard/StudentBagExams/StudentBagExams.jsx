import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

import { Link, NavLink, Route, Routes } from "react-router-dom";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import { useEffect, useState } from "react";
import axiosInstance from "../../../../axios";
import StudentBagExamsTable from "../../../component/AcademyDashboard/StudentBagExams/StudentBagExamsTable";

const StudentBagExams = () => {
  const [userType, setUserType] = useState("all");

  return (
    <div className="all-info-top-header main-info-top">
      <div className="TablePageHeader">
        <div className="HeaderContainer">
     <div className="info-content-header d-flex align-items-center justify-content-between gap-3 flex-wrap w-100">
           <div className="d-flex align-items-center name">
             <div className="icon">
               <PeopleAltIcon sx={{ color: "#A3AED0" }} />
             </div>
             <div style={{ color: "#7E8799" }}>الاختبارات</div>
           </div>
     </div>
        </div>
      </div>
      <div
        style={{
          border: "1px solid #EDEFF2",
          borderRadius: "10px",
          padding: "10px",
          backgroundColor: "white"
        }}
      >
        <StudentBagExamsTable />
      </div>
    </div>
  );
};

export default StudentBagExams;
