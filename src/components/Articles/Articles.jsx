import { FaRegHeart, FaBed, FaBath, FaExpandArrowsAlt } from "react-icons/fa";
import "./Articles.css";

const properties = [
  { 
    id: 1, 
    image: "./img/h7.jpg", 
    price: "2,095", 
    title: "Cove Red", 
    location: "243 Curlew Road, Palm Harbor, TX", 
    beds: 4, 
    baths: 2, 
    size: "6x8 m²"
  },
  { 
    id: 2, 
    image: "./img/h6.jpg", 
    price: "2,095", 
    title: "Cove Red", 
    location: "243 Curlew Road, Palm Harbor, TX", 
    beds: 4, 
    baths: 2, 
    size: "6x8 m²"
  },
  { 
    id: 3, 
    image: "./img/h8.jpg", 
    price: "2,095", 
    title: "Cove Red", 
    location: "243 Curlew Road, Palm Harbor, TX", 
    beds: 4, 
    baths: 2, 
    size: "6x8 m²"
  },
  { 
    id: 4, 
    image: "./img/h11.jpg", 
    price: "2,095", 
    title: "Cove Red", 
    location: "243 Curlew Road, Palm Harbor, TX", 
    beds: 4, 
    baths: 2, 
    size: "6x8 m²"
  },
  { 
    id: 5, 
    image: "./img/h9.jpg", 
    price: "2,095", 
    title: "Cove Red", 
    location: "243 Curlew Road, Palm Harbor, TX", 
    beds: 4, 
    baths: 2, 
    size: "6x8 m²"
  },
  { 
    id: 6, 
    image: "./img/h2.jpg", 
    price: "2,095", 
    title: "Cove Red", 
    location: "243 Curlew Road, Palm Harbor, TX", 
    beds: 4, 
    baths: 2, 
    size: "6x8 m²"
  },
  { 
    id: 7, 
    image: "./img/h1.jpg", 
    price: "2,095", 
    title: "Cove Red", 
    location: "243 Curlew Road, Palm Harbor, TX", 
    beds: 4, 
    baths: 2, 
    size: "6x8 m²"
  },
  { 
    id: 8, 
    image: "./img/h3.jpg", 
    price: "2,095", 
    title: "Cove Red", 
    location: "243 Curlew Road, Palm Harbor, TX", 
    beds: 4, 
    baths: 2, 
    size: "6x8 m²"
  }
];

export default function PropertyList() {
  return (
    <section className="property-section">
      <div className="property-container">
        {properties.map((property) => (
          <article key={property.id} className="property-card">
            <div className="property-card__header">
              <img 
                src={property.image} 
                alt={`${property.title} property`} 
                className="property-card__image"
                loading="lazy"
              />
              <button 
                className="property-card__favorite"
                aria-label="Add to favorites"
              >
                <FaRegHeart className="property-card__favorite-icon" />
              </button>
            </div>

            <div className="property-card__body">
              <div className="property-card__price-info">
                <span className="property-card__price">${property.price}</span>
                <span className="property-card__period">/month</span>
              </div>
              
              <h2 className="property-card__title">{property.title}</h2>
              <p className="property-card__location">{property.location}</p>

              <div className="property-card__features">
                <div className="property-feature">
                  <FaBed className="property-feature__icon" aria-hidden="true" />
                  <span>{property.beds} Beds</span>
                </div>
                <div className="property-feature">
                  <FaBath className="property-feature__icon" aria-hidden="true" />
                  <span>{property.baths} Baths</span>
                </div>
                <div className="property-feature">
                  <FaExpandArrowsAlt className="property-feature__icon" aria-hidden="true" />
                  <span>{property.size}</span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}