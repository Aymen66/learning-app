// import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import React from 'react';
function getValue(){
    const storeValues = localStorage.getItem("closeMode")
    if(!storeValues)return []
    return JSON.parse(storeValues)
}
function StaticExample() {
    const [closeMode, setCloseMode]=React.useState(getValue)
    const [isHide, setIsHide] = React.useState(true);
    // function close(){
    //     setCloseMode(function(prev){
    //         if(!prev){
    //           return true
    //         }else{
    //           return false
    //         }
    //       })
    // }
    const styles ={
        display: closeMode ? "block " : "none"
     }
     setTimeout(() => setIsHide(false), 3000);
     setTimeout(() => {
        setCloseMode(false);
                }, 6000);



         React.useEffect(() => {
            localStorage.setItem("closeMode", closeMode)
          }, [closeMode])
  return (
    <div
      style={styles}
      className="modalDiv"

    >
      {!isHide ? <Modal.Dialog 
      className="modalShow"

      >
          <Modal.Title>Update</Modal.Title>

        <Modal.Body>
          <p>The app has been updated</p>
        </Modal.Body>

      </Modal.Dialog> : null}
    </div>
  );
}

export default StaticExample;

{/* <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Update</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>The app has been updated</p>
        </Modal.Body>

        <Modal.Footer>
          <Button  variant="secondary">Close</Button>
        </Modal.Footer>
      </Modal.Dialog> */}