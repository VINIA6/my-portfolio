import React from "react";
import { dataBlog } from "../../mocks/blog";
interface BlogProps {
  onBlogPostClick: (post: any) => void;
}

const Blog: React.FC<BlogProps> = ({ onBlogPostClick }) => {

  return (
    <article className="blog active" data-page="blog">
      <header>
        <h2 className="h2 article-title">Blog</h2>
      </header>

      <section className="blog-posts">
        <ul className="blog-posts-list">
          {dataBlog.map((item, index) => (
            <li className="blog-post-item" key={index}>
              <a href="#" onClick={() => onBlogPostClick(item)}>
                <figure className="blog-banner-box">
                  <img src={item.image} alt={item.title} loading="lazy" />
                </figure>

                <div className="blog-content">
                  <div className="blog-meta">
                    <p className="blog-category">{item.area}</p>
                    <span className="dot"></span>
                    <time dateTime="2022-02-23">{item.date}</time>
                  </div>

                  <h3 className="h3 blog-item-title">{item.title}</h3>

                  <p className="blog-text">{item.describe}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default Blog;