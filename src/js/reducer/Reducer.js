import React from 'react'
import {
    ADD_TASK,
    DELETE_TASK,
    COMPLETE_TASK,
    EDIT_TASK,
} from '../const/actionTypes';

const initialState={
    listItem:[{task:'eat',isDone:false,id:Math.random()}]
}


const Reducer=(state=initialState,{type,payload})=> {
   switch (type) {
       case ADD_TASK:
           
       return{...state,listItem:[...state.listItem,payload]}
    
       case DELETE_TASK:
           
       return{...state,
        listItem:state.listItem.filter(item=> item.id!==payload)}

        case COMPLETE_TASK:
           
            return{...state,
             listItem:state.listItem.map(item=> item.id==payload
                ?{...item,isDone:!item.isDone}
                :item)}
    
             case EDIT_TASK:
           
                return{...state,
                 listItem:state.listItem.map(item=> item.id===payload.id
                    ?{...item,task:payload.taskModified}
                    :item)}
       default:
          return state;;
   } 




   
}

export default Reducer
