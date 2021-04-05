import React from "react";
import { Link } from "react-router-dom";
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
  return (
    <Container>
      <Link to={url}>{name}</Link>

      <div>
        <p>{language}</p>

        <p>Updated at {updated}</p>
      </div>
    </Container>
  );
};

export default Repository;
