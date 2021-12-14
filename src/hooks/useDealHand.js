import { useEffect, useState } from "react";

export const useDealHand = () => {
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const url =
    "https://texas-holdem-hand-generator.herokuapp.com/api/deal-texas-holdem?players=8";

  const dealNewHand = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setResult(data.results[0]);
    } catch (err) {
      setError(err);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        const data = await response.json();
        setResult(data.results[0]);
      } catch (err) {
        setError(err);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [url]);

  return {
    isLoading,
    result,
    dealNewHand,
    error
  };
};
