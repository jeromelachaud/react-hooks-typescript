import React from "react";
import Quote from "../components/Quote";
import useQuotesService from "../services/useQuotesService";

const Quotes: React.FC<{}> = () => {
  const service = useQuotesService();
  console.log("service", service);
  console.log("service.payload", service);
  return (
    <div>
      {service.status === "loading" && <div>Loading...</div>}
      {service.status === "loaded" &&
        service.payload.quotes.map(quote => (
          <Quote
            key={quote.uuid}
            content={quote.content}
            source={quote.source}
          />
        ))}
      {service.status === "error" && (
        <div>Error, the backend moved to the dark side.</div>
      )}
    </div>
  );
};

export default Quotes;
