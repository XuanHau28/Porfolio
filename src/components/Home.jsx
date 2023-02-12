import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { BsArrowUpRight, BsChevronDown} from "react-icons/bs";
import me from "../assets/me.png";

const Home = () => {

    const animations = {
        h1: {
            initial: {
                x: "-100%",
                opacity: 0,
            },
            whileInView: {
                x: 0,
                opacity: 1
            }
        },
        button: {
            initial: {
                y: "-100%",
                opacity: 0
            },
            whileInView: {
                y: 0,
                opacity: 1
            }
        }
    }

  return (
    <div id='home'>
        <section>
            <div>
                <motion.h1 {...animations.h1}>
                    Hi, I Am <br /> Dang Xuan Hau
                </motion.h1>
           
            <Typewriter 
            options={{
                strings: "A Front-End Developer",
                autoStart: true,
                loop: true,
                cursor: "",
                wrapperClassName: "typewriterpara"
            }}
            />

            <div>
            <a href='mailto:xuanhau28901@gmail.com'>Hire Me</a>
            <a href='#work'>Projects <BsArrowUpRight /></a>
            </div>

            <aside>
                {/* <article>
                    <p>+<span>2</span></p>
                    <span>Projects Made </span>
                </article> */}

                <article data-special>
                    <p>Contact</p>
                    <span>xuanhau28901@gmail.com</span>
                </article>
            </aside>
            </div>
        </section>

        <section>
            <img src={me} alt="Xuan Hau" />
        </section>
            <BsChevronDown />
    </div>
  )
}

export default Home