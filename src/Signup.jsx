import React, { useState } from "react"
// import Datapass from "./datapass"
import "./Signup.css"
import { Link,useNavigate } from "react-router-dom"




export default function Signup(){
    const [name,setName] = React.useState("hi anishsina")
    const [ename,setEname] = React.useState("")
    const navigate = useNavigate();
    

    const [captcha,setCaptcha] = React.useState("1234")

    const handleCaptcha = ()=>{
        const allvalue = ["A","B","C","D","E","F","G","H","1","2","3","4","5","6","7","8","9","0"]
        const cval1 = allvalue[Math.floor(Math.random()*allvalue.length)];
        const cval2 = allvalue[Math.floor(Math.random()*allvalue.length)];
        const cval3 = allvalue[Math.floor(Math.random()*allvalue.length)];
        const cval4 = allvalue[Math.floor(Math.random()*allvalue.length)];
        const cvalue = cval1+cval2+cval3+cval4;
        setCaptcha(cvalue);
    
    }

    const handleChange=(e)=>{
        setName(e.target.value)
        // props.getData(name);
    }

    const handleClick = ()=>{
        setEname(name)
        // props.getData(name)
        navigate('/datapass',{state:name})
    }

    const [signupdata,setSignupdata] = useState({username:"", password:""})
    const [signupdata1,setSignupdata1] = useState({username:"abcd", password:"12345",condition:false})
    const [captchavalue,setCaptchavalue] =useState("")

    console.log(signupdata)

    const handleSubmit=()=>{
        // alert("checked")
        if(signupdata.username===signupdata1.username && signupdata.password===signupdata1.password)
        {alert("checkedtrue")
        setSignupdata1({...signupdata1,condition:true})}
        else{alert("inputs are false")}
        
    }

    const handleLogin = ()=>{
        if(captcha===captchavalue){
        navigate("/datapass")
        }
    }
    return(
        <>
        <div className="Signup-Navbardiv" style={{backgroundColor:"blue"}}>
            <nav className="Signup-Navbar">
                <ul className="Signup-Navbar-list">
                    <li><Link to={"/App"}>HOME</Link></li>
                    <li><Link to={"/menu"}>PAGE1</Link></li>
                    <li><Link to={"/sample"}>PAGE2</Link></li>
                    <li><Link to={"/form"}>PAGE3</Link></li>
                    <li><Link to={{pathname:'/datapass',state:{name}}}>PAGE4</Link></li>
                </ul>
            </nav>
        </div>
        <div className="signup-division">
        <h1>SignUp page of order</h1>
        <input type="text"  onChange={handleChange}/>
        <input type="button" value="click" onClick={handleClick}/><br />
        <span><a href="./datapass">REDIRECT</a></span>
        <table className="signup-table">

                <tr>
                    <td><label>USERNAME</label></td>
                    <td><input type="text" onChange={(e)=>{setSignupdata({...signupdata,username:e.target.value})}} value={signupdata.username}/></td>
                </tr>
                <tr>
                    <td><label>PASSWORD</label></td>
                    <td><input type="text" onChange={(e)=>{setSignupdata({...signupdata,password:e.target.value})}} value={signupdata.password}/></td>

                </tr>
                <tr>
                <td><button onClick={handleSubmit}>SUMBIT</button></td>
                </tr>
                {signupdata1.condition ? <>
                    <tr>
                    <td><label htmlFor="">*CAPTCHA CODE*</label></td>
                    <td><input type="text" value={captcha}/><input type="button" value="refresh" onClick={handleCaptcha} /></td>
                    
                </tr>
                <tr>
                    <td><label htmlFor="">*CAPTCHA VERIFY*</label></td>
                    <td><input type="text" onChange={(e)=>{setCaptchavalue(e.target.value)}} value={captchavalue}/></td>                    
                </tr>
                {captcha===captchavalue &&
                        <>
                        <tr>
                        <td><button onClick={handleLogin}><Link to="/datapass">LOGIN</Link></button></td>
                        </tr>
                        </>
                    }

                </>
                :"captcha Return"}

        </table>

        <p>{name}</p>
        <p>{ename}</p>
        {/* <Datapass name={name}/> */}

        </div>
        </>
    )
}