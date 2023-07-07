import React from 'react';
import cn from 'classnames';

import Header from './components/Header';
import SideMenu from './components/SideMenu';
import Banner from './components/Banner';
import BreadCrumps from './components/BreadCrumps';

import s from './App.module.scss';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
  <>
    <Header />
    <div className={s.wrapper}>
      <SideMenu></SideMenu>
      <div className={cn(s.content)}>
        <Banner></Banner>
        <BreadCrumps></BreadCrumps>
        <Outlet />
      </div>
    </div>
  </>
  );
}

export default App;
