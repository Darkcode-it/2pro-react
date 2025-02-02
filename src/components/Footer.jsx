import "./style/Footer.css"
import "./style/responsive/ResponsiveFooter.css"
import { CiFacebook } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

function Footer() {
    return (
        <footer>
            <div>
                <img id="logoEnd" src="./img/logo.png" alt="Logo site"/>
            </div>
            <div className="allDivFooter">
                <div>
                    <ul>
                        <li><a href="#">SELL A HOME</a></li>
                        <li><a href="#">Request an offer</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Reviews</a></li>
                        <li><a href="#">Stories</a></li>
                        <li><a href="#">BUY A HOM   E</a></li>
                        <li><a href="#">Buy</a></li>
                        <li><a href="#">Finance</a></li>
                    </ul>

                </div>
                <div>
 {/*2*/}
                    <ul>
                        <li><a href="#">BUY, RENT AND SELL</a></li>
                        <li><a href="#">Buy and sell properties</a></li>
                        <li><a href="#">Rent home</a></li>
                        <li><a href="#">Builder trade-up</a></li>
                        <li><a href="#">TERMS & PRIVACY</a></li>
                        <li><a href="#">Trust & Safety</a></li>
                        <li><a href="#">Terms of Service</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
                <div>
{/*3*/}
                    <ul>
                        <li><a href="#">ABOUT</a></li>
                        <li><a href="#">Company</a></li>
                        <li><a href="#">Company</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Investors</a></li>
                        <li><a href="#">RESOURCES</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Guides</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Help Center</a></li>
                    </ul>
                </div>
            </div>
            <div className="endtext">
                ©2021 Estatery. All rights reserved
                <div className="endicon">

                    <CiFacebook size="30px" color="#7065f0" href="https://www.facebook.com/DarkCodeit"/>
                    <FaGithub size="30px" color="#7065f0" href="https://github.com/Darkcode-it"/>
                    <FaTelegram size="30px" color="#7065f0" href="https://t.me/darkcodeit"/>

                </div>
            </div>

        </footer>
    );
}

export default Footer;