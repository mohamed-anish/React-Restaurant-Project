import React from "react"
import { useNavigate } from "react-router-dom"

export default function Crud(){
    const [data,setData] = React.useState([])
    const navigate =useNavigate()

    const [text,setText] = React.useState({
        id: "",
        name:"",
        dob:"",
        place:""
    })
    // console.log(text)

    const [isEdit,setIsEdit] = React.useState({name:"",condition:false})


    const handleClick = ()=>{
        if(text.name !==0 && text.dob !==0 && text.place !==0 ){
            if(isEdit.condition){
                const edited = data.map((et) => {
                    if(et.name === isEdit.name){
                        return{...et,name:text.name,dob:text.dob,place:text.place}
                    }
                    else{ return et}
                })
                // alert("Edit is done")
                setData(edited)
                setIsEdit({name:"",condition:false})
                setText({name:"",dob:"",place:""})

            }   
            else{
                const check = [...data]
                check.push(text)
                setData(check)
                setText({name:"",dob:"",place:""})
                // console.log(check)  
    
            } 
        }
        else{alert("Every Inputs Must Values")}    
    
    }

    const handleEdit = (ed)=>{
        const value = data.filter((et)=>et.name ===ed)[0];
        setText({name:value.name,dob:value.dob,place:value.place})
        setIsEdit({name:value.name,condition:true})
    }

    const handleDelete = (del)=>{
        setData(data.filter((re)=>re.name !==del))
    }
    return(
        <div>
            <input type="text" onChange={(e)=>setText({...text,name:e.target.value})} value={text.name}/>
            <br />
            <input type="text" onChange={(e)=>setText({...text,dob:e.target.value})} value={text.dob}/>
            <br />
            <input type="text"onChange={(e)=>setText({...text,place:e.target.value})} value={text.place}/>
            <button type="submit" onClick={handleClick}>{isEdit.condition ? "EDIT" : "ADD"}</button>

            <th>Name</th>
            <th>DOB</th>
            <th>Place</th> 

            {data.map((obj,index)=>{
                return(
                    <>
                    <tr>
                        <td>{index+1}</td>
                        <td onClick={()=>{navigate('/datapass',{state:obj})}}>{obj.name}</td>
                        <td>{obj.dob}</td>
                        <td>{obj.place}</td>
                        <td><span style={{color:"green",cursor:"pointer"}} onClick={()=>{handleEdit(obj.name)}}>Edit</span></td>
                        <td><span style={{color:"red",cursor:"pointer"}} onClick={()=>handleDelete(obj.name)}>Delete</span></td>
                    </tr>
                    
                    </>               
        
                )
            })}
        </div>
    )
}