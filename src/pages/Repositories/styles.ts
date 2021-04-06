import styled from "styled-components";

export const ContentWrapper = styled.div`
  max-width: 1280px;
  padding: 0 24px;
  margin: 0 auto;

  display: flex;
`;

export const Content = styled.div`
  width: 100%;
  padding: 0 8px;
  color: var(--black-text);
`;

export const SearchWrapper = styled.div`
  display: flex;

  padding: 20px 0;
  border-bottom: 1px solid var(--border);

  input {
    flex: 1;
    height: 32px;
    padding: 10px;
    font-size: 14px;
    margin-right: 15px;

    border: 1px solid var(--border);
    border-radius: 6px;
  }

  select {
    height: 32px;
    font-size: 14px;
    padding: 5px 10px;
    margin-right: 15px;

    cursor: pointer;
    border-radius: 6px;
    border: 1px solid var(--border);
    background-color: var(--white-button);

    transition: background-color 0.2s;

    &:hover {
      background-color: var(--hover);
    }
  }

  a {
    opacity: 0.9;
    height: 32px;
    padding: 5px 10px;
    text-decoration: none;
    color: var(--white-text);

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
`