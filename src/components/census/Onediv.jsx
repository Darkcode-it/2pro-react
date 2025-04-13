import './Onediv.css';

function Onediv() {
  const stats = [
    { icon: './img/ho.svg', value: '7.4%', label: 'Property Return Rate' },
    { icon: './img/se.svg', value: '3,856', label: 'Property in Sell & Rent' },
    { icon: './img/ho.svg', value: '2,540', label: 'Daily Completed Transactions' }
  ];

  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero__title">The smart way to find your perfect home</h1>
        <p className="hero__subtitle">
          Discover your dream property among 10,000+ listings with our AI-powered search
        </p>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <img 
                src={stat.icon} 
                alt="" 
                className="stat-card__icon" 
                aria-hidden="true"
              />
              <div className="stat-card__content">
                <span className="stat-card__value">{stat.value}</span>
                <h3 className="stat-card__label">{stat.label}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <img 
        src="./img/h10.jpg" 
        alt="Modern housing illustration" 
        className="hero__image" 
      />
    </section>
  );
}

export default Onediv;