import "./style/There.css"
import "./style/responsive/ResponsiveThere.css"
function There() {
    return (
        <div className="third-wrapper">
            <div className="third">
                <div>
                    <h1 className="titleSearch">No Spam Promise</h1>
                    <h2 className="textSearch">Are you a landlord?</h2>
                    <p className="paragraph">Discover ways to increase your home's value and get listed. No Spam.</p>
                    <div className="SearchVsButton">
                        <input className="input1" type="text" placeholder="Enter your email address"/>
                        <button className="btn2" type="button">Submit</button>
                    </div>
                    <p className="paragraph2">Join 10,000+ other landlords in our estatery community.</p>
                </div>
            </div>
        </div>
    );
}

export default There;