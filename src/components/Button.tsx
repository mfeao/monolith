import { FunctionComponent, ReactNode } from 'react';

type Props = {
  text: ReactNode;
  type?: 'solid' | 'outline';
  variant?: 'primary' | 'secondary' | 'error';
};

const appearanceOptions = {
  solid: 1,
  outline: 2,
  primary: 4,
  secondary: 8,
  error: 16,
};

const Button: FunctionComponent<Props> = ({
  text,
  type,
  variant,
}) => {
  let className;

  // @ts-ignore
  switch (appearanceOptions[type] | appearanceOptions[variant]) {
    case (appearanceOptions.solid | appearanceOptions.primary):
      className = 'border-primary bg-primary text-white hover:border-primary-600 hover:bg-primary-600 focus-visible:ring-primary';
      break;

    case (appearanceOptions.solid | appearanceOptions.secondary):
      className = 'border-teal-400 bg-teal-400 text-white hover:border-teal-500 hover:bg-teal-500 focus-visible:ring-teal-400';
      break;

    case (appearanceOptions.solid | appearanceOptions.error):
      className = 'border-red-600 bg-red-600 text-white hover:border-red-700 hover:bg-red-700 focus-visible:ring-red-600';
      break;

    case (appearanceOptions.outline | appearanceOptions.primary):
      className = 'border-primary text-primary hover:border-primary-600 hover:text-primary-600 focus-visible:ring-primary';
      break;

    case (appearanceOptions.outline | appearanceOptions.secondary):
      className = 'border-teal-400 text-teal-400 hover:border-teal-500 hover:text-teal-500 focus-visible:ring-teal-400';
      break;

    case (appearanceOptions.outline | appearanceOptions.error):
      className = 'border-red-600 text-red-600 hover:border-red-700 hover:text-red-700 focus-visible:ring-red-600';
      break;

    default:
      className = '';
  }

  return (
    <button className={`inline-block border-2 rounded px-4 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${className}`}>{text}</button>
  );
};

Button.defaultProps = {
  type: 'solid',
  variant: 'primary',
};

export default Button;
