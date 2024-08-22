import React from "react";

interface BlogPostPageProps {
  title: string;
  describe: string;
  content: string;
  image: string;
  area: string;
  date: string;
}

const BlogPostPage: React.FC<BlogPostPageProps> = ({ title, describe, content, image, area, date }) => {
  return (
      <article className="blog-post-page active" data-page="blog-post-page">
      <header style={{ marginTop: '40px' }}>
        <h2 className="h2 article-title" >{title}</h2>
        <p className="blog-category">{area}</p>
        <time dateTime={date}>{date}</time>
      </header>

      <section className="blog-post-content">
        <figure className="blog-post-banner">
          <img src={image} alt={title} loading="lazy" />
        </figure>
        <div className="blog-post-description">
          <p className="blog-text">{describe}</p>
        </div>
        <div className="blog-post-body">
          <p className="blog-text">{content}</p>
        </div>
      </section>
    </article>
  );
};

export default BlogPostPage;
