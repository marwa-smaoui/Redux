import React, { useState } from 'react'
import {Form,Modal,Button} from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { editTask } from '../js/action';


function EditTask({show,handleClose,id}) {
   const dispatch = useDispatch();
  const [taskModified, setTaskModified] = useState('');
  const handelChange=(e)=>{
    setTaskModified(e.target.value);
  }
  const edit=(id)=>{
     dispatch(editTask({id:id,taskModified:taskModified})) ;
     
  }
    return (
        <div>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>EDIT TASK</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form.Control type="text" 
                placeholder="enter a new task " 
                onChange={handelChange} />
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" 
                onClick={()=>{handleClose();edit(id);}}>
                   EDIT
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default EditTask
