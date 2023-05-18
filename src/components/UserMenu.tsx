import { Menu, Transition } from '@headlessui/react';
import { UserCircleIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { FunctionComponent, Fragment, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

type Props = {
  displayName: string;
  menuItems: Array<{
    icon: ReactNode,
    text: string,
    to?: string,
  }>;
};

const UserMenu: FunctionComponent<Props> = ({
  displayName,
  menuItems,
}) => {
  const navigate = useNavigate();

  return (
    <Menu as="nav" className="relative">
      <div>
        <Menu.Button className="flex items-center rounded bg-white font-medium text-primary-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-700">
          <UserCircleIcon className="w-10 h-10" />
          <span className="ml-2 mr-1 whitespace-nowrap">{displayName}</span>
          <ChevronDownIcon className="w-4 h-4" aria-hidden="true" />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 w-56 border rounded divide-y bg-white shadow-lg focus:outline-none">
          {menuItems.map(({ icon, text, to }, idx) => (
            <Menu.Item key={`menu-item-${idx}`}>
              {({ active }) => (
                <div className="px-1 py-1">
                  <button
                    type="button"
                    className={`flex items-center rounded w-full px-4 py-2 ${active ? 'bg-primary-700 text-white' : 'text-gray-900'}`}
                    {...to && { onClick: () => navigate(to) }}
                  >
                    <span className="block w-5 h-5 mr-2">{icon}</span>{text}
                  </button>
                </div>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default UserMenu;
