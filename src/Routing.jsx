import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom";
import App from "./App";
import Menu from "./menu";
import Sample from "./Sample";
import Form from "./Form"
import Signup from "./Signup";
import Datapass from "./datapass";





const Test =()=>
{
  return(
    <div>
    <BrowserRouter>
    <Routes>
        <Route>
        <Route path="/" element={<Navigate to="/App" /> }/>
        <Route path="/sample"  element={<Sample/>} />
        <Route path="/App" element={<App/>} />
        <Route path="/menu"  element={<Menu/>} />
        <Route path="/Form" element={<Form/>}/>
        <Route path="/signup" element={<Signup/>} />
        <Route path="/datapass" element={<Datapass/>}/>
        </Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}
 export default Test;