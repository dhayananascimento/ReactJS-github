import React from "react";
import GlobalStyles from "./styles";

import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import MainComponent from "./components/MainComponent";

function App() {
  return (
    <React.Fragment>
      <HeaderComponent />
      <MainComponent />
      <FooterComponent />

      <GlobalStyles />
    </React.Fragment>
  );
}

export default App;
