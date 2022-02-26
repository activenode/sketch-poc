import { CenterFlex } from "../utils/CenterFlex";
import ArrowLeft from "../../assets/arrow-left.svg";
import ArrowRight from "../../assets/arrow-right.svg";

export const ForwardBackwardsSwitcher = ({
  currentCount,
  totalCount,
  className,
}) => {
  return (
    <CenterFlex className={className}>
      <img src={ArrowLeft} />
      <div style={{ lineHeight: "19px" }}>
        {currentCount} / {totalCount}
      </div>
      <img src={ArrowRight} />
    </CenterFlex>
  );
};
