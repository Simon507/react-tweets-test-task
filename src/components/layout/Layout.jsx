import { Outlet } from 'react-router-dom';

import { Navigation } from '../Navigation';

import { LayoutPage } from './Layout.styles';

export default function Layout() {
  return (
    <LayoutPage>
      <Navigation />
      <Outlet />
    </LayoutPage>
  );
}
