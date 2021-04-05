import React from "react";
import { Link } from "react-router-dom";
import {
  FiStar,
  FiLink,
  FiMapPin,
  FiUsers,
  FiTwitter,
  FiCoffee,
} from "react-icons/fi";

import {
  Container,
  ProfileInfosWrapper,
  EditableProfileInfosWrapper,
  ProfileInteractionWrapper,
  MoreInfosWrapper,
} from "./styles";

interface IAside {
  login: string;
  name: string;
  avatar: string;
  stars: number;
  followers: number;
  following: number;
  
  bio?: string;
  location?: string;
  blog?: string;
  twitter?: string;
  company?: string;
}

const Aside: React.FC<IAside> = ({
  login,
  name,
  avatar,
  bio,
  stars,
  followers,
  following,
  twitter,
  company,
  location,
  blog,
}) => {
  return (
    <Container>
      <img src={avatar} alt={name} />

      <ProfileInfosWrapper>
        <strong>{name}</strong>
        <p>{login}</p>
      </ProfileInfosWrapper>

      <EditableProfileInfosWrapper>
        {bio && <p>{bio}</p>}

        <Link to="/">Edit profile</Link>

        <ProfileInteractionWrapper>
          <li>
            <Link to="/">
              <FiUsers /> <span>{followers}</span> followers .
            </Link>
          </li>
          <li>
            <Link to="/">
              <span>{following}</span> following .
            </Link>
          </li>
          <li>
            <Link to="/">
              <FiStar /> <span>{stars}</span>
            </Link>
          </li>
        </ProfileInteractionWrapper>

        <MoreInfosWrapper>
          <li>
            {company && (
              <>
                <FiCoffee /> {company}
              </>
            )}
          </li>
          <li>
            {location && (
              <>
                <FiMapPin /> {location}
              </>
            )}
          </li>
          <li>
            {blog && (
              <>
                <FiLink />
                <a href={blog}>{blog}</a>
              </>
            )}
          </li>
          <li>
            {twitter && (
              <>
                <FiTwitter /> 
                <a href={`https://twitter.com/${twitter}`}>{twitter}</a>
              </>
            )}
          </li>
        </MoreInfosWrapper>
      </EditableProfileInfosWrapper>
    </Container>
  );
};

export default Aside;
