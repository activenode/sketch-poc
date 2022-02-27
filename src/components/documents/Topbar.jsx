import styled from "styled-components";
import { css } from "styled-components";
import { ForwardBackwardsSwitcher } from "../generic/ForwardBackwardsSwitcher";
import { CenterFlex, CenterFlexFull } from "../utils/CenterFlex";

import SketchLogo from "../../assets/sketch-logo.svg";
import CloseImg from "../../assets/close.svg";

const DOCUMENT_MODE = "document";
const ARTBOARD_MODE = "artboard";
const MODES = [DOCUMENT_MODE, ARTBOARD_MODE];

/**
 * The reason I didn't make two Topbars is that
 * such things are very likely to be enhanced with features and
 * need common denominators. Obviously you can always abstract in
 * many different ways and then reuse it by composition but I found
 * the configuration modes for this challenge to be sufficient.
 */
export const Topbar = ({
  mode,
  title,
  currentArtboardNum,
  totalArtboardsNum,
  artboardNextHref,
  artboardPrevHref,
}) => {
  const isSupportedMode = MODES.includes(mode ?? "");
  const isArtboardMode = mode === ARTBOARD_MODE;

  if (!isSupportedMode) {
    throw new Error(
      "Please consult the documentation. Given {mode} is not supported"
    );
  }

  return (
    <TopbarWrapper>
      <TopbarLeftIconHolder to="/">
        {!isArtboardMode && <SketchLogoHolder src={SketchLogo} />}
        {isArtboardMode && (
          <CenterFlexFull.a>
            <img src={CloseImg} />
          </CenterFlexFull.a>
        )}
      </TopbarLeftIconHolder>

      <TopbarDocumentTitle centerX={isArtboardMode} bold={isArtboardMode}>
        {title}
      </TopbarDocumentTitle>

      {isArtboardMode && (
        <ForwardBackwardsSwitcherAdapted
          currentCount={currentArtboardNum}
          totalCount={totalArtboardsNum}
          prevHref={artboardPrevHref}
          forwardHref={artboardNextHref}
        />
      )}
    </TopbarWrapper>
  );
};

Topbar.defaultProps = {
  mode: "document",
  documentName: "[Document Name]",
};

// Styled Components:
const TOPBAR_ZINDEX_HIGH = 20;
const TOPBAR_ZINDEX_LOW = 10;
export const TOPBAR_HEIGHT = "64px";

const ForwardBackwardsSwitcherAdapted = styled(ForwardBackwardsSwitcher)`
  margin-left: 20px;
  position: relative;
  z-index: ${TOPBAR_ZINDEX_LOW};
`;

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
  font-family: "SF Pro Display", Helvetica, Arial, sans-serif;
  font-family: sans-serif;
`;

const TopbarLeftIconHolder = styled(CenterFlex.Link)`
  position: relative;
  width: ${TOPBAR_HEIGHT};
  height: ${TOPBAR_HEIGHT};
  z-index: ${TOPBAR_ZINDEX_HIGH};

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
const TopbarDocumentTitle = styled.h1`
  font-weight: 400;
  font-size: 16px;
  padding: 0;
  margin: 0;
  line-height: ${TOPBAR_HEIGHT};

  ${(props) => {
    if (props.bold) {
      return css`
        font-weight: bold;
      `;
    }
  }}

  ${(props) => {
    switch (props.centerX) {
      case true:
        return css`
          position: absolute;
          z-index: ${TOPBAR_ZINDEX_LOW};
          left: 50%;
          transform: translateX(-50%);
        `;
      default:
        return css`
          margin-left: 1em;
        `;
    }
  }}
`;

const SketchLogoHolder = styled.img`
  width: 27px;
  aspect-ratio: 26.16/23.63;
`;
