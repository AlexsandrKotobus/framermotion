import React from "react";
import {motion, MotionConfig} from 'framer-motion'
import './Mbutton.css'

const Gestures =()=>{
    return(
        <div
        style={{
            display: 'grid',
            placeContent: 'center',
            height: '100vh',
            gap: '0.8rem'
        }}
        >
            {/* MotionConfig - специальный компонент, в
             который можно обернуть нашпример, кнопки с одинаковым стилем */}
            <MotionConfig
                whileHover={{scale: 1.05}}
                whileTap={{scale: 0.9, y: '10px'}} 
                transition={{
                    duration: 0.125,
                    ease: 'easeInOut'
                }}
            
            >

           
            <motion.button 
            className="example-button">Click me1</motion.button>
            <motion.button 
            style={{backgroundColor: 'red'}}
            className="example-button">Click me2</motion.button>
             </MotionConfig>
        </div>
    )
}

export default Gestures;