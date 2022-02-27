import styled from "styled-components";
import { Link } from "react-router-dom";

const centerStyles = `
display: flex;
justify-content: center;
align-items: center;
`;

const CenterFlexDiv = styled.div`
  ${centerStyles}
`;

const CenterFlexLink = styled(Link)`
  ${centerStyles}
`;

/**
 * Full makes sure that elements are not centered within the direction
 * and hence take full space themselves
 */
const CenterFlexDivFull = styled(CenterFlexDiv)`
  align-items: normal;
`;
const CenterFlexLinkFull = styled(CenterFlexLink)`
  align-items: normal;
`;

export const CenterFlex = {
  div: CenterFlexDiv,
  a: (props) => <CenterFlexDiv {...props} as="a" />,
  button: (props) => <CenterFlexDiv {...props} as="button" />,
  Link: CenterFlexLink,
};

export const CenterFlexFull = {
  div: CenterFlexDivFull,
  a: (props) => <CenterFlexDivFull {...props} as="a" />,
  button: (props) => <CenterFlexDivFull {...props} as="button" />,
  Link: CenterFlexLinkFull,
};
