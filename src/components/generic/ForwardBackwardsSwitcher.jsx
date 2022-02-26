import {
  CenterFlex,
  CenterFlexFull,
  CenterFlexLink,
} from "../utils/CenterFlex";
import ArrowLeft from "../../assets/arrow-left.svg";
import ArrowRight from "../../assets/arrow-right.svg";
import styled from "styled-components";

export const ForwardBackwardsSwitcher = ({
  currentCount,
  totalCount,
  className,
}) => {
  return (
    <CenterFlexFull className={className}>
      <ArrowLinkLeft href="">
        <img src={ArrowLeft} />
      </ArrowLinkLeft>
      <CountText>
        {currentCount} / {totalCount}
      </CountText>
      <ArrowLinkRight href="#">
        <img src={ArrowRight} />
      </ArrowLinkRight>
    </CenterFlexFull>
  );
};

const ArrowLinkLeft = styled(CenterFlexLink)`
  flex: 0 0 22px;
  justify-content: flex-start;
`;

const ArrowLinkRight = styled(ArrowLinkLeft)`
  justify-content: flex-end;
`;

// i dont use margin on the CountText because i instead
// improved UX by putting that margin as click space to the arrow links
const CountText = styled(CenterFlex)`
  white-space: nowrap;
  opacity: 0.4;
`;
