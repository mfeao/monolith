import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { Logo as LogoIcon } from '~/assets';

const Logo: FunctionComponent = () => (
  <Link to="/" className="flex items-center text-primary-700">
    <LogoIcon className="h-10" />
    <span className="ml-2 text-xl font-bold uppercase">Monolith</span>
  </Link>
);

export default Logo;
