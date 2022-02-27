import { CenterFlex, CenterFlexFull } from "../utils/CenterFlex";
import ArrowLeft from "../../assets/arrow-left.svg";
import ArrowRight from "../../assets/arrow-right.svg";
import styled from "styled-components";

export const ForwardBackwardsSwitcher = ({
  currentCount,
  totalCount,
  className,
  onClickPrev,
  onClickForward,
}) => {
  console.log({ onClickPrev, onClickForward });
  return (
    <CenterFlexFull.div className={className}>
      <ArrowLinkLeft onClick={onClickForward}>
        <img src={ArrowLeft} />
      </ArrowLinkLeft>
      <CountText>
        {currentCount} / {totalCount}
      </CountText>
      <ArrowLinkRight onClick={onClickPrev}>
        <img src={ArrowRight} />
      </ArrowLinkRight>
    </CenterFlexFull.div>
  );
};

// Styled Components:
// ---------------------

const ArrowLinkLeft = styled(CenterFlex.button)`
  flex: 0 0 22px;
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
