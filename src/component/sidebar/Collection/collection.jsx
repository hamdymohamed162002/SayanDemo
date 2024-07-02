import { useEffect, useRef, useState } from "react";
import classes from "./collection.module.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
const Collection = ({ mainIcon, mainTitle, children, acitve, pos, nested }) => {
  const [Height, setHeight] = useState(false);
  const x = useRef();
  useEffect(() => {
    console.log(acitve);
  }, []);
  //collection is used in sidebar and get childern (subicon ) from it
  return (
    <>
      <div
        className={`${classes.mainIcon} ${acitve ? classes.active : ""}`}
        style={nested && { padding: "16px", fontSize: "14px" }}
        onClick={(e) => {
          setHeight(!Height);
        }}
      >
        <div>
          {mainIcon}
          <span className="title-dash-link" style={{ fontWeight: "600" }}>{mainTitle}</span>
        </div>
        <div className={classes.arrow} ref={x}>
          <ArrowBackIosIcon />
        </div>
      </div>
      <div
        className={classes.smallCollection}
        style={Height ? { maxHeight: "800px", marginBottom: "10px" } : null}
      >
        {children}
      </div>
    </>
  );
};

export default Collection;
