import React, {useEffect} from 'react'
import logo from '../../photo.png';

import './About.css'


const About = props => {
    useEffect(() => {
        document.title = "About"
    }, []);

    return (
        <div className='about'>
            <div  className='about__block'>
                <div className='about__block_unit'>
                <h1>This is me</h1>
                <p>I was born 19 years ago and have come a long way to become a web developer. I am already made a dozens of software products. Such as parcers informations from web, automatisation software for games (game bots), websites like blog, cinema site with over 9000+ movies, serials and anime, applications for education systems where anyone can became a teacher and sell own education programs, also some of university projects and etc. As a person i like to play basketball with my friends, play video games, watch tv shows and read books and manga.</p>
                </div>
                <div className='about__block_unit about__photo'>
                    <img src={logo} width="100%" alt='logo'/>
                </div>
            </div>
            <div className='about__block'>
                <div className='about__block_unit'>
                    <h1 className='about__block_unit_vision'>I bring <br />visions to life</h1>
                </div>

                <div className='about__block_unit'>
                    <h1>Services & skills</h1>
                    <p>I enjoy building great archetecture of a products, design user-friendly interface, write readble code for everyone. My products always something more then lines of code.<br/>I am familiar with React, Django, Python, DRF, VueJS, Docker, Git, OpenCV, CSS, HTML, JavaScript, Celery, PostgreSQL, Reddis, Bootstrap, LESS, Ngingx, Gunicorn, FastAPI, Linux.​​​</p>
                </div>
            </div>
        </div>
    )
}

export default About;