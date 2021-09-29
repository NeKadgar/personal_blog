import React from 'react';
import { Home } from './views/Home';
import { Contact } from './views/Contact';
import { ProjectList } from './views/ProjectList';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { About } from './views/About';
import { Route, Switch } from 'react-router-dom';
import Project from './views/Project/Project';
import ScrollToTop from './ScrollToTop';

export const Routes = () => {
  return (
    <div className="content">
      <Navbar />
      <ScrollToTop>
        <Switch>
          <Route exact path="/Projects/:id" component={Project}/>
          <Route exact path="/" component={Home} />
          <Route exact path="/Projects" component={ProjectList} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/About" component={About} />
        </Switch>
      </ScrollToTop>
      <Footer />
    </div>
  );
};