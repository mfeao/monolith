import {
  AdjustmentsVerticalIcon,
  ArrowLeftOnRectangleIcon,
  ArrowTrendingUpIcon,
  CalendarDaysIcon,
  NewspaperIcon,
} from '@heroicons/react/24/outline';
import { FunctionComponent } from 'react';
import { Logo, UserMenu } from '~/components';

const menuItems = [
  {
    icon: <ArrowTrendingUpIcon />,
    text: 'Dashboard',
    to: '/dashboard',
  },
  {
    icon: <CalendarDaysIcon />,
    text: 'Planning',
    to: '/planning',
  },
  {
    icon: <NewspaperIcon />,
    text: 'Feed',
    to: '/feed',
  },
  {
    icon: <AdjustmentsVerticalIcon />,
    text: 'Settings',
  },
  {
    icon: <ArrowLeftOnRectangleIcon />,
    text: 'Log Out',
  },
];

const Header: FunctionComponent = () => (
  <div>
    <div className="container border-b bg-white">
      <div className="flex items-center py-4">
        <div>
          <Logo />
        </div>
        <div className="ml-auto">
          <UserMenu
            displayName="John Doe"
            menuItems={menuItems}
          />
        </div>
      </div>
    </div>
  </div>
);

export default Header;
