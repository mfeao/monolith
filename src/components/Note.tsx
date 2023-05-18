import { FunctionComponent, ReactNode } from 'react';

type Props = {
  variant?: 'info' | 'success' | 'warning' | 'error';
  children?: ReactNode;
};

const Note: FunctionComponent<Props> = ({
  variant,
  children,
}) => {
  let className;

  switch (variant) {
    case 'success':
      className = 'border-green-500 bg-green-50 text-green-900';
      break;

    case 'warning':
      className = 'border-orange-500 bg-orange-50 text-orange-900';
      break;

    case 'error':
      className = 'border-red-600 bg-red-50 text-red-900';
      break;

    default:
      className = 'border-cyan-500 bg-cyan-50 text-cyan-900';
  }

  return (
    <div className={`border-l-4 px-4 py-4 italic ${className}`}>
      {children}
    </div>
  );
};

Note.defaultProps = {
  variant: 'info',
};

export default Note;
