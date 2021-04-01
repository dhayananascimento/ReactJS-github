import React from "react";
import { ContainerFooter, Footer, List, Figure } from "./styles";

const FooterComponent: React.FC = () => {
  return (
    <ContainerFooter>
      <Footer>
        <List>
          <li>© 2021 GitHub, Inc.</li>
          <li>
            <a href="/">Terms</a>
          </li>
          <li>
            <a href="/">Privacy</a>
          </li>
          <li>
            <a href="/">Security</a>
          </li>
          <li>
            <a href="/">Status</a>
          </li>
          <li>
            <a href="/">Docs</a>
          </li>
        </List>

        <Figure title="Ícone github" />

        <List>
          <li>
            <a href="/">Contact GitHub</a>
          </li>
          <li>
            <a href="/">Pricing</a>
          </li>
          <li>
            <a href="/">API</a>
          </li>
          <li>
            <a href="/">Training</a>
          </li>
          <li>
            <a href="/">Blog</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
        </List>
      </Footer>
    </ContainerFooter>
  );
};

export default FooterComponent;
