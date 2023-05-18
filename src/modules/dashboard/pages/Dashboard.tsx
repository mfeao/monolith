import { FunctionComponent } from 'react';
import { PageHeader, Note, Button } from '~/components';

const Dashboard: FunctionComponent = () => (
    <>
      <PageHeader title="Dashboard" />
      <Note>
        <p className="mb-4">Eget nulla facilisi etiam dignissim diam quis. Nunc id cursus metus aliquam eleifend mi in nulla posuere. Mauris rhoncus aenean vel elit scelerisque mauris. Quis vel eros donec ac odio tempor orci. Integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque. Dui accumsan sit amet nulla.</p>
        <p>Accumsan in nisl nisi scelerisque eu ultrices vitae. Quam pellentesque nec nam aliquam sem et tortor consequat. Lorem sed risus ultricies tristique nulla aliquet enim tortor at. Faucibus interdum posuere lorem ipsum dolor. Auctor elit sed vulputate mi sit amet mauris. Dignissim convallis aenean et tortor at risus viverra adipiscing. Integer vitae justo eget magna fermentum iaculis eu non. Id eu nisl nunc mi ipsum faucibus vitae.</p>
      </Note>
      <div className="flex items-center mt-8">
        <div className="ml-auto space-x-2">
          <Button text="Cancel" type="outline" variant="secondary" />
          <Button text="Submit" />
        </div>
      </div>
    </>
  )
;

export default Dashboard;
