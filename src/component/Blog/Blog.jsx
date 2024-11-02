import React, { useEffect, useState } from "react";
import "./Blog.css";

// const stripHtmlTagsWithFormatting = (html) => {
//   let olIndex = 1; // To keep track of numbering in ordered lists

//   return (
//     html
//       // Replace non-breaking spaces with regular spaces
//       .replace(/&nbsp;/g, " ")
//       // Replace paragraph tags with double newlines
//       .replace(/<p>/g, "\n\n")
//       .replace(/<\/p>/g, "")
//       // Replace line break tags with single newline
//       .replace(/<br\s*\/?>/g, "\n")
//       // Bold text - preserve the content
//       .replace(/<strong>(.*?)<\/strong>/g, "**$1**") // Wrap strong text with double asterisks
//       .replace(/<b>(.*?)<\/b>/g, "**$1**") // Wrap bold text with double asterisks
//       // Italic text - preserve the content
//       .replace(/<em>(.*?)<\/em>/g, "*$1*") // Wrap emphasized text with asterisks for italics
//       .replace(/<i>(.*?)<\/i>/g, "*$1*") // Wrap italic text with asterisks for italics
//       // Underlined text - surround with underscores
//       .replace(/<u>(.*?)<\/u>/g, "__$1__") // Add underscores around underlined text
//       // Handle unordered list
//       .replace(/<ul>(.*?)<\/ul>/gs, (match, p1) => {
//         return "\n" + p1.replace(/<li>(.*?)<\/li>/g, "- $1\n"); // Add dash for list items in unordered list
//       })
//       // Handle ordered list
//       .replace(/<ol>(.*?)<\/ol>/gs, (match, p1) => {
//         olIndex = 1; // Reset index at the start of an ordered list
//         return "\n" + p1.replace(/<li>(.*?)<\/li>/g, () => `${olIndex++}. `); // Add numbers for ordered list items
//       })
//       // Remove any other HTML tags
//       .replace(/<[^>]+>/g, "")
//       .trim()
//   );
// };

const stripHtmlTagsWithFormatting = (html) => {
  // Use a DOMParser to convert HTML into a document
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");

  // Helper function to traverse nodes and format text
  const traverseNode = (node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      return node.nodeValue;
    }

    let textContent = "";

    switch (node.nodeName) {
      case "P":
        textContent +=
          "\n\n" +
          Array.from(node.childNodes).map(traverseNode).join("") +
          "\n\n";
        break;
      case "BR":
        textContent += "\n";
        break;
      case "STRONG":
      case "B":
        textContent += `**${Array.from(node.childNodes)
          .map(traverseNode)
          .join("")}**`;
        break;
      case "EM":
      case "I":
        textContent += `*${Array.from(node.childNodes)
          .map(traverseNode)
          .join("")}*`;
        break;
      case "U":
        textContent += `__${Array.from(node.childNodes)
          .map(traverseNode)
          .join("")}__`;
        break;
      case "UL":
        textContent +=
          "\n" + Array.from(node.childNodes).map(traverseNode).join("") + "\n";
        break;
      case "OL":
        let olIndex = 1;
        textContent +=
          "\n" +
          Array.from(node.childNodes)
            .map((liNode) => `${olIndex++}. ${traverseNode(liNode)}`)
            .join("\n") +
          "\n";
        break;
      case "LI":
        textContent +=
          "- " + Array.from(node.childNodes).map(traverseNode).join("") + "\n";
        break;
      default:
        textContent += Array.from(node.childNodes).map(traverseNode).join("");
    }

    return textContent;
  };

  return traverseNode(doc.body).trim();
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
          const date = data?.data?.date;
          setSingleBlog({ title, description, date });
        });
    }
  }, [selectBlogId]);

  const handleSingleBlog = (blog) => {
    setSelectBlogId(blog?._id);
    setActiveBlogId(blog?._id);
  };
  console.log(singleBlog);

  return (
    <div className="py-24 text-gray-300 min-h-screen  md:mt-5">
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
              <h2 className="sm:text-lg md:text-3xl font-semibold  ms-5 md:ms-10">
                {singleBlog?.title}
              </h2>
              <p className="text-sm font-semibold mb-3 ms-5 md:ms-10">
                Published: {singleBlog.date.slice(0, 10)}
              </p>

              {/* <p className="pr-5">
                {stripHtmlTagsWithFormatting(singleBlog?.description)}
              </p> */}
              <pre className="pr-5 whitespace-pre-wrap mx-5 md:mx-10">
                {stripHtmlTagsWithFormatting(singleBlog?.description)}
              </pre>
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
