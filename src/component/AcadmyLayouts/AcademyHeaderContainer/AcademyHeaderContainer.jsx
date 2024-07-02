import AcademyLayoutNavbar from "../AcademyLayoutNavbar/AcademyLayoutNavbar";
import classes from "./AcademyHeaderContainer.module.scss";
import Divider from "./dvider";
const AcademyHeaderContainer = ({ children, path, LayOut2, layOut3 }) => {
  
  return (
    <>
      <div
        className={classes.Container}
        style={LayOut2 && { backgroundColor: "white" }}
      >
        <AcademyLayoutNavbar path={path} />
        {children}
      </div>
      {!LayOut2 && !layOut3 && <Divider />}{" "}
    </>
  );
};

export default AcademyHeaderContainer;
