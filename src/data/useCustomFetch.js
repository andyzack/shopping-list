import React, { useState, useEffect } from 'react';

function useCustomFetch(url) {
  // 1a. Use the data state variable
  const [data, setData] = useState([]);

  // 2a. Use the loading state variable
  const [loading, setLoading] = useState(false);
  const [hasError, setError] = useState(false);

  async function customFetch(url) {
    try {
      const response = await fetch(url);
      const rData = await response.json();
      setData(rData);
    } catch(e) {
      setError(e)
    }
  }

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      customFetch(url);
      setLoading(false);
    }, 2000);
  }, []);

  return [data, loading, hasError]

}

export default useCustomFetch;