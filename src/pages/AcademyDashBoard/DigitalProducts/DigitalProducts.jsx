import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

import AddCircleIcon from "@mui/icons-material/AddCircle";
import SearchAndShowBar from "../../../component/UI/SearchAndShowBar/SearchAndShowBar";
import { useEffect, useState } from "react";
import DigitalProductsCardContainer from "../../../component/DigitalProducts/DigitalProductsCard/DigitalProductsCardContainer";
import DigitalProductsTable from "../../../component/DigitalProducts/DigitalProductsTable/DigitalProductsTable";
import { motion, AnimatePresence } from "framer-motion";
import AreaChart from "../../../component/charts/doubleArea";
import SuccesModal from "../../../component/UI/SuccesModal/SuccesModal";
import DeleteModal from "../../../component/UI/DeleteModal/DeleteModal";
import axios from "axios";

import { Link } from "react-router-dom";
const DigitalProducts = () => {
  const [TableOrNot, setTableOrNot] = useState(false);
  const [checkedKeys, setCheckedKeys] = useState([]);
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(true);
  const [ShowDeleteModal, setDeleteModal] = useState(false);

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
    <div className="all-info-top-header main-info-top">
      <div className="TablePageHeader">
        <div className="HeaderContainer">
         <div className="info-content-header d-flex align-items-center justify-content-between gap-3 flex-wrap w-100">
           <div className="d-flex align-items-center name">
             <div className="icon">
               <PeopleAltIcon sx={{ color: "#A3AED0" }} />
             </div>
             <div style={{ color: "#7E8799" }}> المنتجات الرقمية </div>
           </div>
           <Link
             to={"/academy/DigitalProducts/AddNewProduct"}
             className="addBtn"
           >
             <AddCircleIcon />
             اضافة منتج جديد
           </Link>
         </div>
        </div>
      </div>
      <SearchAndShowBar
        checkedKeys={checkedKeys}
        data={data}
        setCheckedKeys={setCheckedKeys}
        setTableOrNot={setTableOrNot}
        ShowEditAndDelete={checkedKeys.length > 0 ? true : false}
        checkAllHandler={checkAllHandler}
        TableOrNot={TableOrNot}
        setDeleteModal={setDeleteModal}
      />

      <AnimatePresence mode="wait">
        {TableOrNot ? (
          <motion.div
            key="expanded-content"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 10, opacity: 0 }} // Exit animation for the first motion.div
            transition={{ duration: 0.2 }}
          >
            <DigitalProductsTable
              checkedKeys={checkedKeys}
              setDeleteModal={setDeleteModal}
              setCheckedKeys={setCheckedKeys}
              checkAllHandler={checkAllHandler}
              setData={setData}
            />
          </motion.div>
        ) : (
          <motion.div
            key="collapsed-content"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <>
              <DigitalProductsCardContainer
                setData={setData}
                checkedKeys={checkedKeys}
                setCheckedKeys={setCheckedKeys}
              />
            </>
          </motion.div>
        )}
      </AnimatePresence>
      {/* <SuccesModal show={showModal} setShow={setShowModal} /> */}
      <DeleteModal show={ShowDeleteModal} setShow={setDeleteModal} />
    </div>
  );
};

export default DigitalProducts;
