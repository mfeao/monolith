import { FunctionComponent } from 'react';
import { PageHeader, Note, Button } from '~/components';

const Archive: FunctionComponent = () => (
  <>
    <PageHeader title="Planning > Archive" />
    <Note variant="error">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis molestie a iaculis at. Ultrices gravida dictum fusce ut placerat orci. Neque gravida in fermentum et sollicitudin. Viverra orci sagittis eu volutpat odio. Donec ultrices tincidunt arcu non sodales neque sodales ut. Dictum sit amet justo donec enim diam vulputate ut. Nibh nisl condimentum id venenatis a condimentum vitae. Facilisis mauris sit amet massa vitae tortor. Pulvinar etiam non quam lacus suspendisse faucibus interdum. Sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum. Enim diam vulputate ut pharetra sit amet aliquam id diam. Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Mattis rhoncus urna neque viverra justo nec. Sit amet massa vitae tortor condimentum lacinia quis vel. Nisi est sit amet facilisis magna. Sed nisi lacus sed viverra tellus in hac habitasse platea. Adipiscing diam donec
        adipiscing tristique. Sagittis purus sit amet volutpat consequat. Faucibus a pellentesque sit amet porttitor.</p>
    </Note>
    <div className="mb-4"></div>
    <Note variant="error">
      <p>Eget dolor morbi non arcu risus quis varius quam. Fringilla ut morbi tincidunt augue interdum velit. Suspendisse in est ante in. Enim nunc faucibus a pellentesque sit amet. Ultrices neque ornare aenean euismod. Diam vel quam elementum pulvinar. Vulputate odio ut enim blandit. Amet massa vitae tortor condimentum. Arcu felis bibendum ut tristique. Turpis tincidunt id aliquet risus feugiat in ante metus dictum. Morbi blandit cursus risus at ultrices mi tempus imperdiet nulla. Ultrices sagittis orci a scelerisque purus semper eget duis. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Quisque id diam vel quam. Ut faucibus pulvinar elementum integer enim neque volutpat.</p>
    </Note>
    <div className="mb-4"></div>
    <Note variant="error">
      <p>Id semper risus in hendrerit gravida rutrum quisque. Sed nisi lacus sed viverra tellus in. Tortor at risus viverra adipiscing at. Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Id aliquet lectus proin nibh nisl. Neque laoreet suspendisse interdum consectetur libero. Ut tortor pretium viverra suspendisse potenti nullam ac tortor. Consequat semper viverra nam libero justo laoreet. Id nibh tortor id aliquet lectus proin. Faucibus scelerisque eleifend donec pretium vulputate. Eget nunc lobortis mattis aliquam. Sed odio morbi quis commodo odio aenean sed adipiscing. Tempor orci dapibus ultrices in iaculis. Ultrices vitae auctor eu augue. Feugiat sed lectus vestibulum mattis. Id donec ultrices tincidunt arcu non sodales neque sodales. Et ligula ullamcorper malesuada proin libero nunc consequat interdum varius. Sit amet tellus cras adipiscing enim eu turpis egestas pretium. Massa enim nec dui nunc mattis enim.</p>
    </Note>
    <div className="flex items-center mt-8">
      <div className="ml-auto space-x-2">
        <Button text="Restore" type="outline" variant="error" />
      </div>
    </div>
  </>
);

export default Archive;
