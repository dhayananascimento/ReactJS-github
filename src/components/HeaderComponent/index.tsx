import React from "react";
import {
  Header,
  ContainerBell,
  Navigation,
  InputContainer,
  List,
  GitHubIcon,
  BellIcon,
} from "./styles";

const HeaderComponent: React.FC = () => {
  return (
    <Header>
      <GitHubIcon title="Ícone github" />

      <Navigation>
        <InputContainer>
          <input placeholder="Search or jump to..." type="text" />
          <figure>/</figure>
        </InputContainer>

        <List>
          <li>
            <a href="/">Pull requests</a>
          </li>
          <li>
            <a href="/">Issues</a>
          </li>
          <li>
            <a href="/">Marketplace</a>
          </li>
          <li>
            <a href="/">Explore</a>
          </li>
        </List>
      </Navigation>

      <ContainerBell title="Notificações">
        <BellIcon />
      </ContainerBell>
    </Header>
  );
};

export default HeaderComponent;
