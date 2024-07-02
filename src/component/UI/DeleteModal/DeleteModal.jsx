import Modal from "react-bootstrap/Modal";
import SuccesGif from "../../../assets/images/succes.gif";
import { useEffect } from "react";
import DeleteConfirmation from "../../../assets/icons/DeleteConfrimation";
import { toast } from "react-toastify";
const DeleteModal = ({ show, setShow, onDeleteHandler }) => {
  const OnHide = () => {
    setShow(false);
  };

  return (
    <Modal centered show={show} onHide={OnHide} className="modal-student">
      <Modal.Body style={{ direction: "rtl" }}>
        <div
          className="d-flex gap-1 align-items-center"
          style={{ direction: "rtl" }}
        >
          <DeleteConfirmation />
          <p
            className="m-0"
            style={{ fontSize: "22px", color: "#2B3674", fontWeight: "bold" }}
          >
            ازالة العنصر
          </p>
        </div>
        <div style={{ marginTop: "32px", fontSize: "16px", color: "#7E8799" }}>
          هل أنت متأكد من ازالة العنصر (مراحل البحث العلمي)؟
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "22px",
            marginTop: "32px"
          }}
        >
          <button
            className="btn btn-danger"
            onClick={() => {
              OnHide();
              if (onDeleteHandler) {
                onDeleteHandler();
              } else {
                toast.success("   تم حذف العنصر", {
                  position: "top-left",
                  autoClose: 3000,
                  hideProgressBar: true,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "dark"
                });
              }
            }}
          >
            ازالة
          </button>
          <span
            style={{ color: "#7E8799", fontSize: "600", cursor: "pointer" }}
            onClick={OnHide}
          >
            {" "}
            الرجوع
          </span>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default DeleteModal;
