import styled from "styled-components";

export const CenterFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CenterFlexFull = styled(CenterFlex)`
  align-items: normal;
`;

export const CenterFlexLink = (props) => <CenterFlex {...props} as="a" />;
export const CenterFlexLinkFull = (props) => (
  <CenterFlexFull {...props} as="a" />
);
