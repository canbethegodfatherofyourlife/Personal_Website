import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF,FaLinkedin } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
    <a href="https://twitter.com/ArkaDatta02" target="_blank"><BsTwitter /></a>
    </div>
    <div>
    <a href="https://www.facebook.com/arka.datta.718" target="_blank"><FaFacebookF /></a>
    </div>
    <div>
    <a href="https://www.linkedin.com/in/arka-datta/" target="_blank"><FaLinkedin /></a>
    </div>
    <div>
      <a href="https://www.instagram.com/canbethegodfatherofyourlife/?hl=en" target="_blank"><BsInstagram /></a>
  </div>
  </div>
);

export default SocialMedia;