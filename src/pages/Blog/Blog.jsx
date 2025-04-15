import { useState, useEffect, useMemo } from 'react';
import { FiClock, FiCalendar, FiTag, FiChevronRight } from 'react-icons/fi';
import PropTypes from 'prop-types';

import './Blog.css';

const BlogPost = ({ 
  title = '', 
  excerpt = '', 
  date = '', 
  readingTime = 0, 
  tags = [], 
  featuredImage = '' 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const formattedDate = useMemo(() => {
    try {
      return new Date(date).toLocaleDateString('fa-IR');
    } catch {
      return 'تاریخ نامعتبر';
    }
  }, [date]);

  return (
    <article 
      className="blog-post"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label={title || 'مقاله بدون عنوان'}
    >
      <div className="post-media">
        {featuredImage && (
          <img 
            src={featuredImage} 
            alt={title || 'تصویر مقاله'}
            loading="lazy"
            className="post-image"
            onError={(e) => e.target.style.display = 'none'}
          />
        )}
        
        <div className="post-meta">
          <time className="post-date">
            <FiCalendar />
            {formattedDate}
          </time>
          <span className="reading-time">
            <FiClock />
            {Math.max(0, readingTime)} دقیقه
          </span>
        </div>
      </div>

      <div className="post-content">
        <h2 className="post-title">{title || 'مقاله بدون عنوان'}</h2>
        <p className="post-excerpt">{excerpt || 'بدون توضیحات'}</p>
        
        {Array.isArray(tags) && tags.length > 0 && (
          <div className="post-tags">
            {tags.map((tag, index) => (
              <span key={index} className="tag">
                <FiTag />
                {tag || 'بدون برچسب'}
              </span>
            ))}
          </div>
        )}

        <button 
          className={`read-more ${isHovered ? 'hovered' : ''}`}
          aria-label={`مطالعه بیشتر ${title || ''}`}
        >
          مطالعه کامل
          <FiChevronRight className="icon" />
        </button>
      </div>
    </article>
  );
};

const Blog = ({ posts = [], itemsPerPage = 6 }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('');

  const safePosts = useMemo(() => 
    Array.isArray(posts) ? posts : [], 
    [posts]
  );
  const filteredPosts = useMemo(() => {
    try {
      return safePosts.filter(post => {
        const titleMatch = (post.title || '')
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
        
        const excerptMatch = (post.excerpt || '')
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
        
        const tagMatch = !selectedTag || 
          (Array.isArray(post.tags) && 
          post.tags.some(t => t.toLowerCase() === selectedTag.toLowerCase())); // خطای اصلی اینجا است
        
        return titleMatch || excerptMatch && tagMatch;
      });
    } catch (error) {
      console.error('خطا در فیلتر کردن مقالات:', error);
      return [];
    }
  }, [safePosts, searchQuery, selectedTag]);

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / itemsPerPage));
  const currentPageClamped = Math.min(Math.max(1, currentPage), totalPages);
  const paginatedPosts = filteredPosts.slice(
    (currentPageClamped - 1) * itemsPerPage,
    currentPageClamped * itemsPerPage
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedTag]);

  const allTags = useMemo(() => {
    const tagSet = new Set();
    safePosts.forEach(post => {
      if (Array.isArray(post.tags)) {
        post.tags.forEach(tag => tag && tagSet.add(tag.trim()));
      }
    });
    return Array.from(tagSet).sort();
  }, [safePosts]);

  return (
    <div className="blog-container">
      <header className="blog-header">
        <h1>وبلاگ تخصصی املاک</h1>
        
        <div className="blog-controls">
          <input
            type="text"
            placeholder="جستجو در مقالات..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
            aria-label="جستجو در مقالات"
          />
          
          <select 
            value={selectedTag} 
            onChange={(e) => setSelectedTag(e.target.value)}
            className="tag-filter"
            aria-label="فیلتر بر اساس دسته‌بندی"
          >
            <option value="">همه دسته‌بندی‌ها</option>
            {allTags.map((tag, index) => (
              <option key={index} value={tag}>
                {tag || 'بدون دسته‌بندی'}
              </option>
            ))}
          </select>
        </div>
      </header>

      <main className="blog-posts">
        {paginatedPosts.length > 0 ? (
          paginatedPosts.map((post, index) => (
            <BlogPost 
              key={post.id || index}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              readingTime={post.readingTime}
              tags={post.tags}
              featuredImage={post.featuredImage}
            />
          ))
        ) : (
          <div className="empty-state">
            <h2>مقاله‌ای یافت نشد</h2>
            <p>لطفا عبارت جستجو یا فیلترها را تغییر دهید</p>
          </div>
        )}
      </main>

      {totalPages > 1 && (
        <div className="pagination">
          <button
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPageClamped === 1}
            aria-label="صفحه قبلی"
          >
            قبلی
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              className={currentPageClamped === i + 1 ? 'active' : ''}
              aria-label={`برگه ${i + 1}`}
              aria-current={currentPageClamped === i + 1 ? 'page' : undefined}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPageClamped === totalPages}
            aria-label="صفحه بعدی"
          >
            بعدی
          </button>
        </div>
      )}
    </div>
  );
};

Blog.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      title: PropTypes.string,
      excerpt: PropTypes.string,
      date: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
      readingTime: PropTypes.number,
      tags: PropTypes.arrayOf(PropTypes.string),
      featuredImage: PropTypes.string
    })
  ),
  itemsPerPage: PropTypes.number
};

Blog.defaultProps = {
  posts: [],
  itemsPerPage: 6
};

export default Blog;