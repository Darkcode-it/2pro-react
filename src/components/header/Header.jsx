import { FaSearchLocation, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import "./Header.css"

const Header = () => {
    const stats = [
        { value: "50k+", label: "renters" },
        { value: "10k+", label: "properties" }
    ];

    const actions = ["Rent", "Buy", "Sell"];

    return (
        <header className="header">
            <div className="header__content">
                <h1 className="header__title">
                    Buy, rent, or sell your property easily
                </h1>

                <p className="header__description">
                    A great platform to buy, sell, or even rent your properties without any commissions.
                </p>

                <div id="stats-grid">
                    {stats.map((stat) => (
                        <div key={stat.label} className="stat-card">
                            <p className="stat-card__value">{stat.value}</p>
                            <p className="stat-card__label">{stat.label}</p>
                        </div>
                    ))}
                </div>

                <div className="property-actions">
                    {actions.map((action) => (
                        <button
                            key={action}
                            className={`property-actions__btn ${action === "Rent" ? "active" : ""}`}
                        >
                            {action}
                        </button>
                    ))}
                </div>

                <div className="search-form">
                    <div className="search-form__group">
                        <div className="search-form__input-wrapper">
                            <FaMapMarkerAlt className="search-form__icon" />
                            <div className="search-form__input-container">
                                <label htmlFor="location" className="search-form__floating-label"></label>
                                <input
                                    type="text"
                                    id="location"
                                    className="search-form__input"
                                    placeholder=" "
                                    defaultValue="Barcelona, Spain"
                                />
                            </div>
                        </div>
                    </div>

                    <button className="search-form__submit">
                        <FaSearchLocation className="search-form__submit-icon" />
                        Browse Properties
                    </button>
                </div>


            </div>
        </header>
    );
};

export default Header;