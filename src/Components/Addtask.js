import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import {addTask} from '../js/action/index'
function Addtask({filter,handleFilter}) {

    const [task, setTask] = useState('');
     const dispatch = useDispatch();

    const handelChange=(e)=>{
    setTask(e.target.value);
    };

    const addNewTask=()=>{
        if(task){
         dispatch(addTask({task:task,isDone:false,id:Math.random()}))
         setTask('');
        } else {
            alert('please enter a valid task !')
        }
    }

    return (
        <div className='todo_list'>
           <h2>LIST OF WHAT WE SHOULD DO </h2> 
           <input type='text'
            placeholder="enter a task "  
            value={task}
            onChange={handelChange} />
           <button onClick={addNewTask}>ADD</button>
           <button onClick={handleFilter}>{filter?'Done':'ALL'}</button>

        </div>
    )
}

export default Addtask
