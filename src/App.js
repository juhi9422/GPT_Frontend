import { useState } from "react";
import "./App.css";
import axios from "axios";
// import { useState } from "react";
// import ToDo from "./ToDo";

// function App() {
//   const [list, setList] = useState("");
//   let [add, setAdd] = useState([]);

//   const handleAdd = (e) => {
//     setList(e.target.value);
//   };

//   const handleclick = (e) => {
//     console.log("clicked")
//     setAdd((prev) => {return [...prev, list]});
//   };

//   const removeLi=(i)=>{
//     setAdd(add.filter((li)=>i!== li)
//     );
    
//   }

//   return (
//     <div className="App">
//       <div className="todo">
//         <h1>TO-DO list </h1>
//         <div className="di">
//           <input type="text" className="todoinput" onChange={handleAdd} />
//           <button type="button" className="button" onClick={handleclick}>
//             Add
//           </button>
//         </div>
//           {add.map((item, index) => {
//             return (
//                 <div>
//                   {/* {i}
//                   <button onClick={()=>removeLi(i)}>X</button> */}
//                   <ToDo item={item} i={index} onSelect={removeLi}/>
//                 </div>
//             );
//           })}
      
//       </div>
//     </div>
//   );
// }

// export default App;



// const App=()=>{
//   const [s,setS]=useState();
//   const message={message :"Hello"};
  
//   const getMessage=async()=>{
//     await axios.post("http://localhost:8000/completion",message).then(response=>{
//       console.log(response)
//       setS(response.data);
//     })
//   }
//   return (
//     <>
//     <input />
  
//     <button onClick={getMessage}>Get Response</button>
//     {s}
    
//     </>
//   )

// }


import React from 'react'
import HeaderDash from "./Components/HeaderDash";

const App = () => {

  return (
   <HeaderDash/>

  )
}



export default App;
