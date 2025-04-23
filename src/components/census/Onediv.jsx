import './Onediv.css';

function Onediv() {
  const stats = [
    { icon: './img/ho.svg', value: '۷.۴٪', label: 'نرخ بازگشت املاک' },
    { icon: './img/se.svg', value: '۳,۸۵۶', label: 'املاک برای فروش و اجاره' },
    { icon: './img/ho.svg', value: '۲,۵۴۰', label: 'معاملات تکمیل‌شده روزانه' }
  ];

  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero__title">راه هوشمندانه برای یافتن خانه ایده‌آل شما</h1>
        <p className="hero__subtitle">
          ملک رویایی خود را از میان بیش از ۱۰,۰۰۰ لیست با جستجوی هوش مصنوعی ما پیدا کنید
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
        alt="تصویری از خانه‌های مدرن" 
        className="hero__image" 
      />
    </section>
  );
}

export default Onediv;