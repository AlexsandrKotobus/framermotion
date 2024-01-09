import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Button from './Button';

const Filter =({data}) =>{
    // console.log(data)
    // стейт - начальное значение отфильтрованные машины cars
    // параметры - карточки cards, и измененные карточки setCards
    const [cards, setCards] = useState(data);
    // создааем массив из данных (про кнопки) 
    // к них есть категории, по которым мы и собираем их
    //  - проходим по нему reduce

    // состояние для кнопок фильтра
const [selected, setSelected] =useState(0);


    const buttons = data.reduce((acc, el)=> {
        // мы формируем новый массив, в него будем собирать по условию 
        // если данные -по категории уже есть - (возвращаем) return тот же массив, ничего не изменяем
        if(acc.includes(el.category)) return acc;
        // или вернем текущее значение и новые котегории
    return [...acc, el.category];
    // первая кнопка - all
    }, ['all']);
    

//функция которая будет принимать некий селенктор и будет менять 
//набор карточек и делать им фильтр на основе селектора
    const handleFilter = (selector) => {
        // проверка
        if (selector === 'all') return setCards(data);
        //берем каждый элемент и говорим, что категория элемента должна быть  = селектору
        setCards(data.filter(el=> el.category === selector));
        
    }
    // разметка
    return (
        <motion.div layout
        style={{margin: '5s0px auto'}}>
            <div style={{backgroundColor: '#f1f1f1'}}>
                {buttons.map((btn, index) =>(<Button
                // !!! если нет дочерних элементов, то пишем в 1 скобке
                // <Button>, а не в <Button></Button>
                // key - Для map
                    key={btn}
                    text={btn}
                    // btn - будет селектором
                    handleClick={() => {handleFilter(btn); setSelected(index)}}
                    isSelected = {selected===index}
                
                />))}
            </div>
            {/* карточки */}
            {/* для красивой анимации добавим  motion. и проп layout*/}
            <motion.div 
                layout
                    style={{owerflow: 'hidden', maxWidth: 400, border: '1px solid #ccc'}}>
                        <AnimatePresence initial ={false} mode='wait' >
                            {
                                cards.map(el => (
                                    <motion.div 
                                    layout
                                    key={el.title}
                                    style={boxStyle}
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1}}
                                    exit={{opacity: 0}}
                                    transition={{duration: 0.5}}
                                    >
                                        {/* title - см в data */}
                                        {el.title}
                                    </motion.div>
                                )

                                )
                            }
                        </AnimatePresence>
            </motion.div>
        </motion.div>
    );


}

export default Filter;

const boxStyle = {
    float: 'left',
    backgroundColor: '#525c80',
    color: '#ffffff',
    width: '100px',
    lineHeight: '100px',
    textAlign: 'center',
    // padding: '14px 16px',
    margin: '2px',
};