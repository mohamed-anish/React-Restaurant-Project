import orderplate1 from "./Order plate1.png"
import Bread from "./Bread.png"
import orderplate2 from "./Order plate2.png"
import { Link } from 'react-router-dom';

import "./Menu.css"



export default function Menu()
{
    return(
        <div className="menu">
            <div className="menu-header">
                <h2>CHOOSE & ENJOY</h2>
                <Link to="/sample"> To sample</Link>
                <Link to="/App"> To app</Link>
                <Link to="/menu"> To Menu</Link>
            </div>
            <div className="para">
                <p>Welcome to our Restaurant and enjoy the food in your wishes.please go head with your favorite.</p>
                <p>Welcome to our Restaurant and enjoy the food in your wishes.please go head with your favorite.</p>
            </div>
            <div className="order-content">
                <div className="order-content1">
                <img className="image-order1" src={orderplate1} alt="order plate"/>
                <p className="order-p1">LOREM IPSUME DOLOR</p>
                <p>lorem ipsume dolor and click and get the order</p><br></br>
                <button className="btn1">ORDER NOW</button>
                </div>

                <div className="order-content1">
                <img className="image-order1" src={Bread} alt="braed"/>
                <p className="order-p1">LOREM IPSUME DOLOR</p>
                <p>lorem ipsume dolor and click and get the order</p><br></br>
                <button className="btn1">ORDER NOW</button>
                </div>

                <div className="order-content1">
                <img className="image-order1" src={orderplate2} alt="order plate"/>
                <p className="order-p1">LOREM IPSUME DOLOR</p>
                <p>lorem ipsume dolor and click and get the order</p><br></br>
                <button className="btn1">ORDER NOW</button>
                </div>

            </div>
        </div>
    )
}