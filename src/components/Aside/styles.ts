import styled from "styled-components";

export const Container = styled.div`
  width: 25%;
  padding: 0px 8px;
  margin-top: -30px;

  display: flex;
  flex-direction: column;

  @media (max-width: 767px) {
    width: 100%;
    margin-top: 20px;
  }
`;

export const ProfileInfosWrapper = styled.div`
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: 20px;
  }

  strong {
    color: ${(props) => props.theme.colors.primaryText};
    font-size: 28px;
  }

  p {
    font-size: 22px;
    word-wrap: break-word;
    color: ${(props) => props.theme.colors.secundaryText};
    margin-bottom: 20px;
  }

  @media (max-width: 767px) {
    flex-direction: row;
    align-items: center;

    img {
      width: 60px;
      height: 60px;
      margin-right: 10px;
    }
  }
`;

export const EditableProfileInfosWrapper = styled.div`
  color: ${(props) => props.theme.colors.primaryText};

  p {
    font-size: 18px;
    margin-bottom: 20px;
  }

  > a {
    text-decoration: none;
    text-align: center;
    line-height: 32px;

    display: block;
    color: inherit;
    width: 100%;
    height: 32px;

    border: 1px solid ${(props) => props.theme.colors.primaryBorder};
    background-color: ${(props) => props.theme.colors.primaryButton};
    margin-bottom: 15px;
    border-radius: 6px;

    transition: background-color 0.2s;
  }
`;

export const ProfileInteractionWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  list-style: none;
  margin-bottom: 20px;

  li {
    margin-left: 4px;
    color: ${(props) => props.theme.colors.secundaryText};

    a {
      text-decoration: none;
      font-size: 14px;
      color: inherit;

      span {
        color: ${(props) => props.theme.colors.primaryText};
        font-weight: bold;
        margin-right: 4px;
      }

      svg {
        margin-right: 4px;
        color: var(--icon);
      }
    }

    &:hover {
      color: ${(props) => props.theme.colors.blue};

      a svg,
      a span {
        color: ${(props) => props.theme.colors.blue};
      }
    }
  }
`;

export const MoreInfosWrapper = styled.ul`
  list-style: none;

  li {
    display: flex;

    font-size: 14px;
    margin: 4px 0;

    svg {
      font-size: 14px;
      margin-right: 4px;
      color: var(--icon);
    }

    a {
      width: 100%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;

      display: inline-block;
      text-decoration: none;
      color: inherit;

      &:hover {
        color: ${(props) => props.theme.colors.blue};
        text-decoration: underline;
      }
    }
  }
`;
