import React from 'react'

const ToDo = (props) => {
//    const removeLi=(i)=>{

//     }

  return (
    <div>
        {props.item}
        <button onClick={()=>props.onSelect(props.item)}>X</button>
    </div>
  )
}

export default ToDo