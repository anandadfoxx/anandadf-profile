import BlogCard from "components/blog/BlogCard";
import LineDivider from "components/blog/LineDivider";
import blogApi from "components/blog/blogApi";
import React, { useEffect, useState } from "react";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [pageCounter, setPageCounter] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const {data: body} = await blogApi.getList(pageCounter);
        setBlogs(body['blogs']);
        setIsLoading(false);
        setPageCounter(pageCounter + 1);
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="h-screen pt-20 flex flex-col items-center sections overflow-y-scroll scrollbar-hide">
      <div id="blog-list" className="w-6/12">
        {!isLoading && (
          <ul>
            {
              blogs.map((blog, index) => (
                  <li key={index}>
                    <BlogCard link={blog.slug} title={blog.title} date={blog.date_posted} description={blog.description} lineDiv={true}/>
                  </li>
              ))
            }
          </ul>
        )}
      </div>
    </div>
  );
};