import React from "react";
import { Link } from "react-router-dom";
import { FiBookOpen, FiBook, FiFolder, FiBox } from "react-icons/fi";
import { Container, TabsWrapper, List } from "./styles";

interface ITabs {
  activeTab?: string;
  numberOfRepos: number;
  changeActiveTab: (tab: string) => void;
}

const tabs = {
  OVERVIEW: "OVERVIEW",
  REPOSITORIES: "REPOSITORIES",
  PROJECTS: "PROJECTS",
  PACKAGES: "PACKAGES",
};

const Tabs: React.FC<ITabs> = ({
  activeTab,
  numberOfRepos,
  changeActiveTab,
}) => {
  return (
    <Container>
      <TabsWrapper>
        <List>
          <li>
            <Link
              to="/"
              className={tabs.OVERVIEW === activeTab ? "active" : undefined}
              onClick={() => {
                changeActiveTab(tabs.OVERVIEW);
              }}
            >
              <FiBookOpen /> Overview
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className={tabs.REPOSITORIES === activeTab ? "active" : undefined}
              onClick={() => {
                changeActiveTab(tabs.REPOSITORIES);
              }}
            >
              <FiBook /> Repositories <span>{numberOfRepos}</span>
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className={tabs.PROJECTS === activeTab ? "active" : undefined}
              onClick={() => {
                changeActiveTab(tabs.PROJECTS);
              }}
            >
              <FiFolder /> Projects
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className={tabs.PACKAGES === activeTab ? "active" : undefined}
              onClick={() => {
                changeActiveTab(tabs.PACKAGES);
              }}
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
