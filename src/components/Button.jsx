import {motion} from 'framer-motion';
// import './Button.css';


const Button = (props) => {
    const {
        text,
        handleClick = Function.prototype,

    } = props
    return (
        <motion.button
        style = {btnStyle}
        whileHover={{backgroundColor: '#ddd'}}
        whileTap={{backgroundColor: '#ccc'}}
        onClick={handleClick}

        >
            {text}
        </motion.button>
    )
}

export default Button;
//набор стилей - передастся выше
const btnStyle = {
    border: '1px solid red',
    outline: 'none',
    padding: '14px 16px',
    backgroundColor: '#f1f1f1',
    cursor: 'pointer'


}