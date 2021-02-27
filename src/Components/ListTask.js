import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { completeTask, deleteTask } from '../js/action';
import EditTask from './EditTask';

function ListTask({listItem}) {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [id, setId] = useState();
    const handleClose = () => setShow(false);
    const handleShow = (id) => {
        setShow(true);
        setId(id);
    }
    
    return (
        <div className='element'>
            {listItem.map(item=><div key={item.id}> 
                
                <span className={item.isDone ? 'lineTh' : "text" }>{item.task}</span>
                <button onClick={()=>dispatch(deleteTask(item.id))}>Delete</button>
                <button onClick={()=>dispatch(completeTask(item.id))}>
                    {item.isDone ? 'Undo':'Complete'}
                </button>
                <button onClick={()=>handleShow(item.id)}>Edit</button>
                
                </div>)

            }
            <EditTask show={show} handleClose={handleClose} id={id}/>
        </div>
    )
}

export default ListTask
