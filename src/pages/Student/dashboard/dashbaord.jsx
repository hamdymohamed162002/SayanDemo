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
import { Line } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";
import EmployeeCard from "../../../component/dashboard/emploeeCard/EmployeeCard";
import FirstCard from "../../../component/dashboard/firstCard/firstCard";
import { Dropdown } from "rsuite";
import prest from "../../../assets/icons/presntation.svg";
import Assigned from "../../../assets/icons/Assigned.png";
import MixedArea from "../../../component/charts/mixedArea";

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
const StudentDashboard = () => {
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
        backgroundColor: "#A290FF",
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
        backgroundColor: ["#4BE6C1", "#E0C6FD", "#C6D2FD", "#4BD3E6"],
        borderColor: ["#4BE6C1", "#E0C6FD", "#C6D2FD", "#4BD3E6"],
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
      arc: {
        spacing: 30,
        borderRadius: 15 // Adjust the border radius as needed
      },
      responsive: true
    }
  };
  return (
    <div>
      <StudentDashboardHeader />
      <div className="row mt-5">
        <div className="col-lg-6 mt-3">
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
                >
                  عنوان الدورة
                </h2>
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
            >
              عنوان الفصل للدورة التدريبية
            </h2>
            <div className="mt-5 d-flex justify-content-between">
              <img src={Assigned} className="object-fit-contain" />
              <div className="addBtn">الدخول</div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mt-3">
          <div className={`${classes.ChartCard} card-detials-chart`}>
            <div className={`${classes.ChartCardHeader} card-detials-chart-info`}>
              <div>
                <p>احصائيات</p>
                <h2> برنامج التسويق بالعمولة </h2>
              </div>
            </div>
            <Bar options={options} data={data} />
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-lg-7">
          <div className={`${classes.ChartCard}`}>
            <div
              className={`${classes.ChartCardHeader} b-0 card-chart--1`}
              style={{ border: "none" }}
            >
              <div>
                <p style={{ fontSize: "18px" }}>باقات الاشتراك</p>
                <h2 className="d-flex align-items-end mt-2">
                  {" "}
                  12,563 <p> مشترك</p>{" "}
                </h2>
              </div>
              <div className="">
                <h2 style={{ fontSize: "34px" }}> 5,773</h2>
                <p style={{ fontSize: "20px" }}>زائر/خلال هذا الاسبوع</p>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              }}
            >
              <div className=" w-100">
                <MixedArea />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
