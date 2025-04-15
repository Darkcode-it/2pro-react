import { useState } from 'react';
import './PropertyRegister.css';

const PropertyRegister = () => {
  const [formData, setFormData] = useState({
    // بخش اطلاعات پایه
    propertyType: 'مسکونی',
    title: '',
    price: '',
    area: '',
    yearBuilt: '',
    
    // بخش موقعیت مکانی
    province: '',
    city: '',
    district: '',
    address: '',
    coordinates: { lat: 0, lng: 0 },
    
    // جزئیات فنی
    totalFloors: 1,
    floor: 0,
    rooms: 1,
    bathrooms: 1,
    parking: 0,
    
    // امکانات
    amenities: [],
    description: '',
    
    // اطلاعات قانونی
    ownershipType: 'مالک',
    documentType: 'سند رسمی',
    
    // رسانه‌ها
    images: [],
    video: '',
    
    // اطلاعات تماس
    contactName: '',
    contactPhone: '',
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [tempAmenities, setTempAmenities] = useState('');
  const [mapModal, setMapModal] = useState(false);

  const propertyTypes = [
    'مسکونی', 'تجاری', 'اداری', 'زمین', 'ویلا', 'باغ', 'مستغلات'
  ];

  const provinces = [
    'تهران', 'اصفهان', 'خراسان رضوی', 'البرز', 'فارس', 'آذربایجان شرقی'
  ];

  const cities = {
    تهران: ['تهران', 'شهریار', 'اسلامشهر'],
    اصفهان: ['اصفهان', 'کاشان', 'خمینی شهر'],
    // ...
  };

  const amenitiesList = [
    'آسانسور', 'پارکینگ', 'انباری', 'آنتن مرکزی',
    'سیستم امنیتی', 'شوفاژ', 'گاز مرکزی', 'اینترنت',
    'لابی', 'استخر', 'سالن ورزشی', 'درب ریموت'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // ارسال داده به سرور
    console.log('اطلاعات ملک:', formData);
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    // آپلود تصاویر و مدیریت پیش نمایش
  };

  const handleMapClick = () => {
    // یکپارچه سازی با API نقشه
    setMapModal(true);
  };

  return (
    <div className="property-register-container">
      <form onSubmit={handleSubmit} className="property-form">
        <div className="form-header">
          <h1>ثبت ملک جدید</h1>
          <div className="progress-steps">
            {[1, 2, 3, 4].map((step) => (
              <div 
                key={step}
                className={`step ${currentStep === step ? 'active' : ''}`}
              >
                مرحله {step}
              </div>
            ))}
          </div>
        </div>

        {/* Step 1: اطلاعات پایه */}
        {currentStep === 1 && (
          <div className="form-section">
            <div className="form-group">
              <label>نوع ملک *</label>
              <select
                value={formData.propertyType}
                onChange={(e) => setFormData({...formData, propertyType: e.target.value})}
              >
                {propertyTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>عنوان آگهی *</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                />
              </div>

              <div className="form-group">
                <label>قیمت (تومان) *</label>
                <input
                  type="number"
                  value={formData.price}
                  onChange={(e) => setFormData({...formData, price: e.target.value})}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>متراژ (متر مربع) *</label>
                <input
                  type="number"
                  value={formData.area}
                  onChange={(e) => setFormData({...formData, area: e.target.value})}
                />
              </div>

              <div className="form-group">
                <label>سال ساخت</label>
                <input
                  type="number"
                  value={formData.yearBuilt}
                  onChange={(e) => setFormData({...formData, yearBuilt: e.target.value})}
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 2: موقعیت مکانی */}
        {currentStep === 2 && (
          <div className="form-section">
            <div className="form-row">
              <div className="form-group">
                <label>استان *</label>
                <select
                  value={formData.province}
                  onChange={(e) => setFormData({...formData, province: e.target.value})}
                >
                  <option value="">انتخاب استان</option>
                  {provinces.map(province => (
                    <option key={province} value={province}>{province}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label>شهر *</label>
                <select
                  value={formData.city}
                  onChange={(e) => setFormData({...formData, city: e.target.value})}
                  disabled={!formData.province}
                >
                  <option value="">انتخاب شهر</option>
                  {formData.province && cities[formData.province].map(city => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>محله</label>
              <input
                type="text"
                value={formData.district}
                onChange={(e) => setFormData({...formData, district: e.target.value})}
              />
            </div>

            <div className="form-group">
              <label>آدرس دقیق *</label>
              <textarea
                value={formData.address}
                onChange={(e) => setFormData({...formData, address: e.target.value})}
                rows="3"
              />
            </div>

            <div className="form-group">
              <label>موقعیت روی نقشه</label>
              <button type="button" onClick={handleMapClick} className="map-button">
                انتخاب موقعیت جغرافیایی
              </button>
            </div>
          </div>
        )}

        {/* Step 3: جزئیات فنی */}
        {currentStep === 3 && (
          <div className="form-section">
            <div className="form-row">
              <div className="form-group">
                <label>تعداد اتاق *</label>
                <select
                  value={formData.rooms}
                  onChange={(e) => setFormData({...formData, rooms: e.target.value})}
                >
                  {[1,2,3,4,5].map(n => (
                    <option key={n} value={n}>{n} خوابه</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label>طبقه</label>
                <input
                  type="number"
                  value={formData.floor}
                  onChange={(e) => setFormData({...formData, floor: e.target.value})}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>تعداد پارکینگ</label>
                <input
                  type="number"
                  value={formData.parking}
                  onChange={(e) => setFormData({...formData, parking: e.target.value})}
                />
              </div>

              <div className="form-group">
                <label>تعداد حمام</label>
                <input
                  type="number"
                  value={formData.bathrooms}
                  onChange={(e) => setFormData({...formData, bathrooms: e.target.value})}
                />
              </div>
            </div>

            <div className="form-group">
              <label>امکانات</label>
              <div className="amenities-grid">
                {amenitiesList.map(amenity => (
                  <label key={amenity} className="amenity-item">
                    <input
                      type="checkbox"
                      checked={formData.amenities.includes(amenity)}
                      onChange={(e) => {
                        const newAmenities = e.target.checked
                          ? [...formData.amenities, amenity]
                          : formData.amenities.filter(a => a !== amenity);
                        setFormData({...formData, amenities: newAmenities});
                      }}
                    />
                    {amenity}
                  </label>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Step 4: رسانه‌ها و نهایی سازی */}
        {currentStep === 4 && (
          <div className="form-section">
            <div className="form-group">
              <label>آپلود تصاویر (حداکثر 10 تصویر)</label>
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageUpload}
              />
              <div className="image-preview">
                {/* نمایش پیش نمایش تصاویر */}
              </div>
            </div>

            <div className="form-group">
              <label>لینک تور مجازی (اختیاری)</label>
              <input
                type="url"
                value={formData.video}
                onChange={(e) => setFormData({...formData, video: e.target.value})}
              />
            </div>

            <div className="form-group">
              <label>توضیحات تکمیلی</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                rows="5"
              />
            </div>

            <div className="form-actions">
              <button type="button" onClick={() => setCurrentStep(3)}>
                مرحله قبل
              </button>
              <button type="submit">ثبت نهایی</button>
            </div>
          </div>
        )}

        {currentStep < 4 && (
          <div className="form-navigation">
            <button 
              type="button" 
              onClick={() => setCurrentStep(p => p - 1)}
              disabled={currentStep === 1}
            >
              مرحله قبل
            </button>
            <button 
              type="button" 
              onClick={() => setCurrentStep(p => p + 1)}
            >
              مرحله بعد
            </button>
          </div>
        )}
      </form>

      {mapModal && (
        <div className="map-modal">
          {/* پیاده‌سازی نقشه با استفاده از کتابخانه‌های موجود */}
          <button onClick={() => setMapModal(false)}>بستن</button>
        </div>
      )}
    </div>
  );
};

export default PropertyRegister;