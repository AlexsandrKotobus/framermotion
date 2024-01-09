import './App.css';
import {motion, useScroll} from 'framer-motion';
// import Filter from './components/Filter'
// import {data} from './data'; 
// import Menu from './components/Menu'
// import Scroll from './components/Scroll'

// import Movel from './components/Movel'
// import Mbutton from './components/Mbutton';
import Gestures from './components/Gestures';

  

function App() {
  const {scrollYProgress} = useScroll();
  return (
    <div className="App">
      <>
      {/* <motion.div className='progress-bar' style={{staleX: scrollYProgress}}/> */}
      {/* <h1>
          useScroll
      </h1> */}
      
      </>
      {/* <Menu />
      <Filter data = {data}/>
      <Scroll/> */}
      {/* <Movel/> */}
      {/* <Mbutton/> */}
      <Gestures/>
    </div>
  )
}


export default App;
