import React from 'react';

type Props = {
  title: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  action?: () => void;
};

const PrimaryButton = ({
  title,
  className,
  type = 'button',
  action,
}: Props) => {
  return (
    <button
      type={type}
      className={`bg-primary text-theme-blue-dark ${className}`}
      onClick={action}
    >
      {title}
    </button>
  );
};

export default PrimaryButton;
