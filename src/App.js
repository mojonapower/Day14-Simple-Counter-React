/* import logo from './logo.svg'; */
/* import './components.jsx'; */
import './App.css';

const Contador = props => {
  return(
  <p>{props.tiempo}</p>
  )
}


function App() {
 return (
   <Contador tiempo="0" />
 )
}

export default App;
