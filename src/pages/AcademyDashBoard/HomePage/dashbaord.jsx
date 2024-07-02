import StudentDashboardHeader from "../../../component/dashboard/Header/StudentHeader";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import classes from "./dasahboard.module.scss";
import useImage from "../../../assets/images/userimg.png";
import Image1 from "./../../../assets/images/Image.png";
import PersonIcon from "@mui/icons-material/Person";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement
} from "chart.js";
import SchoolIcon from "@mui/icons-material/School";
import { Line, Pie } from "react-chartjs-2";

import { Bar } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";
import EmployeeCard from "../../../component/dashboard/emploeeCard/EmployeeCard";
import FirstCard from "../../../component/dashboard/firstCard/firstCard";
import { Dropdown } from "rsuite";
import prest from "../../../assets/icons/presntation.svg";
import Assigned from "../../../assets/icons/Assigned.png";
import MixedArea from "../../../component/charts/mixedArea";
import RadialBarChart from "../../../component/charts/RadialBar";
import CalenderIcon from "../../../assets/icons/CalenderIcon";
import StopWatchIcon from "../../../assets/icons/StopWatchIcon";
import PlayIcon from "../../../assets/icons/PlayIcon";
import WatchIcon from "../../../assets/icons/WatchIcon";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement
);
const AcademyDashboard = () => {
  const options = {
    plugins: {
      legend: {
        position: "bottom",
        rtl: true
      }
    },
    responsive: true,
    scales: {
      x: {
        display: false,
        stacked: false
      },
      y: {
        display: true,
        stacked: true
      }
    }
  };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August"
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "لم يقوموا بالتسجيل",
        data: [400, 370, 330, 390, 320, 350, 360, 200],
        backgroundColor: "#EA1E1E",
        barBorderRadius: 50,
        barPercentage: 0.5, // Adjust this value to control the width of the bars
        categoryPercentage: 0.5 // Adjust this value to control the space between bars
      }
    ]
  };

  const options2 = {
    responsive: true,

    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      x: {
        display: true
      },
      y: {
        display: false
      }
    }
  };

  const data2 = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: [400, 370, 330, 390, 320, 350, 360, 200],
        borderColor: "#6A8BFF",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        tension: 0.4
      },
      {
        label: "Dataset 2",
        data: [700, 600, 500, 450, 680, 570, 600, 410],
        borderColor: "#05CD99",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        tension: 0.4
      }
    ]
  };
  const data3 = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [24, 29, 36, 11],
        backgroundColor: ["#583AED", "#0FE8E8", "#EDEFF2", "#EDEFF2"],
        borderColor: ["#583AED", "#0FE8E8", "#EDEFF2", "#EDEFF2"],
        borderWidth: 1
      }
    ]
  };

  const options3 = {
    plugins: {
      legend: {
        display: false,
        position: "top",

        labels: {
          usePointStyle: true, // Use a circular point style for the legend
          boxWidth: 8 // Adjust the box width as needed
        },
        itemStyle: {
          lineHeight: 1.5 // Adjust the line height as needed
        }
      }
    },
    layout: {
      padding: 20
    },
    elements: {
      cutout: 50,
      responsive: true
    }
  };
  return (
    <div>
      <StudentDashboardHeader academy />
      <div className="row g-3 mt-3">
        <div className="col-lg-6 col-md-12">
          <div className={classes.HomeChart}>
            <div className={`${classes.ChartCardHeader}`}>
              <div>
                <h2 className="fs-5 fw-medium title-text--1">
                  {" "}
                  باقات الاشتراك
                </h2>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <div style={{ maxWidth: "200px" }}>
                <Pie data={data3} options={options3} />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "30px",
                gap: "18px"
              }}
              className="flex-wrap main-dash-info"
            >
              <div>
                <div className="d-flex align-items-center gap-2">
                  <FiberManualRecordIcon
                    sx={{ color: "#2C00E5", width: "12px", height: "12px" }}
                  />
                  <span
                    style={{
                      color: "#7E8799",
                      fontSize: "14px",
                      fontWeight: "500"
                    }}
                    className="fs-6 fw-medium title-text--1"
                  >
                    باقة النمو
                  </span>
                </div>
                <h2
                  style={{
                    color: "#2B3674",
                    fontSize: "22px",
                    fontWeight: "700",
                    marginTop: "10px",
                    lineHeight: "0px"
                  }}
                  className="fs-6 fw-bold title-text--1 text-center pt-1"
                >
                  25%
                </h2>
              </div>
              <div
                style={{
                  width: "1px",
                  background: "rgba(163, 174, 208, 0.40)",
                  height: "47px"
                }}
              ></div>
              <div>
                <div className="d-flex align-items-center gap-2">
                  <FiberManualRecordIcon
                    sx={{ color: "#0FE8E8", width: "12px", height: "12px" }}
                  />
                  <span
                    style={{
                      color: "#7E8799",
                      fontSize: "14px",
                      fontWeight: "500"
                    }}
                    className="fs-6 fw-medium title-text--1"
                  >
                    الباقة الاحترافية
                  </span>
                </div>
                <h2
                  style={{
                    color: "#2B3674",
                    fontSize: "22px",
                    fontWeight: "700",
                    marginTop: "10px",
                    lineHeight: "0px"
                  }}
                  className="fs-6 fw-bold title-text--1 pt-1 text-center"
                >
                  63%
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
          <div className={classes.HomeChart}>
            <div className={`${classes.ChartCardHeader}`}>
              <div>
                <h2 className="fs-5 fw-medium title-text--1">
                  {" "}
                  التسويق بالعمولة{" "}
                </h2>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <div>
                <RadialBarChart />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginBlock: "30px",
                gap: "100px"
              }}
              className="flex-wrap main-dash-info"
            >
              <div>
                <div className="d-flex align-items-center gap-2">
                  <FiberManualRecordIcon
                    sx={{ color: "#1E02AA", width: "12px", height: "12px" }}
                  />
                  <span
                    style={{
                      color: "#7E8799",
                      fontSize: "14px",
                      fontWeight: "500"
                    }}
                    className="fs-6  fw-medium title-text--1"
                  >
                    8,555 ر.س.
                  </span>
                </div>
                <h2
                  style={{
                    color: "#2B3674",
                    fontSize: "14px",
                    fontWeight: "700",
                    marginTop: "10px",
                    lineHeight: "0px"
                  }}
                  className="fs-6 fw-medium text-center pt-1 title-text--1"
                >
                  ارباح الاكاديمية
                </h2>
              </div>

              <div>
                <div className="d-flex align-items-center gap-2">
                  <FiberManualRecordIcon
                    sx={{ color: "#FF4747", width: "12px", height: "12px" }}
                  />
                  <span
                    style={{
                      color: "#7E8799",
                      fontSize: "14px",
                      fontWeight: "500"
                    }}
                    className="fs-6 fw-medium title-text--1"
                  >
                    2,000 ر.س.
                  </span>
                </div>
                <h2
                  style={{
                    color: "#2B3674",
                    fontSize: "14px",
                    fontWeight: "700",
                    marginTop: "10px",
                    lineHeight: "0px"
                  }}
                  className="fs-6  fw-medium pt-1 title-text--1"
                >
                  ارباح المسوّقين
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-2 g-3">
        <div className="col-lg-6">
          <div
            className={`${classes.ChartCard}`}
            style={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between"
            }}
          >
            <div className="d-flex align-items-center gap-3">
              <img src={prest} />
              <div>
                <p
                  style={{
                    margin: "0px",
                    fontSize: "18px",
                    color: "#7E8799",
                    marginBottom: "8px"
                  }}
                  className="fs-6 fw-medium title-text--1"
                >
                  دورة تدريبية قادمة
                </p>
                <h2
                  style={{
                    margin: "0px",
                    fontSize: "22px",
                    color: "#2B3674",
                    lineHeight: "1.2"
                  }}
                  className="fs-6 fw-bold title-text--1"
                >
                  عنوان الدورة
                </h2>
                <div className="d-flex gap-2 flex-wrap mt-3">
                  <div className="d-flex gap-1 ">
                    <CalenderIcon />
                    <span
                      style={{
                        color: "rgba(126, 135, 153, 0.75)",
                        fontSize: "16px"
                      }}
                      className="fs-6 fw-medium title-text--1"
                    >
                      Oct.20.2023
                    </span>
                  </div>
                  <div className="d-flex gap-1 ">
                    <StopWatchIcon />
                    <span
                      style={{
                        color: "rgba(126, 135, 153, 0.75)",
                        fontSize: "16px"
                      }}
                    >
                      5:00 م
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <h2
              style={{
                margin: "0px",
                fontSize: "22px",
                color: "#2B3674",
                lineHeight: "1.2",
                marginTop: "32px"
              }}
              className="fs-6 fw-bold title-text--1"
            >
              عنوان الفصل للدورة التدريبية
            </h2>
            <div>
              <div className="d-flex gap-3 my-3 flex-wrap">
                <div className="d-flex gap-2 align-items-center">
                  <PlayIcon />
                  <span
                    style={{
                      color: "#2B3674",
                      fontSize: "14px",
                      fontWeight: "600"
                    }}
                    className="title-text--1"
                  >
                    دورة تدريبية مباشرة
                  </span>
                </div>
                <div className="d-flex gap-2 align-items-center ">
                  <WatchIcon />
                  <span
                    style={{
                      color: "#2B3674",
                      fontSize: "18px",
                      fontWeight: "600"
                    }}
                    className="fs-6 fw-medium title-text--1"
                  >
                    120 دقيقة
                  </span>
                </div>
              </div>
            </div>
            <div className="button-content--1 mt-1 flex-wrap gap-3 d-flex justify-content-between">
              <img
                src={Assigned}
                style={{ minWidth: "141px" }}
                className="object-fit-contain"
              />
              <div className="addBtn">بدء الدورة</div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mt-3">
          <div className={`${classes.ChartCard}`}>
            <div className={`${classes.ChartCardHeader}`}>
              <div>
                <p className="fs-6 fw-medium title-text--1">احصائيات</p>
                <h2 className="fs-6 fw-medium title-text--1">
                  {" "}
                  الجلسات الحضورية{" "}
                </h2>
              </div>
            </div>
            <Bar options={options} data={data} />
          </div>
        </div>
      </div>
      <div className="row g-3 mt-3">
        <div className="col-lg-8 col-md-12">
          <div className={classes.HomeChart}>
            <div className={`${classes.ChartCardHeader}`}>
              <div>
                <h2 className="fs-6 fw-medium title-text--1"> اداء المحتوى </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className={`${classes.ChartCard} `} style={{ height: " 100%" }}>
            <div className="d-flex justify-content-between">
              <h2
                style={{ color: "#2B3674", fontSize: "16px", fontWeight: 700 }}
              >
                فريق سيان
              </h2>
              <div>
                <AddCircleIcon sx={{ color: "#0062FF" }} />
              </div>
            </div>
            <div>
              <EmployeeCard
                name={"نور مدحت"}
                title={"مدير المشروع"}
                img={useImage}
              />
              <EmployeeCard
                name={" مختار علي"}
                title={" المدير التقني"}
                img={useImage}
              />
              <EmployeeCard
                name={" حمدي محمد "}
                title={" مبرمج "}
                img={useImage}
              />
              <EmployeeCard
                name={"  عمر شكري "}
                title={" مبرمج "}
                img={useImage}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademyDashboard;
