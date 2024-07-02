import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `none`,
  boxShadow: "0px 0px 25px 0px rgba(0, 60, 86, 0.05)",
  marginBottom: "20px",
  padding: "30px",
  borderRadius: "20px",

  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <div
        className="IconCricle"
        style={{
          borderRadius: "50%",
          width: "35px",
          height: "35px",
          backgroundColor: "#F7F7FF",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ExpandMoreIcon sx={{ fontSize: "2rem" }} />
      </div>
    }
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "white",
  border: "none",
  fontSize: "22px",
  color: "#292D32",
  fontWeight: "800",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(180deg)",
  },
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded .IconCricle": {
    backgroundColor: "#0062FF !important",
    color: "white !important",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));
const FAQ = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className="CustomContainer" style={{marginTop:'100px'}}>
      <div className="row">
        <div className="col-lg-4 col-md-12">
          <h3
            style={{
              fontSize: "60px",
              fontWeight: "700",
              color: "#272727",
              lineHeight: "60px",
            }}
            className="smallText"
          >
            الأسئلة 
            الشائعة <span style={{ color: "#0062FF" }}>؟</span>
          </h3>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="col-lg-8 col-md-12"
        >
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <p
                style={{
                  fontSize: "22px",
                  color: "#292D32",
                  fontWeight: "800",
                }}
                className="fs-6 fw-bold  title-text--1"
              >
                ما هي مجموعة أحمد باشمّاخ لخدمات الأعمال؟
              </p>
            </AccordionSummary>
            <AccordionDetails>
              <p
                style={{
                  fontSize: "18px",
                  color: "#585C61",
                  fontWeight: "400",
                }}
                className="fs-6 fw-medium text-content--1"
              >
                هي مجموعة سعودية تأسست عام 1990م (1411هـ)، تتصدر مجال ريادة
                الأعمال وتأسيس الشركات، وإدارة الموارد البشرية، ولها خبرة في هذه
                المجالات تزيد عن ثلاثين عاماً، لهذا يثق الكثير من العملاء من
                جميع أنحاء المملكة العربية السعودية بهم وبالعمل معهم.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              aria-controls="panel2d-content"
              id="panel2d-header"
            >
              <p
                style={{
                  fontSize: "22px",
                  color: "#292D32",
                  fontWeight: "800",
                }}
                className="fs-6 fw-bold  title-text--1"
              >
                ما هي مجموعة أحمد باشمّاخ لخدمات الأعمال؟
              </p>
            </AccordionSummary>
            <AccordionDetails>
              <p
                style={{
                  fontSize: "18px",
                  color: "#585C61",
                  fontWeight: "400",
                }}
                className="fs-6 fw-medium text-content--1"
              >
                هي مجموعة سعودية تأسست عام 1990م (1411هـ)، تتصدر مجال ريادة
                الأعمال وتأسيس الشركات، وإدارة الموارد البشرية، ولها خبرة في هذه
                المجالات تزيد عن ثلاثين عاماً، لهذا يثق الكثير من العملاء من
                جميع أنحاء المملكة العربية السعودية بهم وبالعمل معهم.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <p
                style={{
                  fontSize: "22px",
                  color: "#292D32",
                  fontWeight: "800",
                }}
                className="fs-6 fw-bold  title-text--1"

              >
                ما هي مجموعة أحمد باشمّاخ لخدمات الأعمال؟
              </p>
            </AccordionSummary>
            <AccordionDetails>
              <p
                style={{
                  fontSize: "18px",
                  color: "#585C61",
                  fontWeight: "400",
                }}
                className="fs-6 fw-medium text-content--1"
              >
                هي مجموعة سعودية تأسست عام 1990م (1411هـ)، تتصدر مجال ريادة
                الأعمال وتأسيس الشركات، وإدارة الموارد البشرية، ولها خبرة في هذه
                المجالات تزيد عن ثلاثين عاماً، لهذا يثق الكثير من العملاء من
                جميع أنحاء المملكة العربية السعودية بهم وبالعمل معهم.
              </p>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
