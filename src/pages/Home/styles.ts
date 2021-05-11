import styled from "styled-components";

export const ContentWrapper = styled.div`
  max-width: 1280px;
  padding: 0 24px;
  margin: 0 auto;

  display: flex;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const Content = styled.div`
  width: 100%;
  padding: 0 8px;
  color: ${(props) => props.theme.colors.primaryText};
`;

export const SearchWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  padding: 20px 0;
  border-bottom: 1px solid ${(props) => props.theme.colors.primaryBorder};

  input {
    flex: 1;
    height: 32px;
    padding: 10px;
    font-size: 14px;
    margin-top: 5px;
    margin-right: 15px;

    color: ${(props) => props.theme.colors.primaryText};
    border: 1px solid
      ${(props) =>
        props.theme.title === "light"
          ? props.theme.colors.primaryBorder
          : props.theme.colors.secundaryBorder};
    background-color: ${(props) => props.theme.colors.background};
    border-radius: 6px;
  }

  select {
    height: 32px;
    font-size: 14px;
    padding: 5px 10px;
    margin-top: 5px;
    margin-right: 15px;

    cursor: pointer;
    border-radius: 6px;
    transition: background-color 0.2s;

    color: ${(props) => props.theme.colors.primaryText};
    border: 1px solid ${(props) => props.theme.colors.primaryBorder};
    background-color: ${(props) => props.theme.colors.primaryButton};

    option {
      color: ${(props) => props.theme.colors.primaryText};
      background-color: ${(props) => props.theme.colors.primaryButton};
    }

    &:hover {
      background-color: var(--hover);
    }
  }

  a {
    opacity: 0.9;
    height: 32px;
    padding: 5px 10px;
    margin-top: 5px;
    text-decoration: none;
    color: var(--white);

    border-radius: 6px;
    background-color: var(--green-button);
    transition: opacity 0.2s;

    display: flex;
    align-items: center;

    svg {
      margin-right: 4px;
    }

    &:hover {
      opacity: 1;
    }
  }
`;

export const RepositoriesWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ActivityIndicator = styled.h1`
  text-align: center;
  margin: auto 0;
`;
