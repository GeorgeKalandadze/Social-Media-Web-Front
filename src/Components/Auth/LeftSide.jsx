import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const LeftSide = ({bgImage, page, description, span, buttonText, link}) => {
    const divStyle = {
        flex: 1,
        background: `linear-gradient(rgba(39, 11, 96, 0.5), rgba(39, 11, 96, 0.5)), url("${bgImage}") center`,
        backgroundSize: 'cover',
        padding: '50px',
        display: 'flex',
        flexDirection: 'column',
        gap: '30px',
        color: 'white',
        justifyContent: 'flex-start',
      };

      const textVariant = {
        hidden: { opacity: 0, y:20 },
        visible: { opacity: 1, y: 0, },
      };
  return (
    <motion.div style={divStyle} >
      <motion.h1 
        variants={textVariant} 
        initial="hidden"
        animate={"visible"} 
        className="text-6xl leading-tight" 
        transition={{delay:0.5}}
      >
        {page}
      </motion.h1>
      <motion.p 
        variants={textVariant} 
        initial="hidden"
        animate={"visible"} 
        className="text-lg"  
        transition={{delay:0.7}}
      >
        {description}
      </motion.p>
      <motion.span 
        className="text-sm" 
        variants={textVariant} 
        initial="hidden"
        animate={"visible"} 
        transition={{delay:0.8}}
        >{span}</motion.span>
      <Link to={link}>
        <motion.button variants={textVariant} initial="hidden"animate={"visible"} transition={{delay:0.9}} className="w-1/2 py-3 px-4 border-none bg-white text-purple-800 font-bold cursor-pointer">
          {buttonText}
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default LeftSide;
