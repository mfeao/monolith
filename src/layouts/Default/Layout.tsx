import { FunctionComponent } from 'react';
import { Header, Main, Footer } from '.';

const Layout: FunctionComponent = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Layout;
