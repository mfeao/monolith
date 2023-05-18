import { HomeIcon, ChartBarIcon, ArchiveBoxArrowDownIcon } from '@heroicons/react/24/outline';
import { FunctionComponent } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const menuItems = [
  {
    path: '/dashboard',
    icon: <HomeIcon />,
    text: 'Dashboard',
  },
  {
    path: '/dashboard/overview',
    icon: <ChartBarIcon />,
    text: 'Overview',
  },
  {
    path: '/dashboard/reports',
    icon: <ArchiveBoxArrowDownIcon />,
    text: 'Reports',
  },
];

const Layout: FunctionComponent = () => (
  <div className="grow grid grid-cols-12 gap-x-4">
    <div className="col-span-2 border-r py-8">
      <nav>
        {menuItems.map(({ path, icon, text }, idx) => (
          <NavLink
            key={`menu-item=${idx}`}
            to={path}
            end={true}
            className={({ isActive }) => (
              `flex items-center px-2 py-2 hover:text-primary ${isActive ? 'text-primary' : 'text-gray-900'}`
            )}
          >
            <span className="block w-6 h-6 mr-2">{icon}</span>{text}
          </NavLink>
        ))}
      </nav>
    </div>
    <div className="col-span-10 py-8">
      <Outlet />
    </div>
  </div>
);

export default Layout;
