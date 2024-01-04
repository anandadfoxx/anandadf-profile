import BlogCard from "components/blog/BlogCard";
import EndButton from "components/blog/EndButton";
import useFetchBlogs from "hooks/useFetchBlogs";
import { Helmet } from "react-helmet";

export default function Blog() {
  const [blogs, isEndOfPage, isLoading, error, setIsFetchTriggered] = useFetchBlogs();
  // fetchData()

  return (
    <div className="flex-1 py-6 flex flex-col items-center sections overflow-auto">
      <Helmet>
        <title>Blogs - anandadf</title>
      </Helmet>
      <div id="blog-list" className="w-10/12 lg:w-8/12 flex flex-col items-center">
        {!isLoading ? (
          !error ? (
            <ul className="w-full">
              {
                blogs.map((blog, index) => (
                  <li key={index}>
                    <BlogCard link={blog.slug} title={blog.title} date={blog.date_posted} description={blog.short_description} lineDiv={true} />
                  </li>
                ))
              }
            </ul>
          ) : <div className="font-bold text-2xl text-light-beige"><p>{error.message}</p></div>
        ) : <h3 className="w-max text-light-beige text-2xl mb-3 hover:text-white">loading...</h3>}
        <EndButton type={isEndOfPage ? 'no_data' : 'get_new'} fetchFunction={() => setIsFetchTriggered(true)} />
      </div>
    </div>
  );
};