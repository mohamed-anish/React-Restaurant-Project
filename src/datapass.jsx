import React from "react";
// import Signup from "./Signup";
import { useLocation } from "react-router-dom";

export default function Datapass(){
 const location =useLocation()
 console.log(location)
    // const [sname,setSname] =React.useState("")
    // const datum =(pass)=>{
    //     // <h1>hello +{pass}+</h1>
    //     setSname(pass)
        // console.log(pass)
    // }
    return(
        <>
        {/* <h1>hello {sname}</h1> */}
        {/* <Signup getData={datum}/> */}
        <h1>Name:
            {/* {location.state.name} */}
            </h1>
        <h1>DOB:
            {/* {location.state.dob} */}
        </h1>
        <h1>Place:
            {/* {location.state.place} */}
        </h1>   


        </>
    )
}