import { useEffect, useState } from "react";
import { Quote } from "../types/Quote";
import { Service } from "../types/Service";

export interface Quotes {
  quotes: Quote[];
}

const useQuoteService = () => {
  const [result, setResult] = useState<Service<Quotes>>({
    status: "loading"
  });

  useEffect(() => {
    fetch("http://localhost:7777/results")
      .then(response => response.json())
      .then(response => setResult({ status: "loaded", payload: response }))
      .catch(error => setResult({ status: "error", error }));
  }, []);

  return result;
};

export default useQuoteService;
