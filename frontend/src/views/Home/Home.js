import React from 'react';
import photo from '../../photo.jpg';
import './Home.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Home = props => {
  useEffect(() => {
    document.title = "Maxim Sheleh - developer"
  }, []);

  return (
    <div className="homepage">
      <div className="homepage__photo">
        <img src={photo} width="100%" alt="me (yes i am Naruto and i will became Hokage)"/>
      </div>
      <div className="homepage__content">
        <h1>Hello</h1>
        <h2>A Bit About Me</h2>
        <p>My name is Maxim Sheleh. I'm a web developer and programmer living in Gomel, Belarus. I make web applications using the best, newest and fastest technologies.</p>
        <div className="homepage__buttons">
          <Link to="/Projects"><button className="homepage__buttons_button btn_orange">Projects</button></Link>
          <Link to="/About"><button className="homepage__buttons_button btn_red">About</button></Link>
          <Link to="/Contact"><button className="homepage__buttons_button btn_ocean">Contact</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Home;