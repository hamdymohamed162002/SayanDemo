import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

import AddCircleIcon from "@mui/icons-material/AddCircle";
import SearchAndShowBar from "../../../component/UI/SearchAndShowBar/SearchAndShowBar";
import { useState } from "react";
import DigitalProductsCardContainer from "../../../component/DigitalProducts/DigitalProductsCard/DigitalProductsCardContainer";
import DigitalProductsTable from "../../../component/DigitalProducts/DigitalProductsTable/DigitalProductsTable";
import { motion, AnimatePresence } from "framer-motion";
import PruchaseTable from "./PruchaseTable";

const Pruchases = () => {
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
    <div className="all-info-top-header main-info-top">
      <div className="TablePageHeader">
        <div className="HeaderContainer">
        <div className="info-content-header d-flex align-items-center justify-content-between gap-3 flex-wrap w-100">
            <div className="d-flex align-items-center name">
              <div className="icon">
                <PeopleAltIcon sx={{ color: "#A3AED0" }} />
              </div>
              <div style={{ color: "#7E8799" }}> المشتريات </div>
            </div>
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
        showNoTable
        notAdmin
      />

      <AnimatePresence mode="wait">
        <motion.div
          key="expanded-content"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 10, opacity: 0 }} // Exit animation for the first motion.div
          transition={{ duration: 0.2 }}
        >
          <PruchaseTable
            checkedKeys={checkedKeys}
            setCheckedKeys={setCheckedKeys}
            checkAllHandler={checkAllHandler}
            setData={setData}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Pruchases;
