import React from "react";
import { Link } from "react-router-dom";
import {
  ContentWrapper,
  Content,
  SearchWrapper,
  RepositoriesWrapper,
} from "./styles";
import { FiBook } from "react-icons/fi";

import Repository from "../../components/Repository";
import Template from "../../components/Template";
import Aside from "../../components/Aside";
import Tabs from "../../components/Tabs";

function Repositories() {
  return (
    <Template>
      <Tabs />

      <ContentWrapper>
        <Aside
          name="Dhayana"
          login="dhayananascimento"
          bio="bio"
          avatar="https://avatars.githubusercontent.com/u/62670973?v=4"
          stars={2}
          followers={20}
          following={20}
          location="Minas Gerais"
          blog="https://www.linkedin.com/in/dhayananascimento/"
        />

        <Content>
          <SearchWrapper>
            <input type="text" placeholder="Find a repository..." />

            <select name="type">
              <option value="">Type: All</option>
              <option value="all">All</option>
              <option value="public">Public</option>
              <option value="private">Private</option>
              <option value="sources">Sources</option>
              <option value="forks">Forks</option>
              <option value="archived">Archived</option>
              <option value="mirrors">Mirrors</option>
            </select>

            <select name="Language">
              <option value="">Language: All</option>
              <option value="all">All</option>
              <option value="html">HTML</option>
              <option value="typescript">TypeScript</option>
              <option value="javascript">JavaScript</option>
              <option value="css">CSS</option>
            </select>

            <Link to="/">
              <FiBook /> New
            </Link>
          </SearchWrapper>

          <RepositoriesWrapper>
            <Repository
              name="Repositorio 1"
              url="/"
              language="HTML"
              updated="2021/01/01"
            />

            <Repository
              name="Repositorio 2"
              url="/"
              language="CSS"
              updated="2021/02/02"
            />
          </RepositoriesWrapper>
        </Content>
      </ContentWrapper>
    </Template>
  );
}

export default Repositories;
