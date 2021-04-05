import React from "react";
import { Link } from "react-router-dom";
import { FiBookOpen, FiBook, FiFolder, FiBox } from "react-icons/fi";
import { Container, TabsWrapper, List } from "./styles";

interface ITabs {
  activeTab?: string;
}

const tabs = {
  OVERVIEW: "OVERVIEW",
  REPOSITORIES: "REPOSITORIES",
  PROJECTS: "PROJECTS",
  PACKAGES: "PACKAGES",
};

const Tabs: React.FC<ITabs> = ({ activeTab }) => {
  return (
    <Container>
      <TabsWrapper>
        <List>
          <li>
            <Link
              to="/"
              className={tabs.OVERVIEW === activeTab ? "active" : undefined}
            >
              <FiBookOpen /> Overview
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className={tabs.REPOSITORIES === activeTab ? "active" : undefined}
            >
              <FiBook /> Repositories <span>40</span>
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className={tabs.PROJECTS === activeTab ? "active" : undefined}
            >
              <FiFolder /> Projects
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className={tabs.PACKAGES === activeTab ? "active" : undefined}
            >
              <FiBox /> Packages
            </Link>
          </li>
        </List>
      </TabsWrapper>
    </Container>
  );
};

export default Tabs;
