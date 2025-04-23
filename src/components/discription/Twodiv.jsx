import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import "./Twodiv.css";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      text: "استیتری پلتفرمی است که من تقریباً به صورت روزانه برای خرید خانه دوم و آپارتمان تعطیلات یا فقط برای دیدن خانه‌های رویایی در مناطق جدید به آن مراجعه می‌کنم. ممنون از خرید خانه سرگرم‌کننده و تحلیل‌های مقایسه‌ای، استیتری!",
      author: "احمد رسولی",
      url: "https://darkcode-it.github.io/whoami/",
      role: "مستأجر",
      avatar: "./img/my.jpg"
    }
  ];

  return (
    <section className="testimonials">
      <div className="testimonials__header">
        <h2 className="testimonials__title">نظر مشتریان ما</h2>
        <p className="testimonials__subtitle">نظرات مدیران املاک، صاحب‌خانه‌ها و مستأجران را بشنوید</p>
      </div>

      <div className="testimonials__content">
        {testimonials.map((testimonial) => (
          <article key={testimonial.id} className="testimonial-card">
            <div className="testimonial-card__quotes">
              <FaQuoteLeft className="quote-icon" />
              <FaQuoteRight className="quote-icon" />
            </div>
            
            <p className="testimonial-card__text">{testimonial.text}</p>
            
            <div className="testimonial-card__author">
              <a href={testimonial.url} target="_blank" rel="noopener noreferrer">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author} 
                  className="testimonial-card__avatar"
                />
              </a>
              <div>
                <h3 className="testimonial-card__name">{testimonial.author}</h3>
                <p className="testimonial-card__role">{testimonial.role}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}