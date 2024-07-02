import MainHeader from "../../../component/MainPages/Header/Header";
import Style from "./home.module.scss";
import MainHomeBanner from "../../../assets/images/MainHomeBanner.png";
import Numbers from "../../../component/MainPages/Numbers/Numbers";
import SubjectSlider from "../../../component/MainPages/SubjectCard/subjectSlider";
import Footer from "../../../component/MainPages/Footer/Footer";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Slider from "@mui/material/Slider";
import SubjectCard from "../../../component/MainPages/SubjectCard/SubjectCard";
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `none`,

  borderRadius: "20px",

  "&:not(:last-child)": {
    borderBottom: 0
  },
  "&::before": {
    display: "none"
  }
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ExpandMoreIcon sx={{ fontSize: "2rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "white",
  border: "none",
  borderTop: "1px solid #EDEFF2",
  marginTop: "10px",
  paddingTop: "10px",
  fontSize: "22px",
  color: "#292D32",
  fontWeight: "800",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(180deg)"
  },
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded .IconCricle": {
    backgroundColor: "#0062FF !important",
    color: "white !important"
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1)
  }
}));
function valuetext(value) {
  return `${value}°C`;
}

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2)
}));
const Home = () => {
  const [active, setActive] = useState(0);
  const [expanded, setExpanded] = useState([true, true, true, true]);

  const handleChange = (i) => {
    const temp = [...expanded];
    temp[i] = !expanded[i];
    setExpanded(temp);
  };
  const [value, setValue] = useState([20, 37]);

  const handleChangeValue = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };

  return (
    <div className="header-bg" style={{ backgroundColor: "white" }}>
      <MainHeader>
        <div className={`${Style.Container} container-header pt-4`}>
          <div className="row align-items-center ">
            <div className="col-lg-5 col-12">
              <div data-aos="fade-left" className={`${Style.BannerText} banner-text-header`}>
                <h1 className="title-header">
                  تعليم يفتح افاق  المستقبل{" "}
                </h1>
                <p>
                  نعمل لبناء تقديم افضل تعليمية, سيان هي مستقبل التعليم تعليمية,
                  سيان هي مستقبل التعليم.
                </p>
                <div className={Style.BtnContainer}>
                  <div className={`${Style.Primary} button-header`}>انضم الان </div>
                </div>
              </div>
            </div>
            <div data-aos="fade-up" className="col-lg-7 col-12">
              <img
                className={`${Style.AnimatedImage} image-anim`}
                style={{ width: "100%" }}
                src={MainHomeBanner}
              />
            </div>
          </div>
        </div>
      </MainHeader>
      <div className="container">
        <Numbers />
      </div>
      <SubjectSlider />
      <div className={Style.AllSubject}>
        <div className="CustomContainer">
          <div
            className={`${Style.SubjectHeader} d-flex  align-items-center gap-3 flex-wrap `}
          >
            <div className="d-flex align-items-center flex-wrap gap-3">
              <h1 className="fs-6 fw-bold  title-text--1">كل المواد التدريبية</h1>
              <div className="searchBar">
                <input type="text" placeholder="ابحث عن ..." />
                <div className="iconWrapper">
                  <SearchIcon />
                </div>
              </div>
            </div>
            <div
              className={`${Style.Filters} d-flex  align-items-center flex-wrap gap-3`}
            >
              <div
                className={active == 0 ? Style.Active : ""}
                onClick={() => setActive(0)}
              >
                الاكثر تسجيلاً
              </div>
              <div
                className={active == 1 ? Style.Active : ""}
                onClick={() => setActive(1)}
              >
                الاعلى تقييمًا
              </div>
              <div
                className={active == 2 ? Style.Active : ""}
                onClick={() => setActive(2)}
              >
                الاحدث
              </div>
            </div>
          </div>
          <div className="row g-3">
            <div className="col-12 col-md-12 col-lg-3">
              <div className={Style.SideBar}>
                <h2 className="fs-6 fw-bold  title-text--1">التصفية</h2>
                <div>
                  <Accordion
                    expanded={expanded[0]}
                    onChange={() => handleChange(0)}
                  >
                    <AccordionSummary
                      aria-controls="panel1d-content"
                      id="panel1d-header"
                    >
                      <p
                        style={{
                          fontSize: "16px",
                          color: "#292D32",
                          fontWeight: "800"
                        }}
                      >
                        المجال
                      </p>
                    </AccordionSummary>
                    <AccordionDetails>
                      <p
                        style={{
                          fontSize: "16px",

                          fontWeight: "600"
                        }}
                      >
                        مجال 1
                      </p>
                      <p
                        style={{
                          fontSize: "16px",

                          fontWeight: "600"
                        }}
                      >
                        مجال 1
                      </p>
                      <p
                        style={{
                          fontSize: "16px",

                          fontWeight: "600"
                        }}
                      >
                        مجال 1
                      </p>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    expanded={expanded[1]}
                    onChange={() => handleChange(1)}
                  >
                    <AccordionSummary
                      aria-controls="panel2d-content"
                      id="panel2d-header"
                    >
                      <p
                        style={{
                          fontSize: "16px",
                          color: "#292D32",
                          fontWeight: "800"
                        }}
                      >
                        التصنيف
                      </p>
                    </AccordionSummary>
                    <AccordionDetails>
                      <div>
                        <div className="form-check d-flex align-items-center mt-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault"
                            style={{
                              fontSize: "16px",
                              color: "#292D32",
                              fontWeight: "800"
                            }}
                          >
                            الفئة 1
                          </label>
                        </div>
                        <div className="form-check d-flex align-items-center mt-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault"
                            style={{
                              fontSize: "16px",
                              color: "#292D32",
                              fontWeight: "800"
                            }}
                          >
                            الفئة 1
                          </label>
                        </div>
                        <div className="form-check d-flex align-items-center mt-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault"
                            style={{
                              fontSize: "16px",
                              color: "#292D32",
                              fontWeight: "800"
                            }}
                          >
                            الفئة 1
                          </label>
                        </div>
                      </div>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    expanded={expanded[2]}
                    onChange={() => handleChange(2)}
                  >
                    <AccordionSummary
                      aria-controls="panel3d-content"
                      id="panel3d-header"
                    >
                      <p
                        style={{
                          fontSize: "16px",
                          color: "#292D32",
                          fontWeight: "800"
                        }}
                      >
                        السعر
                      </p>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Slider
                        getAriaLabel={() => "Temperature range"}
                        value={value}
                        onChange={handleChangeValue}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                      />
                      <div className="d-flex gap-2">
                        <div>
                          <p
                            style={{
                              fontSize: "16px",
                              color: "#292D32",
                              fontWeight: "800"
                            }}
                          >
                            من
                          </p>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="0"
                            value={value[0]}
                            style={{ width: "100%" }}
                            onChange={(e) =>
                              setValue([e.target.value, value[1]])
                            }
                          />
                        </div>
                        <div>
                          <p
                            style={{
                              fontSize: "16px",
                              color: "#292D32",
                              fontWeight: "800"
                            }}
                          >
                            الي
                          </p>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="0"
                            value={value[1]}
                            onChange={(e) =>
                              setValue([value[0], e.target.value])
                            }
                            style={{ width: "100%" }}
                          />
                        </div>
                      </div>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    expanded={expanded[3]}
                    onChange={() => handleChange(3)}
                  >
                    <AccordionSummary
                      aria-controls="panel1d-content"
                      id="panel1d-header"
                    >
                      <p
                        style={{
                          fontSize: "16px",
                          color: "#292D32",
                          fontWeight: "800"
                        }}
                      >
                        نوع المادة التعليمية
                      </p>
                    </AccordionSummary>
                    <AccordionDetails>
                      <div>
                        <div className="form-check d-flex align-items-center mt-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault"
                            style={{
                              fontSize: "16px",
                              color: "#292D32",
                              fontWeight: "800"
                            }}
                          >
                            تفاعلية
                          </label>
                        </div>
                        <div className="form-check d-flex align-items-center mt-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault"
                            style={{
                              fontSize: "16px",
                              color: "#292D32",
                              fontWeight: "800"
                            }}
                          >
                            مباشرة
                          </label>
                        </div>
                        <div className="form-check d-flex align-items-center mt-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault"
                            style={{
                              fontSize: "16px",
                              color: "#292D32",
                              fontWeight: "800"
                            }}
                          >
                            حضورية
                          </label>
                        </div>
                      </div>
                    </AccordionDetails>
                  </Accordion>
                </div>
                <div className="mt-2">
                  <div className={Style.SubmitBtn}>تطبيق</div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-9">
              <div className="row g-3">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
                  <div className="col-12  col-md-6 col-xl-4">
                    <SubjectCard />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
