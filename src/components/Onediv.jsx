import "./style/Onediv.css"
function Onediv() {
    return (

        <div className="AllDiv">
            <div className="text">
                <h1 className="title">The new way to find your new home</h1>
                <h4 className="subtitle">Find your dream place to live in with more than 10k+ properties
                    listed.</h4>

                <div className="stats">
                    <div className="stat">
                        <img className="stat-icon" src="../../public/img/ho.svg" alt=""/>
                        <div className="stat-value">7.4%</div>
                        <h5 className="stat-value">Property Return Rate</h5>
                    </div>
                    <div className="stat">
                        <img className="stat-icon" src="../../public/img/ho.svg " alt=""/>
                        <div className="stat-value">3,856</div>
                        <h5>Property in Sell & Rent</h5>
                    </div>
                    <div className="stat">
                        <img className="stat-icon" src="../../public/img/ho.svg" alt=""/>
                        <div className="stat-value">2,540</div>
                        <h5>Daily Completed Transactions</h5>
                    </div>
                </div>
            </div>
            <img className="img3" src="../../public/img/h3.svg" alt=""/>

        </div>


    );
}

export default Onediv;