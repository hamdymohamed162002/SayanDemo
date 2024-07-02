

import classes from "./AcademyHeaderContainer.module.scss"
import NavBar from "./NavBar";

const MainHeader = ({
    children,
    path,
    LayOut2,layOut3
}) => {
    return ( 
   <>
        <div className={`all-container-header ${classes.Container}`} >
            <NavBar  path={path}/>
            {children}
           
        </div>
 </>
     );
}
 
export default MainHeader;