import { useState, useEffect } from "react";
const useFetch = (url) => {
  const [loadedData, setLoadedData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => setLoadedData(data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [url]);

  return { loadedData, loading, error };
};

export default useFetch;
