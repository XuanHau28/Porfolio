import React from 'react';
import avt from "../assets/avt.jpg";
import {AiFillLinkedin, AiFillFacebook, AiFillGithub, AiOutlineArrowUp} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
        <div>
            <img src={avt} alt="avatar" />
            <h2>Dang Xuan Hau</h2>
        </div>
        <aside>
            <h2>Social Media</h2>

            <article>
            <a href="https://www.facebook.com/profile.php?id=100008450743610" target="blank" >
                <AiFillFacebook />
            </a>
            <a href="https://github.com/XuanHau28" target="blank" >
                <AiFillGithub />
            </a>
            <a href="https://www.linkedin.com/in/xuanhau/" target="blank" >
                <AiFillLinkedin />
            </a>
            </article>
        </aside>

        <a href='#home'>
            <AiOutlineArrowUp />
        </a>
    </footer>
  )
}

export default Footer