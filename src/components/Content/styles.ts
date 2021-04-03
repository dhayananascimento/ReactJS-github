import styled from "styled-components";

export const ContentContainer = styled.div`
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

    transition: background-color 0.2s;

    cursor: pointer;
    border-radius: 6px;
    border: 1px solid var(--border);
    background-color: var(--white-button);

    &:hover {
      background-color: var(--hover);
    }
  }

  a {
    opacity: 0.9;
    height: 32px;
    padding: 5px 10px;
    border-radius: 6px;
    text-decoration: none;
    color: var(--white-text);
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

export const RepositoryWrapper = styled.div`
  display: flex;
  flex-direction: column;

  > div {
    padding: 24px 0;
    border-bottom: 1px solid var(--border);

    a {
      font-size: 20px;
      font-weight: bold;
      color: var(--blue-text);
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }

    > div {
      p {
        font-size: 12px;
        margin-top: 12px;

        &:nth-child(1) {
          margin-right: 10px;
        }
      }
      display: flex;
    }
  }
`;
