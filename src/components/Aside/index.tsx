import React from "react";
import { Link } from "react-router-dom";
import { FiStar, FiLink, FiMapPin, FiUsers } from "react-icons/fi";

import {
  Container,
  ProfileInfosWrapper,
  EditableProfileInfosWrapper,
  ProfileInteractionWrapper,
  MoreInfosWrapper,
} from "./styles";

const Aside: React.FC = () => {
  return (
    <Container>
      <img
        src="https://avatars.githubusercontent.com/u/62670973?v=4"
        alt="foto do perfil"
      />

      <ProfileInfosWrapper>
        <strong>Dhayana</strong>
        <p>dhayananascimento</p>
      </ProfileInfosWrapper>

      <EditableProfileInfosWrapper>
        <p>
          Desenvolvedora Front-End. Técnica em Informática Industrial. Graduanda
          em Sistemas de Informação.
        </p>

        <Link to="/">Edit profile</Link>

        <ProfileInteractionWrapper>
          <li>
            <Link to="/">
              <FiUsers /> <span>50</span> followers .
            </Link>
          </li>
          <li>
            <Link to="/">
              <span>41</span> following .
            </Link>
          </li>
          <li>
            <Link to="/">
              <FiStar /> <span>13</span>
            </Link>
          </li>
        </ProfileInteractionWrapper>

        <MoreInfosWrapper>
          <li>
            <FiMapPin /> Minas Gerais
          </li>
          <li>
            <FiLink />
            <Link to="https://www.linkedin.com/in/dhayananascimento/">
              https://www.linkedin.com/in/dhayananascimento/
            </Link>
          </li>
        </MoreInfosWrapper>
      </EditableProfileInfosWrapper>
    </Container>
  );
};

export default Aside;
