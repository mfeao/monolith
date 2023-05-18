import { FunctionComponent } from 'react';
import { Outlet } from 'react-router-dom';

const Main: FunctionComponent = () => (
  <div className="grow flex flex-col">
    <div className="grow flex flex-col container bg-white">
      <Outlet />
    </div>
  </div>
);

export default Main;
