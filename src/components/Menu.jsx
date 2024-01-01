import {AnimateSharedLayout, motion} from 'framer-motion';
import {useState} from 'react';

const menuData = ['Short', 'Very Looooooooong item', 'Normal item', "Sacha"];

function Menu(){
    // статус активности
    const [activeIndex, setActive] = useState(0);
    return (
        <div 
        style={{
            display: 'flex',
            backgroundColor: '#eee',
            padding: '1rem',
            borderRadius: '25px',
        }}>
           
            {
                // тут мапятся элементы массива-меню
            menuData.map((item, index) => (
                <MenuItem 
                    key={item}
                    item={item + '!'}
                    // статус - выделен или нет
                    isSelected={activeIndex === index}
                    // обработчик
                    handleClick={()=> setActive(index)}
                />
            ))}
             
             </div>
    )
    

   

}
export default Menu;

// для удобства выделили в отдельную функцию
function MenuItem(props){
    const {
        item,
        isSelected,
        // такое пишут чтоб небыло ошибки - 
        handleClick = Function.prototype,
    }=props;

    return (
        <motion.div
            onClick={handleClick}
            style={{
                margin: '0 0.5rem',
                fontWeight: 900,
                position: 'relative',
            }}
            initial = {{color: '#000'}}
            animate = {{color: isSelected ? 'rgba(255, 0, 0)' : '#000'}}
            >
                {isSelected && <ActiveLine/>}
                {item}
            </motion.div>
    )
}

function ActiveLine() {
    // без параметров
    return(
        <motion.div
            //  у этого motion.div нет детей, только настройки 
            // layoutId - уникальное фиксированное имя, значение его мб разным, например active
            layoutId='activeItem'
            style={{
                width: '100%', 
                height: '4px',
                position: 'absolute', 
                bottom: '-6px',
                backgroundColor: 'rgba(255, 0, 0)',

            }}

        />

    )
}