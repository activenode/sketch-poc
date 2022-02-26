import styled from "styled-components";

export const CenterFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CenterFlexLink = (props) => <CenterFlex {...props} as="a" />;
