import { NavigationMenu } from 'components/NavigationMenu';
import { TopMenu } from 'components/TopMenu/TopMenu';
import React from 'react';

export const Layout: React.FC = () => {
  return (
    <>
      <TopMenu />
      <NavigationMenu />
    </>
  );
};
