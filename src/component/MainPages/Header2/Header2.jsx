

import classes from "./AcademyHeaderContainer.module.scss"
import NavBar from "./NavBar";

const Header2 = ({
    children,
    path,
    LayOut2,layOut3
}) => {
    return ( 
   <>
        <div className={classes.Container} >
            <NavBar  path={path}/>
            {children}
           
        </div>
 </>
     );
}
 
export default Header2;