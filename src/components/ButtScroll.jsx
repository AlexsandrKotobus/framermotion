import {motion, useScroll} from 'framer-motion';
import { forwardRef } from 'react';
import { useRef } from 'react';


export const ButtonScroll= ()=>{
    
    return(
        <button style = {btnStyle}> </button>
    )
}

export default function Scr(){
    const {scrollYProgress} = useScroll();
    return (
        <>
        <motion.div className='progress-bar' style={{staleX: scrollYProgress}}/>
        <h1>
            useScroll
        </h1>
        
        </>
    )
}

// export default ButtonScr;

// export const MButtonScroll = motion(ButtonScr);

const btnStyle ={
    border: '1px solid black',
    boxShadow: '10px 10px 15px #A0BEF0',
    width: '100px',
    borderRadius: '25px',
    padding: '14px 16px',
    backgroundColor: '#A0BEF0',
    cursor: 'pointer',
}

