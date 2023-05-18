import { FunctionComponent } from 'react';
import { PageHeader, Note, Button } from '~/components';

const Experiments: FunctionComponent = () => (
  <>
    <PageHeader title="Planning > Experiments" />
    <Note variant="warning">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Posuere lorem ipsum dolor sit amet. Blandit massa enim nec dui nunc. Aliquam ut porttitor leo a diam sollicitudin tempor. Orci sagittis eu volutpat odio. Mollis nunc sed id semper. Turpis in eu mi bibendum neque. Nullam eget felis eget nunc lobortis. Tortor id aliquet lectus proin nibh nisl condimentum id venenatis. Viverra adipiscing at in tellus integer feugiat. Nibh cras pulvinar mattis nunc sed blandit. Sem viverra aliquet eget sit amet tellus. Eget mi proin sed libero. At elementum eu facilisis sed. Amet nulla facilisi morbi tempus iaculis urna id volutpat lacus. Vitae congue eu consequat ac felis. Nunc mi ipsum faucibus vitae aliquet nec. Volutpat est velit egestas dui id. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget.</p>
    </Note>
    <div className="mb-4"></div>
    <Note variant="success">
      <p>Nunc id cursus metus aliquam eleifend mi in nulla posuere. Facilisi cras fermentum odio eu feugiat. Urna id volutpat lacus laoreet non. Ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel. Interdum posuere lorem ipsum dolor sit amet. Lacus vestibulum sed arcu non. Dui sapien eget mi proin. Porta non pulvinar neque laoreet. Donec adipiscing tristique risus nec feugiat in fermentum posuere urna. Ultricies lacus sed turpis tincidunt.</p>
    </Note>
    <div className="flex items-center mt-8">
      <div className="ml-auto space-x-2">
        <Button text="Apply" type="outline" />
      </div>
    </div>
  </>
);

export default Experiments;
