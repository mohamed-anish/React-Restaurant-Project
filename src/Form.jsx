import "./Form.css";
import {useState} from "react"
import DatasFilter from "./DatasFilter";


export default function Form(){

    const [text,setText] = useState({fname:"",lname:"",dob:"",place:"",gender:"",password:"",cpassword:""});
    const [datas,setDatas] = useState({})

    const handleChange= (e) =>{
        const name=e.target.name;
        const value=e.target.value;
        // console.log(name,value)
        setText((item)=>{
            return{...item,[name]:value}
        })
        // console.log(text)
    }

    // const handleSubmit = (event)=>{
    //     event.preventDafault();
    //     setDatas(text);
    //     console.log(datas);

    // }
    return(
        <div>

            <form onSubmit={(event)=>{
                event.preventDefault();
                setDatas(text)
            }}>
            <table >
               <tr>
                <th><label>FIRST NAME:</label><input name="fname" type="text" onChange={handleChange}></input></th>
                <th><label>LAST NAME:</label><input name="lname" type="text" onChange={handleChange}></input></th>           
               </tr>

               <tr>
                <th><label>DATE OF BIRTH:</label><input name="dob" type="text" onChange={handleChange}></input></th>
                <th><label>PLACE:</label><input name="place" type="text" onChange={handleChange}></input></th>           
               </tr>

               <tr>
                <th><label>MALE:</label><input name="gender" value="MALE" type="radio" checked onChange={handleChange}></input></th>
                <th><label>FEMALE NAME:</label><input name="gender" value="FEMALE" checked type="radio" onChange={handleChange}></input></th>           
               </tr>

               <tr>
                <th><label>PASSWORD:</label><input name="password" type="text" onChange={handleChange}></input></th>
                <th><label>CONFIRM PASSWORD:</label><input name="cpassword" type="text" onChange={handleChange}></input></th>           
               </tr>



            </table>
            <button type="submit">SUBMIT</button>


            </form>

            <p>FIRST NAME:{datas.fname}</p>
            <p>FIRST NAME:{datas.lname}</p>
            <p>FIRST NAME:{datas.dob}</p>
            <p>FIRST NAME:{datas.place}</p>
            <p>FIRST NAME:{datas.gender}</p>
            <p>FIRST NAME:{datas.gender}</p>
            <p>FIRST NAME:{datas.password}</p>
            <p>FIRST NAME:{datas.cpassword}</p>

            <div><DatasFilter/></div>
        </div>
    )
}