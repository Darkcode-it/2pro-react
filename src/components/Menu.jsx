import "./style/Menu.css"
import "./style/responsive/Responsiv-menu.css"
import "./style/responsive/Responsive.css"
function Menu() {
    return (

        <div className="container">
            <nav className="menu" id="nav">
                <img className="logo" src="../../public/img/logo.png" alt="logo site"/>
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
                <img className="ham" src="../../public/img/ham.svg" alt="hamburger menu"/>
            </nav>
            <div id="header-container">
                <h1>Buy, rent, or sell your property easily</h1>
                <p id="header-p">
                    A great platform to buy, sell, or even rent your properties without
                    any commisions.
                </p>
                <div className="numbers-con" id="numbers-con-desk">
                    <div className="img-num-container">
                        <img src="../../public/img/h2.png" alt=""/>
                        <div>
                            <p className="visit">50k+</p>
                            <p className="visit">renters</p>
                        </div>
                    </div>
                    <div className="img-num-container">
                        <img src="../../public/img/" alt=""/>
                        <div>
                            <p>10k+</p>
                            <p>properties</p>
                        </div>
                    </div>
                </div>
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
                    <img src="../../public/img/Line.svg" height="50px" alt=""/>
                    <div id="when-select">
                        <div>
                            <p>When</p>
                            <p>Select Move-in Date</p>
                        </div>
                        <img src="../../public/img/Calendar.svg" id="cal-icon" alt=""/>
                    </div>
                    <img src="../../public/img/Line.svg" height="50px" alt=""/>
                    <div>
                        <button>Browse Properties</button>
                    </div>
                </div>
                <div id="location-of-rent-mobile">
                    <input type="text" placeholder="Search location"/>

                    <img className="imgIcon" src="../../public/img/btnsearch.svg" alt=""/>
                </div>
                <img id="map" src="../../public/img/map.svg" alt=""/>

                            </div>
</div>
)
    ;
}

export default Menu;




