import React, {useState} from "react";
import {motion, AnimatePresence} from 'framer-motion'
import './Mbutton.css';

const Mbutton = ()=> {
// условие = при нажатии - переключение вкл/вы2кл
const [isVisible, setVisible] = useState(true);

    return(
        <><div
        style={{
            top: 0,
            left: 0,
            
            position: 'relative',
        }}


        >
            <div
            style={{
                display: 'grid', //сетка
                placeContent: 'center', //содержимое - по центру
                height: '100vh', //высота - весь экран
                gap: '0.8rem', //пробел
                position: 'relative',
            }}>
                <motion.button className="example-button" layout onClick={() => setVisible(!isVisible)} 
                style={{position: 'absolute', left: 190}}>Show / hidden</motion.button>
                <AnimatePresence mode="popLayout">
                    {isVisible && (
                        <motion.div
                            initial={{ rotate: '0deg', scale: 0, y: 0 }} //начальное состояние
                            animate={{ rotate: '180deg', scale: 1, y: [0, 150, -150, -150, 0] }} //анимация
                            exit={{ rotate: '0deg', scale: 0, y: 0 }} //конечное состояние - перед удалением компонетна
                            transition={{ duration: 1, easy: 'backInOut',
                            // разбивка по кадрам /по времени. всего длитья = duration: 1, колтчество = y: [0, 150, -150, 150, 0] 
                            times: [0, 0.25, 0.5, 0.85, 1]
                            }} //длительность
                            style={{
                                background: 'black',
                                width: 150,
                                height: 150,
                                margin: 'auto',
                            }}>

                        </motion.div>)}

                </AnimatePresence>


        </div>

        </div>
        </>

    )
   
    
}
export default Mbutton;