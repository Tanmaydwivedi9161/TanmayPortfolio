import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { FaDownload } from 'react-icons/fa'; // download icon
import './index.css';

const Banner = () => {
    return (
        <section className="banner" id="home">
            <motion.div
                className="banner-content"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1>Hello, I'm <span>Tanmay Dwivedi</span></h1>

                <h2 className="typewriter-text">
                    <Typewriter
                        words={['Web Developer', 'Frontend Developer', 'Backend Developer', 'Full Stack Developer', 'Tech Enthusiast', 'Cyber Enthusiast']}
                        loop={0}
                        cursor
                        cursorStyle="|"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </h2>

                <p>I build responsive, interactive websites with modern tech stacks.</p>

                <div className="banner-buttons">
                    <motion.a
                        href="/resume/Tanmay_Dwivedi_Resume.pdf"
                        download
                        className="banner-btn"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <FaDownload style={{ marginRight: '8px' }} />
                        Download CV
                    </motion.a>

                    <motion.a
                        href="#contact"
                        className="banner-btn outline"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        Contact Me
                    </motion.a>
                </div>
            </motion.div>

            <motion.div
                className="banner-image"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >
                <img
                    src="https://res.cloudinary.com/daz8hb4ia/image/upload/v1741791192/1741790969278_drqvbh.png"
                    alt="Banner"
                />
            </motion.div>
            <motion.button
                className="scroll-to-top"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
                ↑
            </motion.button>

        </section>
    );
};

export default Banner;
