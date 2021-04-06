import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiBook } from "react-icons/fi";
import axios from "axios";

import {
  ContentWrapper,
  Content,
  SearchWrapper,
  RepositoriesWrapper,
  ActivityIndicator,
} from "./styles";

import Repository from "../../components/Repository";
import Template from "../../components/Template";
import Aside from "../../components/Aside";
import Tabs from "../../components/Tabs";

interface IData {
  login: string;
  avatar_url: string;
  repos_url: string;
  name: string;
  company: string;
  blog: string;
  location: string;
  bio: string;
  twitter_username: string;
  public_repos: number;
  followers: number;
  following: number;
  stars: number;
}

interface IRepos {
  name: string;
  html_url: string;
  language: string;
  updated_at: string;
}

function Repositories() {
  const [data, setData] = useState<IData>();
  const [repositories, setRepositories] = useState<IRepos[]>([]);

  useEffect(() => {
    axios
      .get<IData>("https://api.github.com/users/dhayananascimento")
      .then((response) => {
        axios
          .get(response.data.repos_url)
          .then((repos) => {
            setRepositories(repos.data);
          })
          .catch((error) => {
            console.log("error: ", error);
          });

        axios
          .get("https://api.github.com/users/dhayananascimento/starred")
          .then((stars) => {
            setData({ ...response.data, stars: stars.data.length });
          })
          .catch((error) => {
            console.log("error: ", error);
          });
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  }, []);

  if (data)
    return (
      <Template>
        <Tabs
          activeTab="REPOSITORIES"
          numberOfRepos={data?.public_repos || 0}
        />

        <ContentWrapper>
          <Aside
            name={data?.name || ""}
            login={data?.login || ""}
            avatar={data?.avatar_url || "/"}
            followers={data?.followers || 0}
            following={data?.following || 0}
            stars={data?.stars || 0}
            bio={data?.bio}
            location={data?.location}
            company={data?.company}
            blog={data?.blog}
            twitter={data?.twitter_username}
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
              {repositories.map((repo, index) => {
                return (
                  <Repository
                    key={`repo${index}`}
                    name={repo.name}
                    url={repo.html_url}
                    language={repo.language}
                    updated={repo.updated_at}
                  />
                );
              })}
            </RepositoriesWrapper>
          </Content>
        </ContentWrapper>
      </Template>
    );
  else
    return (
      <Template>
        <ActivityIndicator>Carregando...</ActivityIndicator>
      </Template>
    );
}

export default Repositories;
