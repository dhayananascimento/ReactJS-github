import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

export const Container = styled.footer`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto 40px;
  padding: 40px 10px 8px;
  border-top: 1px solid ${(props) => props.theme.colors.primaryBorder};
  background-color: ${(props) => props.theme.colors.background};
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1011px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const List = styled.ul`
  list-style: none;

  display: flex;
  flex-wrap: wrap;

  &:first-child li:first-child {
    font-size: 18px;
  }

  li {
    font-size: 16px;
    margin-right: 16px;
    color: ${(props) => props.theme.colors.secundaryText};

    a {
      color: ${(props) => props.theme.colors.blue};
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export const Figure = styled(FaGithub)`
  opacity: 0.7;
  font-size: 32px;
  fill: var(--grey);

  @media (max-width: 1011px) {
    display: none;
  }
`;
