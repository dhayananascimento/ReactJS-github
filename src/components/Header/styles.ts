import styled, { css } from "styled-components";
import { FaGithub, FaBell } from "react-icons/fa";

export const Container = styled.header`
  width: 100%;
  min-height: 62px;
  padding: 8px 16px;
  background-color: ${(props) => props.theme.colors.header};

  display: flex;
  align-items: center;
`;

export const Navigation = styled.nav`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const InputWrapper = styled.div`
  input::placeholder {
    color: ${(props) => props.theme.colors.headerText};
  }

  input:-ms-input-placeholder {
    color: ${(props) => props.theme.colors.headerText};
  }

  input::-ms-input-placeholder {
    color: ${(props) => props.theme.colors.headerText};
  }

  display: flex;
  align-items: center;

  margin-right: 16px;
  border-radius: 5px;

  width: 289px;
  opacity: 0.7;
  color: ${(props) => props.theme.colors.headerText};
  background-color: ${(props) =>
    props.theme.title === "light"
      ? "transparent"
      : props.theme.colors.background};
  border: 1px solid ${(props) => props.theme.colors.secundaryBorder};
  transition: width 0.2s linear;

  input {
    border: none;
    height: 30px;
    width: 245px;
    color: inherit;
    font-size: 14px;
    padding: 0 12px;
    background-color: transparent;
    transition: width 0.2s linear;
  }

  figure {
    width: 20px;
    height: 20px;
    margin: 0 12px;
    line-height: 20px;
    text-align: center;
    border-radius: 5px;
    color: ${(props) => props.theme.colors.secundaryText};
    border: 1px solid ${(props) => props.theme.colors.secundaryBorder};
  }

  &:focus-within figure {
    display: none;
  }

  &:focus-within input {
    color: ${(props) => props.theme.colors.primaryText};
    width: 100%;
  }

  &:focus-within input::placeholder {
    color: ${(props) => props.theme.colors.primaryText};
  }

  &:focus-within input:-ms-input-placeholder {
    color: ${(props) => props.theme.colors.primaryText};
  }

  &:focus-within input::-ms-input-placeholder {
    color: ${(props) => props.theme.colors.primaryText};
  }

  &:focus-within {
    opacity: 1;
    width: 500px;
    background-color: ${(props) => props.theme.colors.background};
  }

  @media (max-width: 950px) {
    &:focus-within {
      width: 100%;
    }
  }

  @media (max-width: 767px) {
    width: 100%;

    input {
      width: 100%;
    }
  }
`;

export const List = styled.ul`
  list-style: none;
  margin: 5px 0;

  display: flex;
  flex-shrink: 0;
  flex-wrap: wrap;

  li {
    color: ${(props) => props.theme.colors.headerText};
    transition: opacity 0.4s;
    margin-right: 16px;
    font-weight: bold;
    font-size: 14px;

    &:hover {
      opacity: 0.6;
    }

    a {
      color: inherit;
      text-decoration: none;
    }
  }

  @media (max-width: 767px) {
    flex-shrink: 1;
  }
`;

export const BellWrapper = styled.figure`
  position: relative;
  width: 20px;

  &::before {
    content: "";
    width: 10px;
    height: 10px;
    z-index: 1;

    opacity: 1 !important;
    border-radius: 50%;
    background-color: ${(props) => props.theme.colors.blue};

    position: absolute;
    top: 0;
    right: 0;
  }
`;

export const icon = css`
  cursor: pointer;
  margin-right: 16px;
  color: var(--white);
  border-radius: 50%;

  transition: opacity 0.4s;
  flex-shrink: 0;

  &:hover {
    opacity: 0.6;
  }
`;

export const BellIcon = styled(FaBell)`
  ${icon}
  font-size: 20px;
`;

export const GitHubIcon = styled(FaGithub)`
  ${icon}
  font-size: 32px;
`;
