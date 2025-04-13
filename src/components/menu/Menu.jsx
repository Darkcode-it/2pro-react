import { LuMenu } from "react-icons/lu";
import "./Menu.css";

export default function Menu() {
    const menuItems = [
        "Rent",
        "Buy",
        "Sell",
        "Manage Property",
        "Resources"
    ];

    return (
        <div className="container">
            <nav className="navbar">
                <img
                    src="./img/logo.png"
                    alt="Company Logo"
                    className="navbar__logo"
                />

                <ul className="navbar__menu">
                    {menuItems.map((item) => (
                        <li key={item} className="navbar__item">
                            <a href="/" className="navbar__link">{item}</a>
                        </li>
                    ))}
                </ul>

                <div className="navbar__actions">
                    <button className="btn btn--outline">Submit</button>
                    <button className="btn btn--primary">Submit</button>
                </div>

                <button
                    aria-label="Open menu"
                    className="navbar__toggle"
                >
                    <LuMenu size={32} color="#7065f0" />
                </button>
            </nav>
        </div>
    );
}