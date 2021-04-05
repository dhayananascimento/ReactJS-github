import React from "react";
import { Link } from "react-router-dom";
import { FiBookOpen, FiBook, FiFolder, FiBox } from "react-icons/fi";
import { Container, TabsWrapper, List } from "./styles";

const Tabs: React.FC = () => {
  return (
    <Container>
      <TabsWrapper>
        <List>
          <li>
            <Link to="/">
              <FiBookOpen /> Overview
            </Link>
          </li>
          <li>
            <Link to="/" className="active">
              <FiBook /> Repositories <span>40</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <FiFolder /> Projects
            </Link>
          </li>
          <li>
            <Link to="/">
              <FiBox /> Packages
            </Link>
          </li>
        </List>
      </TabsWrapper>
    </Container>
  );
};

export default Tabs;
