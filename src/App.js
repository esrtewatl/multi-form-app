import {Routes,Route} from 'react-router-dom'
import NavBar from './NavBar.js'
import './App.css';
import YourInfo from './YourInfo.js';
import SelectPlan from './SelectPlan';

function App() {
  return (
    <div className="container">
     <Routes>
      <Route path='/'element= {<NavBar />}></Route>
     </Routes>
    </div>
  );
}

export default App;
