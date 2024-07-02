import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

import { Link, NavLink, Route, Routes } from "react-router-dom";

import AddCircleIcon from "@mui/icons-material/AddCircle";
import SearchAndShowBar from "../../../component/UI/SearchAndShowBar/SearchAndShowBar";
import { useState } from "react";
import SalesCards from "../../../component/Sales/SalesCard/SalesCards";
const Marketing = () => {
  const [TableOrNot, setTableOrNot] = useState(true);
  return (
    <>
      <div className="TablePageHeader">
        <div className="HeaderContainer">
          <div className="d-flex align-items-center name">
            <div className="icon">
              <PeopleAltIcon sx={{ color: "#A3AED0" }} />
            </div>
            <div style={{ color: "#7E8799" }}> برامج التسويق بالعمولة المُشترك بها </div>
          </div>
         
        </div>
      </div>
     <Routes></Routes>
      <SalesCards notAdmin />
    </>
  );
};

export default Marketing;
