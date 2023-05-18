import { FunctionComponent } from 'react';
import { PageHeader, Note, Button } from '~/components';

const Overview: FunctionComponent = () => (
  <>
    <PageHeader title="Dashboard > Overview" />
    <Note variant="success">
      <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices in iaculis nunc sed augue. In cursus turpis massa tincidunt. Sapien pellentesque habitant morbi tristique senectus et. Pulvinar elementum integer enim neque volutpat ac tincidunt vitae. Scelerisque purus semper eget duis at tellus at. Luctus accumsan tortor posuere ac ut consequat semper viverra nam. Morbi tempus iaculis urna id.</p>
      <p>Nisi est sit amet facilisis magna etiam. Amet commodo nulla facilisi nullam vehicula. A scelerisque purus semper eget duis at. Ante in nibh mauris cursus mattis. Mi in nulla posuere sollicitudin. Purus in mollis nunc sed id. Egestas diam in arcu cursus euismod quis. In fermentum posuere urna nec tincidunt. Sed tempus urna et pharetra pharetra massa massa ultricies mi. Malesuada pellentesque elit eget gravida. Facilisis leo vel fringilla est ullamcorper. Quam elementum pulvinar etiam non quam lacus.</p>
    </Note>
    <div className="flex items-center mt-8">
      <div className="ml-auto space-x-2">
        <Button text="Cancel" type="outline" variant="secondary" />
        <Button text="Accept" />
      </div>
    </div>
  </>
);

export default Overview;
