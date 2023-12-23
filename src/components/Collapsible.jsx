import {motion, AnimatePresence} from 'framer-motion'
import { useState } from 'react'

const Collapsible = (props) => {
    //тут те переменные, что мы получим от пропсов
    const {
        title ='click me',
        children,
    } = props;
    //стейт 
    const [isVisible, setVisible] = useState(false);
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
            <AnimatePresence>{
                isVisible && (
                    <motion.div>
                    <div style = {{
                        padding: '0.8rem 1.2rem',
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