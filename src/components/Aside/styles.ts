import styled from "styled-components";

export const AsideWrapper = styled.div`
  width: 25%;
  padding: 0px 8px;
  display: flex;
  flex-direction: column;
  margin-top: -30px;

  img {
    width: 100%;
    height: auto;
    border-radius: 50%;
    margin: 0 auto;
  }
`;

export const ProfileWrapper = styled.div`
  margin: 20px 0 20px;

  strong {
    font-size: 28px;
  }

  p {
    font-size: 22px;
    color: var(--grey);
  }
`;

export const EditableProfileInfoWrapper = styled.div`
  p {
    font-size: 18px;
    margin-bottom: 20px;
  }

  > a {
    text-decoration: none;
    text-align: center;
    line-height: 32px;

    border: 1px solid var(--border);
    background-color: #fafbfc;
    margin-bottom: 15px;
    border-radius: 6px;
    display: block;

    color: inherit;
    width: 100%;
    height: 32px;
  }
`;

export const ProfileInfosWrapper = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  list-style: none;
  margin-bottom: 20px;

  li {
    margin-left: 4px;
    color: var(--black);

    a {
      text-decoration: none;
      font-size: 14px;
      color: inherit;

      span {
        font-weight: bold;
        font-size: 14px;
        margin-right: 4px;
      }

      svg {
        font-size: 14px;
        margin-right: 4px;
        color: var(--icon);
      }
    }
  }
`;

export const MoreInformationWrapper = styled.ul`
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
        color: pink;
        text-decoration: underline;
      }
    }
  }
`;
