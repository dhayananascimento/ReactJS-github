import React from "react";
import { FiBook } from "react-icons/fi";
import { ContentContainer, SearchWrapper, RepositoryWrapper } from "./styles";

const Content: React.FC = () => {
  return (
    <ContentContainer>
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

        <a href="/">
          <FiBook /> New
        </a>
      </SearchWrapper>

      <RepositoryWrapper>
        <div>
          <a href="/">Repositório 1</a>
          <div>
            <p> <span></span> TypeScript</p> <p>Updated 8 days ago</p>
          </div>
        </div>

        <div>
          <a href="/">Repositório 2</a>
          <div>
            <p> <span></span>HTML</p> <p>Updated 8 days ago</p>
          </div>
        </div>
      </RepositoryWrapper>
    </ContentContainer>
  );
};

export default Content;
