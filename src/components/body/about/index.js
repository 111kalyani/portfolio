import React from 'react';
import './about.css';
import SocialContact from '../../common/social-contact/index';

function About() {
    return <div className='about'>
        <div className='about-top'>
            <div className='about-info'>
                Hello There 👋, I am <span className='info-name'>Kalyani Pawar</span>.
                <br />Front End Developer Degree in Bachlor of Engineering With Focus in Web Desgin and Developemnt.
                <br />Want to Know About Me More, Check Out My Skills and Projects.
            </div>
            <div className='about-photo'>
                <img src={require("../../../assestes/picture-2.jpg")}
                    className="picture"></img>
            </div>
        </div>
        {/* <SocialContact /> */}
    </div>;
}

export default About;
