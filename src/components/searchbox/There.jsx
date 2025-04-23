import { useState } from 'react';
import properties from '../../data/properties.json';
import './There.css';

export default function PriceRangeCalculator() {
  const [budget, setBudget] = useState('');
  const [filteredHouses, setFilteredHouses] = useState([]);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const rawValue = e.target.value.replace(/[^0-9]/g, ''); // Remove non-numeric characters
    const formattedValue = rawValue.replace(/\B(?=(\d{3})+(?!\d))/g, ','); // Add thousand separators
    setBudget(formattedValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const numericBudget = parseInt(budget.replace(/,/g, ''), 10); // Remove commas for numeric comparison
    if (isNaN(numericBudget)) {
      setError('لطفاً یک عدد معتبر وارد کنید');
      return;
    }

    if (numericBudget <= 0) {
      setError('بودجه باید بیشتر از صفر باشد');
      return;
    }

    setError('');
    const results = (properties || []).filter(
      (property) => property.price <= numericBudget
    );
    setFilteredHouses(results);
  };

  return (
    <section className="price-calculator">
      <div className="price-calculator__container">
        <div className="price-calculator__content">
          <h2 className="price-calculator__title">محاسبه‌گر محدوده قیمت</h2>
          <p className="price-calculator__subtitle">
            بودجه ماهانه خود را به تومان وارد کنید
          </p>

          <form onSubmit={handleSubmit} className="price-calculator__form">
            <div className="price-calculator__input-group">
              <input
                type="text"
                value={budget}
                onChange={handleInputChange} // Updated to use the new handler
                className="price-calculator__input"
                placeholder="مثال: 1,000,000"
                required
                aria-label="مبلغ بودجه به تومان"
              />
              <button type="submit" className="price-calculator__button">
                جستجو
              </button>
            </div>

            {error && <p className="price-calculator__error">{error}</p>}
          </form>

          <div className="price-calculator__results">
            {filteredHouses.length > 0 ? (
              <ul className="results-list">
                {filteredHouses.map((property) => (
                  <li key={property.id} className="result-item">
                    <span className="property-title">{property.title}</span>
                    <span className="property-price">
                      {property.price.toLocaleString('fa-IR')} تومان
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="price-calculator__no-results">
                ⚠️ موردی یافت نشد
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}