import {motion, AnimatePresence} from 'framer-motion'
import { useState } from 'react'

const Collapsible = (props) => {
    //тут те переменные, что мы получим от пропсов
    const {
        title ='click me',
        children,
    } = props;
    //стейт для отображения состояния видимости
    const [isVisible, setVisible] = useState(true);
    //функция управления видимостью
    const handelVisibility = () => setVisible(!isVisible);
    return (
        <>
        {/* область, по которой мы кликаем -типа кнопки*/}
        <div 
        onClick = {handelVisibility}
        style = {{
            backgroundColor: '#ddd',
            width: 300,
            padding: '0.8rem 1.2rem',
        }}
        
        >
            {title}
        </div>
        {/* контентная часть, которая будет появляться и исчезать */}
            <AnimatePresence initial={false}>{
                isVisible && (
                    <motion.div
                    initial = {{height: 0}}
                    animate={{height: 'auto'}}
                    exit={{height: 0}}
                    style={{overflow: 'hidden'}}
                    transition={{duration: 2}}
                    >
                    <div style = {{
                        padding: '0.8rem 1.2rem', width: 300, border: '1px solid #ddd'
                    }}>                   
                        {children}
                    </div>
                    </motion.div>
                )
                }
            </AnimatePresence>
        </>
    )
}
export default Collapsible;