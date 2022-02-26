import { CenterFlex } from "../utils/CenterFlex";

export const ForwardBackwardsSwitcher = ({
  currentCount,
  totalCount,
  className,
}) => {
  return (
    <CenterFlex className={className}>
      {currentCount} / {totalCount}
    </CenterFlex>
  );
};
