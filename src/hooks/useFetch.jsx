import { useEffect, useState } from "react";

export default function useFetch(url, method, headers) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [result, setResult] = useState(null);

  useEffect(() => {
    async function requestFetch() {
      try {
        setLoading(true);
        setError(false);
        const response = await fetch(url, {
          method: method || "GET",
          headers: headers,
        });
        const data = await response.json();
        setLoading(false);
        setResult(data);
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
      }
    }
    requestFetch();
    // if we provide url, method, headers in the dependency array it will in a infinite loop beacause header is an object. When rerendering every time it acts as a new object and hence re-rendered again and again.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    loading,
    error,
    result,
  };
}
