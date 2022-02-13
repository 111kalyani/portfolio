import React from 'react';
import './contact.css';
import Separator from '../../common/separator';
import SocialContact from '../../common/social-contact';

function Contact() {
    return <div className='contact'>
        <Separator />
        <label className='section-title'>Contact</label>
        <div className='contact-container'>
            <div className='contact-left'>
                <p>Want to get in touch? Contact me on any of the platform</p>
                <SocialContact />
            </div>
            <div className='resume'>
                <a href='https://drive.google.com/file/d/1ATNEM0UiJE-m-VCNZLuCQ6Klnl_DhWyH/view?usp=sharing'
                    target="_blank"><button id="bt" >Resume</button></a>
            </div>
        </div>
    </div>;
}

export default Contact;
