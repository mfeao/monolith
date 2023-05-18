import { FunctionComponent } from 'react';
import { PageHeader, Note, Button } from '~/components';

const Planning: FunctionComponent = () => (
  <>
    <PageHeader title="Planning" />
    <Note>
      <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sollicitudin ac orci phasellus egestas tellus rutrum tellus. Neque gravida in fermentum et sollicitudin ac orci. Dictum at tempor commodo ullamcorper a. Sit amet mauris commodo quis imperdiet. Vitae semper quis lectus nulla. Amet mattis vulputate enim nulla aliquet. Nulla pellentesque dignissim enim sit amet venenatis urna cursus. Suspendisse faucibus interdum posuere lorem ipsum dolor sit. Proin sagittis nisl rhoncus mattis rhoncus urna neque. Commodo ullamcorper a lacus vestibulum sed arcu non odio. Placerat vestibulum lectus mauris ultrices eros in cursus turpis massa. Eu mi bibendum neque egestas congue quisque egestas diam in. Ut faucibus pulvinar elementum integer enim neque. Tincidunt praesent semper feugiat nibh sed. Egestas dui id ornare arcu odio ut. Proin libero nunc consequat interdum varius sit. Congue quisque egestas diam.</p>
      <p>Odio facilisis mauris sit amet massa. Diam ut venenatis tellus in metus vulputate eu. Nisl tincidunt eget nullam non nisi est sit amet facilisis. Vulputate eu scelerisque felis imperdiet proin fermentum leo. Purus non enim praesent elementum facilisis leo vel. Augue eget arcu dictum varius duis at consectetur. Eget est lorem ipsum dolor sit amet consectetur adipiscing. Ultrices tincidunt arcu non sodales neque. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim praesent elementum facilisis leo vel. Fusce id velit ut tortor. Quis eleifend quam adipiscing vitae. Massa sapien faucibus et molestie ac feugiat sed lectus. Vulputate ut pharetra sit amet aliquam id diam maecenas. Consectetur purus ut faucibus pulvinar elementum integer enim neque. Semper auctor neque vitae tempus. Mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum.</p>
    </Note>
    <div className="flex items-center mt-8">
      <div className="ml-auto space-x-2">
        <Button text="Save" />
      </div>
    </div>
  </>
);

export default Planning;
