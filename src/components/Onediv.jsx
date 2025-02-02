import "./style/Onediv.css"
import "./style/responsive/ResponsiveOnediv.css"
function Onediv() {
    return (

        <div className="AllDiv">
            <div className="text">
                <h1 className="title">The new way to find your new home</h1>
                <h4 className="subtitle">Find your dream place to live in with more than 10k+ properties
                    listed.</h4>

                <div className="stats">
                    <div className="stat">
                        <img className="stat-icon" src="./img/ho.svg" alt=""/>
                        <h6 className="stat-value">7.4%</h6>
                        <h5 className="stat-value">Property Return Rate</h5>
                    </div>
                    <div className="stat">
                        <img className="stat-icon" src="./img/se.svg " alt=""/>
                        <h6 className="stat-value">3,856</h6>
                        <h5 className="stat-value">Property in Sell & Rent</h5>
                    </div>
                    <div className="stat">
                        <img className="stat-icon" src="./img/ho.svg" alt=""/>
                        <h6 className="stat-value">2,540</h6>
                        <h5 className="stat-value">Daily Completed Transactions</h5>
                    </div>
                </div>
            </div>
            <img className="img3" src="./img/h3.svg" alt=""/>

        </div>


    );
}

export default Onediv;