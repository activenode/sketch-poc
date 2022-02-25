import styled from "styled-components";

const TopbarWrapper = styled.div`
  height: 64px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: white;
`;

export const Topbar = () => {
  return <TopbarWrapper>Sketch Logo here</TopbarWrapper>;
};
