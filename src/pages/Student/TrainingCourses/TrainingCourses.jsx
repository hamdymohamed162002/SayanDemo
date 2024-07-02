import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

import { Link, NavLink, Route, Routes } from "react-router-dom";

import AddCircleIcon from "@mui/icons-material/AddCircle";
import SearchAndShowBar from "../../../component/UI/SearchAndShowBar/SearchAndShowBar";
import { useState } from "react";
import TrainingCoursesCardContainer from "../../../component/TrainingCourses/TrainingCoursesCard/TrainingCoursesCardContainer";
import TrainingCoursesTable from "../../../component/TrainingCourses/TrainingCoursesTable/TrainingCoursesTable";
const TrainingCourses = () => {
  const [TableOrNot, setTableOrNot] = useState(false);
  const [checkedKeys, setCheckedKeys] = useState([]);
  const [data, setData] = useState([]);
  const checkAllHandler = () => {
    setCheckedKeys((perv) => {
      if (
        perv?.length === data?.length &&
        (perv?.length !== 0 || data?.length !== 0)
      ) {
        return [];
      } else {
        return [...data];
      }
    });
  };
  return (
    <div className="all-info-top-header">
      <div className="TablePageHeader">
        <div className="HeaderContainer">
          <div className="info-content-header d-flex align-items-center justify-content-between gap-3 flex-wrap w-100">
            <div className="d-flex align-items-center name">
              <div className="icon">
                <PeopleAltIcon sx={{ color: "#A3AED0" }} />
              </div>
              <div style={{ color: "#7E8799" }}> الدورات التدريبية </div>
            </div>
            <div className="userTabs">
              <ul className="flex-wrap gap-4">
                <NavLink
                  to={"/student/TrainingCourses"}
                  end
                  className={({ isActive }) => {
                    return isActive ? " tablePage active" : "tablePage";
                  }}
                >
                  الدورات (2214)
                </NavLink>
                <NavLink
                  to={"/student/TrainingCourses/DirectCourse"}
                  className={({ isActive }) => {
                    return isActive ? " tablePage active" : "tablePage";
                  }}
                >
                  الدورات المباشرة
                </NavLink>
                <NavLink
                  to={"/student/TrainingCourses/AffiliateMarketingSetting"}
                  className={({ isActive }) => {
                    return isActive ? " tablePage active" : "tablePage";
                  }}
                >
                  الدورات الخحضورية
                </NavLink>
              </ul>
            </div>
            <Link to={"/student/AffiliateMarketingSetting"} className="addBtn">
              <AddCircleIcon />
              إضافة دورة جديدة
            </Link>
          </div>
        </div>
      </div>
      <SearchAndShowBar
        checkedKeys={checkedKeys}
        data={data}
        setCheckedKeys={setCheckedKeys}
        setTableOrNot={setTableOrNot}
        checkAllHandler={checkAllHandler}
        TableOrNot={TableOrNot}
        notAdmin
      />

      <Routes>
        <Route
          path={"/"}
          element={
            TableOrNot ? (
              <TrainingCoursesTable
                checkedKeys={checkedKeys}
                setCheckedKeys={setCheckedKeys}
                checkAllHandler={checkAllHandler}
                setData={setData}
              />
            ) : (
              <TrainingCoursesCardContainer
                setData={setData}
                checkedKeys={checkedKeys}
                notAdmin
                setCheckedKeys={setCheckedKeys}
              />
            )
          }
        />
      </Routes>
    </div>
  );
};

export default TrainingCourses;
