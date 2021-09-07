import React from 'react';
import logo from '../../photo.jpg';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = props => {
  return (
    <div className="homepage">
      <div className="homepage__photo">
        <img src={logo} width="100%"/>
      </div>
      <div className="homepage__content">
        <h1>Hello</h1>
        <h2>A Bit About Me</h2>
        <p>I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</p>
        <div className="homepage__buttons">
          <Link to="/Projects"><button className="homepage__buttons_button btn_orange">Projects</button></Link>
          <Link to="/"><button className="homepage__buttons_button btn_red">Technology</button></Link>
          <Link to="/about"><button className="homepage__buttons_button btn_ocean">Contact</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Home;