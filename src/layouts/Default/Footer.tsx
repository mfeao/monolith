import { FunctionComponent } from 'react';
import { Copyright } from '~/components';

const Footer: FunctionComponent = () => (
  <div>
    <div className="container border-t bg-white">
      <div className="flex items-center py-4">
        <div className="ml-auto">
          <Copyright />
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
