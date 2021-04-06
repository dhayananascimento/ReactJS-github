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
    font-size: 28px;
  }

  p {
    font-size: 22px;
    word-wrap: break-word;
    color: var(--grey-text);
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

    border: 1px solid var(--border);
    background-color: var(--white-button);
    margin-bottom: 15px;
    border-radius: 6px;

    transition: background-color 0.2s;

    &:hover {
      background-color: var(--hover);
    }
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
    color: var(--black-text);

    a {
      text-decoration: none;
      font-size: 14px;
      color: inherit;

      span {
        font-weight: bold;
        margin-right: 4px;
      }

      svg {
        margin-right: 4px;
        color: var(--icon);
      }
    }

    &:hover {
      color: var(--blue-text);

      a svg {
        color: var(--blue-text);
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
        color: var(--blue-text);
        text-decoration: underline;
      }
    }
  }
`;
