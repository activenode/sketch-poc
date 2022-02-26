import styled from "styled-components";
import { css } from "styled-components";
import SketchLogo from "../../assets/sketch-logo.svg";

const TOPBAR_HEIGHT = "64px";

const SEPARATOR_STYLES = css`
  height: 30px;
  width: 1px;
  background: linear-gradient(
    to bottom,
    #e7e7ea00 0%,
    #e7e7ea 31.588%,
    #e7e7ea 49.952%,
    #e7e7ea 68.257%,
    #e7e7ea00 100%
  );
  opacity: 0.6;
`;

const TopbarWrapper = styled.div`
  height: ${TOPBAR_HEIGHT};
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: white;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  display: flex;
`;

const TopbarLeftIconHolder = styled.a`
  position: relative;
  width: ${TOPBAR_HEIGHT};
  height: ${TOPBAR_HEIGHT};
  display: flex;
  justify-content: center;

  &:after {
    content: "";
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    ${SEPARATOR_STYLES}
  }
`;

// h1 because it's the headline of that page
const DocumentTitle = styled.h1`
  font-weight: 400;
  font-size: 16px;
  padding: 0;
  margin: 0;
  line-height: ${TOPBAR_HEIGHT};
  margin-left: 1em;
`;

const SketchLogoHolder = styled.img`
  width: 27px;
  aspect-ratio: 26.16/23.63;
`;

export const Topbar = ({ mode, documentName }) => {
  const isDocumentMode = mode === "document";

  return (
    <TopbarWrapper>
      <TopbarLeftIconHolder href="/">
        <SketchLogoHolder src={SketchLogo} />
      </TopbarLeftIconHolder>

      {isDocumentMode && <DocumentTitle>{documentName}</DocumentTitle>}
    </TopbarWrapper>
  );
};

Topbar.defaultProps = {
  mode: "document",
  documentName: "[Document Name]",
};
