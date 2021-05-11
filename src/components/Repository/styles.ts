import styled from "styled-components";

export const Container = styled.div`
  padding: 24px 0;
  border-bottom: 1px solid ${(props) => props.theme.colors.primaryBorder};

  a {
    font-size: 20px;
    font-weight: bold;
    color: ${(props) => props.theme.colors.blue};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  > div {
    display: flex;

    p {
      color: ${(props) => props.theme.colors.secundaryText};
      font-size: 12px;
      margin-top: 12px;

      &:nth-child(1) {
        margin-right: 10px;
      }
    }
  }
`;
