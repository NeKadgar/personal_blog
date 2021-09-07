import React from 'react';
import { Home } from './views/Home';
import { About } from './views/About';
import { Projects } from './views/Projects';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Route, Switch, Redirect } from 'react-router-dom';


export const Routes = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Projects" component={Projects} />
        <Route exact path="/About" component={About} />
      </Switch>
      <Footer />
    </div>
  );
};