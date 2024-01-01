import './App.css';
import Filter from './components/Filter'
import {data} from './data'; 
import Menu from './components/Menu'


function App() {
  return (
    <div className="App">
      <Menu />
      <Filter data = {data}/>
    </div>
  )
}


export default App;
