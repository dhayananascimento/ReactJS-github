import React from "react";
import { Link } from "react-router-dom";
import { Container, List, Figure } from "./styles";

const Footer: React.FC = () => {
  return (
    <Container>
      <List>
        <li>© 2021 GitHub, Inc.</li>
        <li>
          <Link to="/">Terms</Link>
        </li>
        <li>
          <Link to="/">Privacy</Link>
        </li>
        <li>
          <Link to="/">Security</Link>
        </li>
        <li>
          <Link to="/">Status</Link>
        </li>
        <li>
          <Link to="/">Docs</Link>
        </li>
      </List>

      <Figure title="Ícone github" />

      <List>
        <li>
          <Link to="/">Contact GitHub</Link>
        </li>
        <li>
          <Link to="/">Pricing</Link>
        </li>
        <li>
          <Link to="/">API</Link>
        </li>
        <li>
          <Link to="/">Training</Link>
        </li>
        <li>
          <Link to="/">Blog</Link>
        </li>
        <li>
          <Link to="/">About</Link>
        </li>
      </List>
    </Container>
  );
};

export default Footer;
