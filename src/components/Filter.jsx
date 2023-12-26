import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Button from './Button';

const Filter =({data}) =>{
    // console.log(data)
    // стейт - начальное значение отфильтрованные машины cars
    // параметры - карточки cards, и измененные карточки setCards
    const [cards, setCards] = useState(data.filter(el => el.category === 'cars'));
    // создааем массив из данных (про кнопки) 
    // к них естьькатегории, по которым мы и собираем их
    //  - проходим по нему reduce
    const buttons = data.reduce((acc, el)=> {
        // мы формируем новый массив, в него будем собирать по условию 
        // если данные -по категории уже есть - (возвращаем) return тот же массив, ничего не изменяем
        if(acc.includes(el.category)) return acc;
        // или вернем текущее значение и новые котегории
    return [...acc, el.category];
    }, []);
    

//функция которая будет принимать некий селенкто и будет менять 
//набор карточек и делать им фильтр на основе селектора
    const handleFilter = (selector) => {
        //берем каждый элемент и говорим, что категория элемента должна быть  = селектору
        setCards(data.filter(el=> el.category === selector));
        
    }
    // разметка
    return (
        <div>
            <div>
                {buttons.map(btn=>(<Button
                // !!! если нет дочерних элементов, то пишем в 1 скобке
                // <Button>, а не в <Button></Button>
                // key - Для map
                    key={btn}
                    text={btn}
                    // btn - будет селектором
                    handleClick={() => handleFilter(btn)}
                
                />))}
            </div>
            {/* карточки */}
            <div style={{owerflow: 'hidden', maxWidth: 400}}>
                <AnimatePresence initial ={false} mode='wait'>
                    {
                        cards.map(el => (
                            <motion.div 
                            key={el.title}
                            style={boxStyle}
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                            transition={{duration: 1}}
                            >
                                {/* title - см в data */}
                                {el.title}
                            </motion.div>
                        )

                        )
                    }
                </AnimatePresence>
            </div>
        </div>
    );


}

export default Filter;

const boxStyle = {
    float: 'left',
    backgroundColor: '#525c80',
    conlor: '#ffffff',
    width: '100px',
    lineHeight: '100px',
    textAlign: 'center',
    // padding: '14px 16px',
    margin: '2px',
};