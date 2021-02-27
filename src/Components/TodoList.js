import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Addtask from './Addtask'
import ListTask from './ListTask'

const TodoList = () => {
    const listItem = useSelector(state => state.listItem)
    const [filter, setFilter] = useState(false)
    const handleFilter=()=>{
        setFilter(!filter)

    }
    return (
        <div>
           <Addtask handleFilter={handleFilter} filter={filter} /> 
           <ListTask listItem={filter?listItem.filter(el=>el.isDone):listItem} />
        </div>
    )
}

export default TodoList;
