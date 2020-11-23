import React from 'react';
import Sidebar from '../Sidebar';
import UserHeader from '../UserHeader';
import MobileNav from '../MobileNav';

import { StyledContent } from './styles';
import { ErrorBoundary } from '../../ErrorBoundry';

const Layout = ({ user, children }) => {
  return (
    <>
    <ErrorBoundary>
      <MobileNav />
      <Sidebar />
      <StyledContent>
        <UserHeader user={user} />
        <div>{children}</div>
      </StyledContent>
      </ErrorBoundary>
    </>
  );
};

export default Layout;
