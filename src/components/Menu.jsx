import "./style/Menu.css"
import "./style/responsive/Responsiv-menu.css"
import "./style/responsive/Responsive.css"
import { LuMenu } from "react-icons/lu";
import { FaSearchLocation } from "react-icons/fa";
export default function Menu() {
    return (
        <div className="container">
            <nav className="menu" id="nav">
                <img className="logo" src="./img/logo.png" alt="logo site"/>
                <ol className="menu-item">
                    <li><a href="index.html">Rent</a></li>
                    <li><a href="index.html">Buy</a></li>
                    <li><a href="index.html">Sell</a></li>
                    <li><a href="index.html">Manage Property</a></li>
                    <li><a href="index.html">Resources</a></li>
                </ol>
                <div className="btns">
                    <button className="btn1" type="button">Submit</button>
                    <button className="btn1b" type="button">Submit</button>
                </div>
                <LuMenu size="32px" color="#7065f0" className="iconmenu"/>
            </nav>
            <div id="header-container">
                <h1>Buy, rent, or sell your property easily</h1>
                <p id="header-p">
                    A great platform to buy, sell, or even rent your properties without
                    any commisions.
                </p>
                <span className="numbers-con" id="numbers-con-desk">
                    <div className="img-num-container">
                        {/* <img src="./img/locasion.svg" alt=""/> */}
                        <div>
                            <p   className="visit">50k+</p>
                            <p className="visit">renters</p>
                        </div>
                    </div>
                    <div className="img-num-container">
                        {/* <img src="./img/location.svg" alt=""/> */}
                        <div>
                            <p>10k+</p>
                            <p>properties</p>
                        </div>
                    </div>
                </span>
                <div id="rent-list">
                    <p>Rent</p>
                    <p>Buy</p>
                    <p>Sell</p>
                </div>
                <div id="location-of-rent">
                    <div>
                        <p>Location</p>
                        <p>Barcelona, Spain</p>
                    </div>

                    {/*<img src="./img/Line.svg"/>*/}

                    <img src="./img/Line.svg"/>

                    <div id="when-select">
                        <div>
                            <p>When</p>
                            <p>Select Move-in Date</p>
                        </div>
                        <img src="./img/location.svg" id="cal-icon" alt=""/>
                    </div>
                    <img src="./img/Line.svg"  alt=""/>
                    <div>
                        <button>Browse Properties</button>
                    </div>
                </div>
                <div id="location-of-rent-mobile">
                    <input type="text" placeholder="Search location"/>

                     {/*<img className="imgIcon" src="./img/ho.svg" alt=""/> */}
                    <FaSearchLocation  className="Searchicon"/>
                    {/* <img className="imgIcon" src="./img/ho.svg" alt=""/> */}
                </div>
                <img id="map" src="./img/map.svg" alt=""/>
            </div>

</div>

) ;
}




