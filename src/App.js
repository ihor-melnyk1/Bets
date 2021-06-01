import React from 'react';

import {Route,Switch,Redirect} from "react-router-dom";

import { nanoid } from 'nanoid';
import cn from 'classnames';

import { ROUTES } from './data';

import Header from './components/Header';
import NotFound from "./components/NotFound";
import SideMenu from './components/SideMenu';
import Banner from './components/Banner';
import Matches from './components/Matches';
import BreadCrumps from './components/BreadCrumps';
import Leagues from './components/Leagues';

import s from './App.module.scss';
import About from './components/About';
import Support from './components/Support';
import Favorites from './components/Favorites';

const App = () => {
  return (
    <Switch>
      <Route path="/404" component={NotFound}/>
      <Route>
          <Header></Header>
          <div className={s.wrapper}>
            <SideMenu></SideMenu>
            <div className={cn(s.content)}>
              <Banner></Banner>
              <BreadCrumps></BreadCrumps>
              <Switch>
              {
                ROUTES.map(({path,request,})=>(
                <Route path={path} exact key={nanoid()}>
                  <Matches
                    {...{request}}
                  ></Matches>
                </Route>
                ))
              }
              <Route path='/leagues' exact>
                <Leagues></Leagues>
              </Route>
              <Route path='/about' exact>
                <About></About>
              </Route>
              <Route path='/support' exact>
                <Support></Support>
              </Route>
              <Route path='/favorites' exact>
                <Favorites></Favorites>
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
