import { FunctionComponent } from 'react';
import { PageHeader, Note, Button } from '~/components';

const Reports: FunctionComponent = () => (
  <>
    <PageHeader title="Dashboard > Reports" />
    <Note variant="warning">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam ultrices sagittis orci a scelerisque purus semper. Nulla facilisi morbi tempus iaculis urna. Vel quam elementum pulvinar etiam non quam lacus. Viverra aliquet eget sit amet.</p>
    </Note>
    <div className="mb-4"></div>
    <Note variant="error">
      <p>A diam maecenas sed enim ut. Ultricies mi quis hendrerit dolor. Tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse. In fermentum et sollicitudin ac orci phasellus egestas. In nulla posuere sollicitudin aliquam ultrices sagittis. Facilisis volutpat est velit egestas dui id ornare arcu. Malesuada fames ac turpis egestas maecenas pharetra convallis posuere.</p>
    </Note>
    <div className="flex items-center mt-8">
      <div className="ml-auto space-x-2">
        <Button text="Cancel" type="outline" variant="secondary" />
        <Button text="Delete" type="solid" variant="error" />
      </div>
    </div>
  </>
);

export default Reports;
