import React, { PropsWithChildren, ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';

type ButtonVariant = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';

export interface ButtonProps extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {
  outlined?: boolean;
  variant?: ButtonVariant;
}

const preventDefault = (e: Event | React.SyntheticEvent) => e.preventDefault();

export default function Button(props: ButtonProps) {
  const { children, type, variant = 'primary', className, outlined, ...otherProps } = props;

  return (
    <button
      type={type || 'button'}
      onMouseEnter={otherProps.disabled ? preventDefault : otherProps.onMouseEnter}
      aria-disabled={otherProps.disabled ? 'true' : undefined}
      className={classNames(
        'btn',
        {
          [`btn-outline-${variant}`]: outlined,
          [`btn-${variant}`]: !outlined,
        },
        className,
      )}
      {...otherProps}
    >
      {children}
    </button>
  );
}
