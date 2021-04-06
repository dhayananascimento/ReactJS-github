import React from "react";
import { Container } from "./styles";

interface IRepository {
  name: string;
  url: string;
  language: string;
  updated: string;
}

const Repository: React.FC<IRepository> = ({
  name,
  url,
  language,
  updated,
}) => {
  const updatedAt = new Date(updated).toDateString();

  return (
    <Container>
      <a href={url}>{name}</a>

      <div>
        <p>{language}</p>

        <p>Updated at {updatedAt} </p>
      </div>
    </Container>
  );
};

export default Repository;
