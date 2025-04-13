import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import "./Twodiv.css";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      text: "Estatery is the platform I go to on almost a daily basis for 2nd home and vacation condo shopping, or to just look at dream homes in new areas. Thanks for fun home shopping and comparative analyzing, Estatery!",
      author: "Ahmad Rasuli",
      url: "https://darkcode-it.github.io/whoami/",
      role: "Renter",
      avatar: "./img/my.jpg"
    }
  ];

  return (
    <section className="testimonials">
      <div className="testimonials__header">
        <h2 className="testimonials__title">What Our Clients Say</h2>
        <p className="testimonials__subtitle">Hear from property managers, landlords, and tenants</p>
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