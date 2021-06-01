import React from 'react';

import {Route,Switch,Redirect} from "react-router-dom";
import { useSelector } from 'react-redux';

import { nanoid } from 'nanoid';
import cn from 'classnames';

import { getIsBlured } from './store/matches';
import { ROUTES } from './data';

import Header from './components/Header';
import NotFound from "./components/NotFound";
import SideMenu from './components/SideMenu';
import Banner from './components/Banner';
import Matches from './components/Matches';
import BreadCrumps from './components/BreadCrumps';
import Leagues from './components/Leagues';

import s from './App.module.scss';

const App = () => {
  const isBlured = useSelector(getIsBlured);
  return (
    <Switch>
      <Route path="/404" component={NotFound}/>
      <Route>
          <Header></Header>
          <div className={s.wrapper}>
            <SideMenu></SideMenu>
            <div className={cn(s.content,{[s.blured]:isBlured})}>
              <Banner></Banner>
              <Switch>
              {
                ROUTES.map(({path,request,})=>(
                <Route path={path} exact key={nanoid()}>
                  <BreadCrumps></BreadCrumps>
                  <Matches
                    {...{request}}
                  ></Matches>
                </Route>
                ))
              }
              <Route path='/leagues' exact>
                <Leagues></Leagues>
              </Route>
              <Route render={()=>(
                <Redirect to="/404" />
              )}/>
              </Switch>
            </div>
          </div>      
      </Route>
    </Switch>
  );
}

export default App;
