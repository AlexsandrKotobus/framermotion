import {animate, motion} from "framer-motion"
import logo from './logo.svg';
import './App.css';

function App() {
//переменная для описания варианта анимации
const pVariants = {
  hidden: {
    x: -1000,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
}
//варианты для анимации
const listVariants ={
  // свойство мб как объектом так и функцией - как в нашем случае
  visible: i=> ({
    opacity: 1,
    y: 0,
    transition: {
      // i - индекс
      delay: i *0.5,
    }
  }),
  hidden: {opacity: 0, y: 100, }
}

const items = ['Text1', 'Text2', 'Text3'];
  return (
    <div className="App">
      <header className="App-header">
        <motion.img 
          src={logo} 
          className="App-logo" 
          alt="logo"
          // initial - условия, от которых начинается анимация
          // initial = {{}}

          
          animate = {{rotate: 360}}   // при обновлении повернет картинку 1 раз
          transition={{
            // delay: 3, - задержка начала
            // delay: 3,
            duration: 2,
            repeat: Infinity,
            repeatDelay: 1,              // repeatDelay: 1, - пауза между анимациями
            repeatType: 'reverse',       //repeatType - имеет  3 варианта
            // type: 'spring',         //имеет 5 типов "tween",  анимации - скорость вращения-по времени
            type: 'tween',
            ease: 'easeInOut'
          }}
          
          />
        <motion.p
          initial = {'hidden'}
          animate ={'visible'}
          transition = {{ 
            delay: 2
          }}
          variants={pVariants}
          >
          Edit <code>src/App.js</code> and save to reload.
        </motion.p>
        <motion.a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{
            scale: 1.3, //увеличивает
            color: 'white' //меняет цвет на белый
          }}
        >
          Learn React
        </motion.a>
        {/* тут будет map(мапиться) наш массив текстов */}
        {
        items.map((el, i) => (
          <motion.li 
          key={el}
          variants={listVariants}
          initial = 'hidden'
          animate = 'visible'
          //доп свойство - мы передаем в него индекс элемента
          custom = {i}
          >
            {el}
          </motion.li>
        ))
}
      </header>
    </div>
  );
}

export default App;
