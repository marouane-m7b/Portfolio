import React from 'react';
import { useInView } from 'framer-motion';

const ProgressProvider = ({ valueStart, valueEnd, children }) => {
  const [value, setValue] = React.useState(valueStart);
  const ref = React.useRef();
  const isInView = useInView(ref);

  React.useEffect(() => {
    if (isInView) {
      setValue(valueEnd);
    } else {
      setValue(valueStart);
    }
  }, [isInView, valueEnd, valueStart]);

  return (
    <div ref={ref}>
      {children(value)}
    </div>
  );
};

export default ProgressProvider;
