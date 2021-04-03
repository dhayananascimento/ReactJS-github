import React from "react";
import {
  AsideWrapper,
  ProfileWrapper,
  ProfileInfosWrapper,
  MoreInformationWrapper,
  EditableProfileInfoWrapper,
} from "./styles";
import { FiStar, FiLink, FiMapPin, FiUsers } from "react-icons/fi";

const Aside: React.FC = () => {
  return (
    <AsideWrapper>
      <img
        src="https://avatars.githubusercontent.com/u/62670973?v=4"
        alt="foto do perfil"
      />

      <ProfileWrapper>
        <strong>Dhayana</strong>
        <p>dhayananascimento</p>
      </ProfileWrapper>

      <EditableProfileInfoWrapper>
        <p>
          Desenvolvedora Front-End. Técnica em Informática Industrial. Graduanda
          em Sistemas de Informação.
        </p>

        <a href="/">Edit profile</a>

        <ProfileInfosWrapper>
          <li>
            <a href="/">
              <FiUsers /> <span>50</span> followers .
            </a>
          </li>
          <li>
            <a href="/">
              <span>41</span> following .
            </a>
          </li>
          <li>
            <a href="/">
              <FiStar /> <span>13</span>
            </a>
          </li>
        </ProfileInfosWrapper>

        <MoreInformationWrapper>
          <li>
            <FiMapPin /> Minas Gerais
          </li>
          <li>
            <FiLink />
            <a href="https://www.linkedin.com/in/dhayananascimento/">
              https://www.linkedin.com/in/dhayananascimento/
            </a>
          </li>
        </MoreInformationWrapper>
      </EditableProfileInfoWrapper>
    </AsideWrapper>
  );
};

export default Aside;
