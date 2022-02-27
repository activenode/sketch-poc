import styled from "styled-components";

const CenterFlexDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

/**
 * Full makes sure that elements are not centered within the direction
 * and hence take full space themselves
 */
const CenterFlexDivFull = styled(CenterFlexDiv)`
  align-items: normal;
`;

export const CenterFlex = {
  div: CenterFlexDiv,
  a: (props) => <CenterFlexDiv {...props} as="a" />,
  button: (props) => <CenterFlexDiv {...props} as="button" />,
};

export const CenterFlexFull = {
  div: CenterFlexDivFull,
  a: (props) => <CenterFlexDivFull {...props} as="a" />,
  button: (props) => <CenterFlexDivFull {...props} as="button" />,
};
