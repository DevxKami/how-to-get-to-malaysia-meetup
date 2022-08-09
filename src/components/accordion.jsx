import * as React from 'react';
import { Button } from './button';

export const Accordion = ({ summary, details }) => {
  const [show, setShow] = React.useState(true);

  React.useLayoutEffect(() => {
    setShow(false);
  }, []);

  return (
    <div>
      {summary && (
        <div className="flex justify-between items-center py-3">
          {summary}
          <Button onClick={() => setShow((prevShow) => !prevShow)}>{show ? 'Hide' : 'Show'}</Button>
        </div>
      )}
      {details && (
        <div aria-hidden={!show} className={`overflow-hidden ${show ? 'h-auto' : 'h-0'}`}>
          {details}
        </div>
      )}
    </div>
  );
};
