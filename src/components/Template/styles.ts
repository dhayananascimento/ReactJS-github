import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.background};

  min-height: 100vh;
`;

export const Main = styled.div`
  flex: 1;
  padding: 40px 0;
`;
