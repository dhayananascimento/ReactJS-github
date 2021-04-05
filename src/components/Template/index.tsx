import React from "react";
import { Container, Main } from "./styles";

import Footer from "../Footer";
import Header from "../Header";

const Template: React.FC = ({ children }) => {
  return (
    <Container>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Container>
  );
};

export default Template;
