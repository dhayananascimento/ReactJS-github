import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  GitHubIcon,
  Navigation,
  InputWrapper,
  List,
  BellWrapper,
  BellIcon,
} from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <GitHubIcon title="Ícone github" />

      <Navigation>
        <InputWrapper>
          <input placeholder="Search or jump to..." type="text" />
          <figure>/</figure>
        </InputWrapper>

        <List>
          <li>
            <Link to="/">Pull requests</Link>
          </li>
          <li>
            <Link to="/">Issues</Link>
          </li>
          <li>
            <Link to="/">Marketplace</Link>
          </li>
          <li>
            <Link to="/">Explore</Link>
          </li>
        </List>
      </Navigation>

      <BellWrapper title="Notificações">
        <BellIcon />
      </BellWrapper>
    </Container>
  );
};

export default Header;
