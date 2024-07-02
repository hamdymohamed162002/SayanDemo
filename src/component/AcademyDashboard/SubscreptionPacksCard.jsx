import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useNavigate } from "react-router-dom";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const AcademySubscreptionPacksCard = () => {
  const router = useNavigate();
  return (
    <div className="CustomCard main-custom-card">
      <div className="row g-3 m-auto  justify-content-center">
        <div className="col-lg-6 col-md-12 mt-3">
          <div
            style={{
              border: " 1px solid #EDEFF2",
              borderRadius: "16px",
              padding: "36px 30px"
            }}
            className="card-one---1"
          >
            <div>
              <h2
                style={{
                  fontSize: "24px",
                  color: "#2B3674",
                  fontWeight: "500",
                  textAlign: "center"
                }}
                className="fs-6 fw-medium text-content--1"
              >
                الأساسية
              </h2>
              <h2
                style={{
                  fontSize: "30px",
                  color: "#2B3674",
                  fontWeight: "600",
                  textAlign: "center"
                }}
                className="fs-5 fw-bold title-text--1"
              >
                90.00 ر.س.
              </h2>
            </div>
            <div style={{ marginTop: "70px" }}>
              <div
                style={{
                  display: "flex",
                  gap: "16px",
                  alignItems: "center",
                  marginTop: "24px"
                }}
              >
                <FiberManualRecordIcon
                  sx={{ color: "#0E85FF", width: "18px", height: "18px" }}
                />
                <span style={{ color: "#2B3674", fontSize: "20px" }}>
                  الميزة
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "16px",
                  alignItems: "center",
                  marginTop: "24px"
                }}
              >
                <FiberManualRecordIcon
                  sx={{ color: "#0E85FF", width: "18px", height: "18px" }}
                />
                <span style={{ color: "#2B3674", fontSize: "20px" }}>
                  الميزة
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "16px",
                  alignItems: "center",
                  marginTop: "24px"
                }}
              >
                <FiberManualRecordIcon
                  sx={{ color: "#0E85FF", width: "18px", height: "18px" }}
                />
                <span style={{ color: "#2B3674", fontSize: "20px" }}>
                  الميزة
                </span>
              </div>
            </div>
            <div style={{ marginTop: "70px" }}>
              <div
                className="updateBtn"
                style={{
                  width: "100%",
                  borderRadius: "8px",
                  padding: "16px",

                  textAlign: "center"
                }}
              >
                تحديث المعلومات
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-6 col-md-12 mt-3">
          <div
            style={{
              border: " 1px solid #EDEFF2",
              borderRadius: "16px",
              padding: "36px 30px"
            }}
            className="card-one---1"
          >
            <div>
              <h2
                style={{
                  fontSize: "24px",
                  color: "#2B3674",
                  fontWeight: "500",
                  textAlign: "center"
                }}
                className="fs-6 fw-medium text-content--1"
              >
                الأساسية
              </h2>
              <h2
                style={{
                  fontSize: "30px",
                  color: "#2B3674",
                  fontWeight: "600",
                  textAlign: "center"
                }}
                className="fs-5 fw-bold title-text--1"
              >
                90.00 ر.س.
              </h2>
            </div>
            <div style={{ marginTop: "70px" }}>
              <div
                style={{
                  display: "flex",
                  gap: "16px",
                  alignItems: "center",
                  marginTop: "24px"
                }}
              >
                <FiberManualRecordIcon
                  sx={{ color: "#0E85FF", width: "18px", height: "18px" }}
                />
                <span style={{ color: "#2B3674", fontSize: "20px" }}>
                  الميزة
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "16px",
                  alignItems: "center",
                  marginTop: "24px"
                }}
              >
                <FiberManualRecordIcon
                  sx={{ color: "#0E85FF", width: "18px", height: "18px" }}
                />
                <span style={{ color: "#2B3674", fontSize: "20px" }}>
                  الميزة
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "16px",
                  alignItems: "center",
                  marginTop: "24px"
                }}
              >
                <FiberManualRecordIcon
                  sx={{ color: "#0E85FF", width: "18px", height: "18px" }}
                />
                <span style={{ color: "#2B3674", fontSize: "20px" }}>
                  الميزة
                </span>
              </div>
            </div>
            <div style={{ marginTop: "70px" }}>
              <div
                className="updateBtn"
                style={{
                  width: "100%",
                  borderRadius: "8px",
                  padding: "16px",

                  textAlign: "center"
                }}
              >
                تحديث المعلومات
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademySubscreptionPacksCard;
