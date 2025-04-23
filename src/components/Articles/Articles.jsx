// import { FaRegHeart, FaBed, FaBath, FaExpandArrowsAlt } from "react-icons/fa";
// import "./Articles.css";
// import properties from "../../data/properties.json"; // ایمپورت داده‌ها از فایل JSON

// export default function PropertyList() {
//   return (
//     <section className="property-section">
//       <div className="property-container">
//         {properties.map((property) => (
//           <article key={property.id} className="property-card">
//             <div className="property-card__header">
//               <img 
//                 src={property.image} 
//                 alt={`ملک ${property.title}`} 
//                 className="property-card__image"
//                 loading="lazy"
//               />
//               <button 
//                 className="property-card__favorite"
//                 aria-label="افزودن به علاقه‌مندی‌ها"
//               >
//                 <FaRegHeart className="property-card__favorite-icon" />
//               </button>
//             </div>

//             <div className="property-card__body">
//               <div className="property-card__price-info">
//                 <span className="property-card__price">{property.price} تومان</span>
//                 <span className="property-card__period">/ماه</span>
//               </div>
              
//               <h2 className="property-card__title">{property.title}</h2>
//               <p className="property-card__location">{property.location}</p>

//               <div className="property-card__features">
//                 <div className="property-feature">
//                   <FaBed className="property-feature__icon" aria-hidden="true" />
//                   <span>{property.beds} خواب</span>
//                 </div>
//                 <div className="property-feature">
//                   <FaBath className="property-feature__icon" aria-hidden="true" />
//                   <span>{property.baths} حمام</span>
//                 </div>
//                 <div className="property-feature">
//                   <FaExpandArrowsAlt className="property-feature__icon" aria-hidden="true" />
//                   <span>{property.size}</span>
//                 </div>
//               </div>
//             </div>
//           </article>
//         ))}
//       </div>
//     </section>
//   );
// }



// import { FaRegHeart, FaBed, FaBath, FaExpandArrowsAlt } from "react-icons/fa";
// import "./Articles.css";
// import properties from "../../data/properties.json";

// export default function PropertyList() {
//   const handleFavorite = (id) => {
//     // Logic for adding to favorites
//     console.log(`Added property ${id} to favorites`);
//   };

//   return (
//     <section className="property-section">
//       <div className="property-container">
//         {properties.map((property) => (
//           <article key={property.id} className="property-card">
//             <div className="property-card__header">
//               <img
//                 src={property.image}
//                 alt={property.title}
//                 className="property-card__image"
//                 loading="lazy"
//                 width={400}
//                 height={300}
//               />
//               <button
//                 className="property-card__favorite"
//                 onClick={() => handleFavorite(property.id)}
//                 aria-label="افزودن به علاقه‌مندی‌ها"
//               >
//                 <FaRegHeart className="property-card__favorite-icon" />
//               </button>
//             </div>

//             <div className="property-card__body">
//               <div className="property-card__price-info">
//                 <span className="property-card__price">
//                   {property.price.toLocaleString('fa-IR')}
//                 </span>
//                 <span className="property-card__period">{property.period}</span>
//               </div>
              
//               <h2 className="property-card__title">{property.title}</h2>
//               <p className="property-card__location">
//                 <span className="location-icon">📍</span>
//                 {property.location}
//               </p>

//               <div className="property-card__features">
//                 <div className="property-feature">
//                   <FaBed className="property-feature__icon" aria-hidden="true" />
//                   <span>{property.beds} خواب</span>
//                 </div>
//                 <div className="property-feature">
//                   <FaBath className="property-feature__icon" aria-hidden="true" />
//                   <span>{property.baths} حمام</span>
//                 </div>
//                 <div className="property-feature">
//                   <FaExpandArrowsAlt className="property-feature__icon" aria-hidden="true" />
//                   <span>{property.size} متر مربع</span>
//                 </div>
//               </div>
//             </div>
//           </article>
//         ))}
//       </div>
//     </section>
//   );
// }



import { FaRegHeart, FaBed, FaBath, FaExpandArrowsAlt } from "react-icons/fa";
import "./Articles.css";
import properties from "../../data/properties.json";

export default function PropertyList() {
  const handleFavorite = (id) => {
    // Logic for adding to favorites
    console.log(`Added property ${id} to favorites`);
  };

  return (
    <section className="property-section">
      <div className="property-container">
        {properties.map((property) => (
          <article key={property.id} className="property-card">
            <div className="property-card__header">
              <img
                src={property.image}
                alt={property.title}
                className="property-card__image"
                loading="lazy"
                width={400}
                height={300}
              />
              <button
                className="property-card__favorite"
                onClick={() => handleFavorite(property.id)}
                aria-label="افزودن به علاقه‌مندی‌ها"
              >
                <FaRegHeart className="property-card__favorite-icon" />
              </button>
            </div>

            <div className="property-card__body">
              <div className="property-card__price-info">
                <span className="property-card__price">
                  {property.price.toLocaleString('fa-IR')}
                </span>
                <span className="property-card__period">{property.period}</span>
              </div>
              
              <h2 className="property-card__title">{property.title}</h2>
              <p className="property-card__location">
                <span className="location-icon">📍</span>
                {property.location}
              </p>

              <div className="property-card__features">
                <div className="property-feature">
                  <FaBed className="property-feature__icon" aria-hidden="true" />
                  <span>{property.beds} خواب</span>
                </div>
                <div className="property-feature">
                  <FaBath className="property-feature__icon" aria-hidden="true" />
                  <span>{property.baths} حمام</span>
                </div>
                <div className="property-feature">
                  <FaExpandArrowsAlt className="property-feature__icon" aria-hidden="true" />
                  <span>{property.size}  </span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}