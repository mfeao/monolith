import { FunctionComponent } from 'react';
import { Outlet, NavLink } from 'react-router-dom';

const menuItems = [
  {
    path: '/planning',
    text: 'Planning',
  },
  {
    path: '/planning/experiments',
    text: 'Experiments',
  },
  {
    path: '/planning/archive',
    text: 'Archive',
  },
];

const Layout: FunctionComponent = () => (
  <div>
    <div className="-mx-4 mb-8 border-b bg-gray-50">
      <nav className="flex justify-center px-4">
        {menuItems.map(({ path, text }, idx) => (
          <NavLink
            key={`menu-item=${idx}`}
            to={path}
            end={true}
            className={({ isActive }) => (
              `relative px-4 py-2 font-medium after:absolute after:-bottom-1 after:inset-x-0 after:w-full after:h-1 hover:text-primary hover:after:bg-primary ${isActive ? 'text-primary after:bg-primary' : 'text-gray-900'}`
            )}
          >
            {text}
          </NavLink>
        ))}
      </nav>
    </div>
    <div className="pb-8">
      <Outlet />
    </div>
  </div>
);

export default Layout;
