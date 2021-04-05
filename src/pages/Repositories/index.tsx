import React from "react";
import { Link } from "react-router-dom";
import {
  ContentWrapper,
  Content,
  SearchWrapper,
  RepositoryWrapper,
} from "./styles";
import { FiBook } from "react-icons/fi";

import Template from "../../components/Template";
import Tabs from "../../components/Tabs";
import Aside from "../../components/Aside";

function Repositories() {
  return (
    <Template>
      <Tabs />

      <ContentWrapper>
        <Aside />

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

          <RepositoryWrapper>
            <div>
              <Link to="/">Repositório 1</Link>
              <div>
                <p>
                  {" "}
                  <span></span> TypeScript
                </p>{" "}
                <p>Updated 8 days ago</p>
              </div>
            </div>

            <div>
              <Link to="/">Repositório 2</Link>
              <div>
                <p>
                  {" "}
                  <span></span>HTML
                </p>{" "}
                <p>Updated 8 days ago</p>
              </div>
            </div>
          </RepositoryWrapper>
        </Content>
      </ContentWrapper>
    </Template>
  );
}

export default Repositories;
