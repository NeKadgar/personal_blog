import React from 'react';
import { Home } from './views/Home';
import { Contact } from './views/Contact';
import { ProjectList } from './views/ProjectList';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Route, Switch, Redirect } from 'react-router-dom';
import Project from './views/Project/Project';


export const Routes = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/Projects/:id" component={Project}/>
        <Route exact path="/" component={Home} />
        <Route exact path="/Projects" component={ProjectList} />
        <Route exact path="/About" component={Contact} />
      </Switch>
      <Footer />
    </div>
  );
};