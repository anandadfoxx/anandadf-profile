import BlogCard from "components/blog/BlogCard";
import EndButton from "components/blog/EndButton";
import useFetchBlogs from "hooks/useFetchBlogs";

export default function Blog() {
  const [blogs, isEndOfPage, isLoading, apiError, setIsFetchTriggered] = useFetchBlogs();
  // fetchData()

  return (
    <div className="flex-1 py-6 flex flex-col items-center sections overflow-auto">
      <div id="blog-list" className="w-7/12 flex flex-col items-center">
        {!isLoading && (
          !apiError ? (
            <ul className="w-full">
              {
                blogs.map((blog, index) => (
                  <li key={index}>
                    <BlogCard link={blog.slug} title={blog.title} date={blog.date_posted} description={blog.short_description} lineDiv={true} />
                  </li>
                ))
              }
            </ul>
          ) : (
            <div><p>{apiError.message}</p></div>
          )
        )}
        <EndButton type={isEndOfPage ? 'no_data' : 'get_new'} fetchFunction={() => setIsFetchTriggered(true)} />
      </div>
    </div>
  );
};