import * as React from 'react';

export const Button = ({
  disabled,
  as: Component = 'button',
  type = Component === 'button' ? 'button' : undefined,
  ...props
}) => (
  <Component
    type={type}
    disabled={disabled}
    {...props}
    className={`inline-block flex-none min-w-[72px] px-3 py-2 rounded font-bold whitespace-nowrap text-white bg-sky-600 hover:bg-sky-800`}
  />
);
