import React from "react";
import { Main, ContentWrapper } from "./styles";

import Tab from "../Tab";
import Aside from "../Aside";
import Content from "../Content";

const MainComponent: React.FC = () => {
  return (
    <Main>
      <Tab />
      <ContentWrapper>
        <Aside />
        <Content />
      </ContentWrapper>
    </Main>
  );
};

export default MainComponent;
