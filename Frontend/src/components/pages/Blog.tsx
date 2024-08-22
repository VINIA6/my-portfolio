import React from "react";
import BlogImage1 from "../../assets/images/blog-1.jpg";
import BlogImage2 from "../../assets/images/blog-2.jpg";
import BlogImage3 from "../../assets/images/blog-3.jpg";
import BlogImage4 from "../../assets/images/blog-4.jpg";
import BlogImage5 from "../../assets/images/blog-5.jpg";
import BlogImage6 from "../../assets/images/blog-6.jpg";

interface BlogProps {
  onBlogPostClick: (post: any) => void;
}

const Blog: React.FC<BlogProps> = ({ onBlogPostClick }) => {

  const dataBlog = [
    {
      title: "Design conferences in 2022",
      describe: "Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.",
      image: BlogImage1,
      area: "Design",
      date: "Fab 23, 2022",
    },
    {
      title: "Best fonts every designer",
      describe: "Sed ut perspiciatis, nam libero tempore, cum soluta nobis est eligendi.",
      image: BlogImage2,
      area: "Design",
      date: "Fab 23, 2022",
    },
    {
      title: "Design digest #80",
      describe: "Excepteur sint occaecat cupidatat no proident, quis nostrum exercitationem ullam corporis suscipit.",
      image: BlogImage3,
      area: "Design",
      date: "Fab 23, 2022",
    },
    {
      title: "UI interactions of the week",
      describe: "Enim ad minim veniam, consectetur adipiscing elit, quis nostrud exercitation ullamco laboris nisi.",
      image: BlogImage4,
      area: "Design",
      date: "Fab 23, 2022",
    },
    {
      title: "The forgotten art of spacing",
      describe: "Maxime placeat, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: BlogImage5,
      area: "Design",
      date: "Fab 23, 2022",
    },
    {
      title: "Design digest #79",
      describe: "Optio cumque nihil impedit uo minus quod maxime placeat, velit esse cillum.",
      image: BlogImage6,
      area: "Design",
      date: "Fab 23, 2022",
    },
  ]
  
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