import React from "react";

export interface Props {
  content: string;
  source: string;
}

const Quote: React.FC<Props> = ({ content, source }) => {
  return (
    <p>
      <span>{content}</span>
      <br />
      <span>{source}</span>
    </p>
  );
};

export default Quote;
