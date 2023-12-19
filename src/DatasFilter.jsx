import { useEffect, useState } from "react"



export default function DatasFilter(){

    const [name,setName] = useState([])

    const [filtername,setFiltername] = useState("")

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=>(res.json()))
        .then((data)=>(setName(data)))
        console.log(name)
    
    },[name])

    const dataChange = (e)=>{
        setFiltername(e.target.value)
    }

    return(
        <div>
            <input type="text" value={filtername} onChange={dataChange}></input>
            <br></br>

            {filtername.length > 0 && name.map((obj)=>{
                return(
                    <>
                    <div>{obj.name.toLowerCase().includes(filtername.toLowerCase()) ? obj.name : ""}</div>
                    </>
                )
            })
            }
        </div>
    )
}