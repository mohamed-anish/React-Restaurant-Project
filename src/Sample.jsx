import { useState } from 'react';
import { Link } from 'react-router-dom';
import Crud from './crud';



export default function Sample(){


    const [inputs,setInputs] = useState({
        name:"",
        dob:"",
        place:"",
    })

    const [datas,setDatas] = useState([])

    console.log(datas)

    const handleChange = (e)=>{
        const name=e.target.name;
        const value=e.target.value;
        console.log(inputs)
        setInputs((item)=>{
            return{...item,[name]:value}
        })
    }

    return(
        <div>
             <Link to="/sample"> to sample</Link>
          <Link to="/App"> to app</Link>
          <Link to="/menu"> to Menu</Link>
            hello foodhub
            <br></br>
            <form onSubmit={(event)=>{
            event.preventDefault();
            // const add = [...datas]
            // add.push(inputs)
            setDatas(inputs)
            setInputs({...inputs,name:"",dob:"",place:""})
            }}>
            <input type='text' name="name" onChange={handleChange}/>
            <input type='text' name="dob"  onChange={handleChange}/>
            <input type='text' name="place"  onChange={handleChange}/>
            <button type='submit'>submit</button>


            </form>

            <p>Name:{datas.name}</p>
            <p>DOB:{datas.dob}</p>
            <p>Place:{datas.place}</p>


            <div><Crud/></div>
        </div>
    )
}