import { FunctionComponent } from 'react';

type Props = {
  title: string;
};

const PageHeader: FunctionComponent<Props> = ({ title }) => (
  <div className="border-b-4 border-primary mb-6">
    <h1 className="font-bold text-2xl text-gray-900 mb-2">{title}</h1>
  </div>
);

export default PageHeader;
