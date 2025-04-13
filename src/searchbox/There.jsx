import { useState } from 'react';
import { FiSend } from 'react-icons/fi';
import './There.css';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    setIsSubmitting(true);
    setError('');
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      // Handle successful submission
    }, 2000);
  };

  return (
    <section className="newsletter">
      <div className="newsletter__container">
        <div className="newsletter__content">
          <h2 className="newsletter__title">Landlord Exclusive Updates</h2>
          <p className="newsletter__subtitle">
            Maximize your property value & get expert insights - Zero Spam Guarantee
          </p>

          <form onSubmit={handleSubmit} className="newsletter__form">
            <div className="newsletter__input-group">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="newsletter__input"
                placeholder="Enter your professional email"
                required
                aria-label="Email address"
              />
              <button 
                type="submit"
                className="newsletter__button"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  'Submitting...'
                ) : (
                  <>
                    <FiSend className="newsletter__button-icon" />
                    Get Updates
                  </>
                )}
              </button>
            </div>

            {error && <p className="newsletter__error">{error}</p>}

            <p className="newsletter__stats">
              Join 10,000+ landlords in our premium community
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}