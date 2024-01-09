import {motion} from 'framer-motion';
import * as React from "react";
import { useRef } from "react";
import './Movel.css'


export const Example = () => {
  const constraintsRef = useRef(null);

  return (
    <motion.div className="container" ref={constraintsRef}>
      <motion.div className="item" drag dragConstraints={constraintsRef} />
    </motion.div>
  );
};

export default Example;