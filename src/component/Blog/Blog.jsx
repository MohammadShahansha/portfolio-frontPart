import React, { useEffect, useState } from "react";
import "./Blog.css";
const stripHtmlTags = (html) => {
  const doc = new DOMParser().parseFromString(html, "text/html");
  return doc.body.textContent || "";
};

const Blog = () => {
  const [allBlogs, setAllBlogs] = useState([]);
  const [singleBlog, setSingleBlog] = useState(null);
  const [selectBlogId, setSelectBlogId] = useState(null);
  const [activeBlogId, setActiveBlogId] = useState(null);
  useEffect(() => {
    fetch("https://portfolio-backend-ecru-two.vercel.app/api/blogs")
      .then((res) => res.json())
      .then((data) => setAllBlogs(data));
  }, []);
  //   console.log(allBlogs);
  useEffect(() => {
    if (selectBlogId) {
      fetch(
        `https://portfolio-backend-ecru-two.vercel.app/api/single-blog/${selectBlogId}`
      )
        .then((res) => res.json())
        .then((data) => {
          const description = data?.data?.description;
          const title = data?.data?.title;
          setSingleBlog({ title, description });
        });
    }
  }, [selectBlogId]);

  const handleSingleBlog = (blog) => {
    setSelectBlogId(blog?._id);
    setActiveBlogId(blog?._id);
  };
  console.log(singleBlog);

  return (
    <div className="py-24 text-gray-300 min-h-screen md:h-screen md:mt-5">
      <div className="md:flex ">
        <div className="md:w-1/5 border-verticale">
          <h1 className="text-3xl mb-5 md:mb-0 md:text-2xl font-semibold text-center">
            Recents Blog
          </h1>
          {allBlogs?.data?.map((blog, index) => {
            return (
              <div key={index} className="mb-2">
                <button
                  onClick={() => handleSingleBlog(blog)}
                  className={`sidbar-button hover:bg-[--second-bg-color] hover:text-white ${
                    activeBlogId === blog?._id ? "bg-[--second-bg-color]" : ""
                  }`}
                >
                  <h2 className="text-left font-semibold text-lg py-3 px-3 text-gray-300">
                    {blog.title}
                  </h2>
                </button>
              </div>
            );
          })}
        </div>
        <div className="md:w-4/5">
          {singleBlog ? (
            <div className="md:ml-3">
              <h2 className="sm:text-lg md:text-3xl font-semibold mb-3">
                {singleBlog?.title}
              </h2>

              <p className="pr-5">{stripHtmlTags(singleBlog?.description)}</p>
            </div>
          ) : (
            <h2 className="text-3xl sm:mt-5 md:mt-0 md:text-5xl text-center font-bold">
              {" "}
              Select a Blog to Read
            </h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;
