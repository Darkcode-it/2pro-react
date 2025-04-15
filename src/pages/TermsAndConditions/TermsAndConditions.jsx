import { useState, useRef, useEffect } from 'react';
import { FiChevronDown, FiCheck, FiAnchor } from 'react-icons/fi';
import './TermsAndConditions.css';

const TermsAndConditions = () => {
  const [activeSection, setActiveSection] = useState('');
  const [accepted, setAccepted] = useState(false);
  const sectionsRef = useRef({});
  
  // محتوای قانونی با توجه به قوانین جمهوری اسلامی ایران
  const legalSections = [
    {
      id: 'general',
      title: 'مقررات کلی',
      content: `1.1. استفاده از این پلتفرم تابع قوانین جمهوری اسلامی ایران بوده و کاربر موظف به رعایت مقررات مربوط به فضای مجازی مصوب شورای عالی فضای مجازی است.
      
1.2. هرگونه استفاده غیرقانونی یا خلاف عفت عمومی ممنوع بوده و پیگرد قانونی دارد.`
    },
    {
      id: 'privacy',
      title: 'حریم خصوصی',
      content: `2.1. مطابق ماده 58 قانون تجارت الکترونیک، جمع‌آوری و پردازش داده‌های کاربران فقط با رضایت صریح و برای اهداف مشخص شده مجاز است.
      
2.2. اطلاعات کاربران طبق قانون حمایت از داده‌های شخصی (مصوب 1400) محافظت می‌شود.`
    },
    {
      id: 'intellectual',
      title: 'مالکیت فکری',
      content: `3.1. کلیه محتوای ارائه شده تابع قانون حمایت از حقوق پدیدآورندگان مصوب 1348 و اصلاحات بعدی آن است.
      
3.2. هرگونه بازنشر محتوا بدون اجازه کتبی پیگرد قانونی دارد.`
    },
    {
      id: 'transactions',
      title: 'معاملات الکترونیک',
      content: `4.1. کلیه تراکنش‌ها طبق ماده 34 قانون تجارت الکترونیک و دستورالعمل‌های بانک مرکزی ج.ا.ایران انجام می‌شود.
      
4.2. حل اختلافات تابع قوانین مرکز امور مشاوران قوه قضائیه می‌باشد.`
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    Object.values(sectionsRef.current).forEach(el => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    sectionsRef.current[id]?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div className="terms-container">
      <aside className="terms-sidebar">
        <h3>فهرست مطالب</h3>
        <ul>
          {legalSections.map((section) => (
            <li 
              key={section.id}
              className={activeSection === section.id ? 'active' : ''}
              onClick={() => scrollToSection(section.id)}
            >
              <FiAnchor />
              {section.title}
            </li>
          ))}
        </ul>
      </aside>

      <main className="terms-content">
        <header className="terms-header">
          <h1>قوانین و مقررات استفاده از پلتفرم</h1>
          <p>آخرین بروزرسانی: ۱۴۰۳/۰۵/۱۵</p>
        </header>

        {legalSections.map((section) => (
          <section 
            key={section.id}
            id={section.id}
            ref={(el) => (sectionsRef.current[section.id] = el)}
            className="terms-section"
          >
            <div className="section-header">
              <h2>{section.title}</h2>
              {activeSection === section.id && <FiCheck className="read-indicator" />}
            </div>
            <div className="section-content">
              {section.content.split('\n').map((text, i) => (
                <p key={i}>{text}</p>
              ))}
            </div>
          </section>
        ))}

        <div className="terms-acceptance">
          <label className="accept-checkbox">
            <input
              type="checkbox"
              checked={accepted}
              onChange={(e) => setAccepted(e.target.checked)}
            />
            <span className="custom-checkbox">
              {accepted && <FiCheck />}
            </span>
            <span>
              کلیه موارد فوق را مطالعه کرده و با 
              <a href="#privacy" onClick={() => scrollToSection('privacy')}>
                سیاست‌های حریم خصوصی
              </a> 
              و 
              <a href="#transactions" onClick={() => scrollToSection('transactions')}>
                شرایط معاملات
              </a> 
              موافقت می‌کنم
            </span>
          </label>

          <button 
            className={`accept-button ${accepted ? 'active' : ''}`}
            disabled={!accepted}
          >
            تایید و ادامه
          </button>
        </div>
      </main>
    </div>
  );
};

export default TermsAndConditions;