import React, { useState } from "react";
import { Container, Main } from "./styles";

import { ThemeProvider } from "styled-components";
import light from "../../styles/themes/light";
import dark from "../../styles/themes/dark";

import Footer from "../Footer";
import Header from "../Header";

const Template: React.FC = ({ children }) => {
  const [theme, setTheme] = useState(light);

  function toogleTheme() {
    setTheme(theme.title === "light" ? dark : light);
  }

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header theme={toogleTheme} />

        <Main>{children}</Main>

        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export default Template;
