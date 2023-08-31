import React from 'react'
import { motion } from 'framer-motion';

const RightSide = ({children, className}) => {

  const opacityVariant = {
    hidden: { opacity: 0, },
    visible: { opacity: 1,  transition: { delay: 0.7 }},
  };

  return (
    <motion.div
      className={`flex-1 flex flex-col gap-10 p-[30px] w-full  ${className} lg:p-[70px] `}
      variants={opacityVariant}
      initial="hidden"
      animate={"visible"}
    >
      {children}
    </motion.div>
  );
}

export default RightSide