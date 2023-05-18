import { FunctionComponent } from 'react';

const Copyright: FunctionComponent = () => (
  <span className="text-sm text-gray-400">All Rights Reserved &copy; {new Date().getFullYear()} Monolith Corp.</span>
);

export default Copyright;
