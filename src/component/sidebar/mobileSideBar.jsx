import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';

import Offcanvas from 'react-bootstrap/Offcanvas';
import SideBar from './sidebar';

function MobileSideBar({show,setShow}) {


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
  

   

      <Offcanvas show={show} placement={'start'} onHide={handleClose} >
    
        <Offcanvas.Body>
         <SideBar mobile setShow={setShow} />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default MobileSideBar;