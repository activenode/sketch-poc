import { CenterFlex, CenterFlexFull } from "../utils/CenterFlex";
import ArrowLeft from "../../assets/arrow-left.svg";
import ArrowRight from "../../assets/arrow-right.svg";
import styled from "styled-components";

export const ForwardBackwardsSwitcher = ({
  currentCount,
  totalCount,
  className,
  forwardHref,
  prevHref,
}) => {
  return (
    <CenterFlexFull.div className={className}>
      <ArrowLinkLeft href={prevHref}>
        <img src={ArrowLeft} />
      </ArrowLinkLeft>
      <CountText>
        {currentCount} / {totalCount}
      </CountText>
      <ArrowLinkRight href={forwardHref}>
        <img src={ArrowRight} />
      </ArrowLinkRight>
    </CenterFlexFull.div>
  );
};

// Styled Components:
// ---------------------

const ArrowLinkLeft = styled(CenterFlex.a)`
  min-width: 22px;
  max-width: 22px;
  justify-content: flex-start;
  border: 0;
  background: 0;
  cursor: pointer;
`;

const ArrowLinkRight = styled(ArrowLinkLeft)`
  justify-content: flex-end;
`;

// i dont use margin on the CountText because i instead
// improved UX by putting that margin as click space to the arrow links
const CountText = styled(CenterFlex.div)`
  white-space: nowrap;
  opacity: 0.4;
`;
