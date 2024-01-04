import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import blogApi from "api/blogApi";
import BlogTitle from "components/blog-detail/BlogTitle";
import DatePosted from "components/blog-detail/DatePosted";
import BlogDescription from "components/blog-detail/BlogDescription";
import { Helmet } from "react-helmet";


export default function BlogDetail() {
  const { slug } = useParams();
  const [blog, setBlog] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchData() {
    const { data: body } = await blogApi.getDetail(slug);
    return body;
  }

  useEffect(() => {
    setIsLoading(true);
    fetchData()
      .then((data) => {
        data['date_posted'] = new Date(data['date_posted']);
        setBlog(data);
      })
      .catch(err => setError(err));
    setIsLoading(false);
  }, []);

  return (
    <div className="h-full py-6 flex-1 flex flex-col items-center overflow-auto">
      <Helmet>
        <title>{`${blog['title']} - anandadf`}</title>
      </Helmet>
      {
        isLoading
          ?
          <h3 className="w-max text-light-beige text-2xl mb-3 hover:text-white">loading...</h3>
          : error == null ? (
            <div className="w-10/12 md:w-8/12">
              <h3 className="w-max text-light-beige text-xl md:text-2xl mb-8 hover:text-white"><Link to='/blog'>&#x2190; back to blog</Link></h3>
              <BlogTitle title={blog['title']} />
              <DatePosted date={blog['date_posted']} />
              <BlogDescription description={blog['description']} />
            </div>
          ) : <div className="font-bold text-2xl text-light-beige"><p>Blog not found</p></div>
      }
    </div>
  );
};