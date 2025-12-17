import { forwardRef } from 'react';

type Props = {
  child: React.ReactNode;
};

const DivWrapper = forwardRef<HTMLDivElement, Props>(
  ({ child }, ref) => {
    return <div ref={ref}>{child}</div>;
  }
);

export default DivWrapper;
