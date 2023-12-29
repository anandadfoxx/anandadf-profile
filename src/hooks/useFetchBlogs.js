import blogApi from "api/blogApi";
const { useState, useEffect } = require("react");

export default function useFetchBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [apiError, setApiError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [pageCounter, setPageCounter] = useState(0);
  const [isFetchTriggered, setIsFetchTriggered] = useState(false);
  const [isEndOfPage, setIsEndOfPage] = useState(false);

  async function fetchData() {
    console.log(`called to ${pageCounter}`)
    const { data: body } = await blogApi.getList(pageCounter);
    setPageCounter(pageCounter + 1);
    return body['blogs'];
  }

  useEffect(() => {
    if (!isEndOfPage) {
      setIsLoading(true);
      fetchData()
      .then((data) => {
        const newData = [...blogs, ...data];
        if (data.length !== 10) {
          setIsEndOfPage(true);
        }
        console.log(data);
        setBlogs(newData);
      })
      .catch((err) => setApiError(err));
      setIsFetchTriggered(false);
      setIsLoading(false);
    }
  }, [isFetchTriggered]);

  return [blogs, isEndOfPage, isLoading, apiError, setIsFetchTriggered];
}