import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  overflow: auto;
  border-bottom: 1px solid ${(props) => props.theme.colors.primaryBorder};
`;

export const TabsWrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  height: 48px;
  margin: 0 auto;

  @media (max-width: 767px) {
    overflow-x: auto;
  }
`;

export const List = styled.ul`
  list-style: none;
  margin-left: 25%;
  width: 75%;

  display: flex;

  li {
    a {
      display: flex;
      align-items: center;

      height: 48px;
      font-size: 14px;
      padding: 8px 16px;
      text-decoration: none;
      color: ${(props) => props.theme.colors.primaryText};

      border-bottom: 3px solid transparent;
      transition: border 0.2s ease-in;

      svg {
        font-size: 15px;
        margin-right: 8px;
        color: var(--icon);
      }

      span {
        padding: 8px;
        margin-left: 8px;
        border-radius: 40%;
        background-color: var(--hover);
      }

      &:hover {
        border-bottom: 3px solid var(--hover);
      }

      &.active {
        font-weight: bold;
        border-bottom: 3px solid var(--underline);

        svg {
          color: ${(props) => props.theme.colors.primaryText};
        }
      }
    }
  }

  @media (max-width: 767px) {
    width: 100%;
    margin-left: 0;
    padding: 0 16px;
  }
`;
