import React from "react";
import { useSelector } from "react-redux";
  const Counter=()=>{


    const count= useSelector((state)=> state.counter.value)
    return(
      <div>
          <butoon>
            increment
          </butoon>
          <br></br>
          <br></br>
          <div>{count}</div>
         <br></br>
          <br></br>
          <button>decrement</button>
          
      </div>
    )
  }

export default Counter;