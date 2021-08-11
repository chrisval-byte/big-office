import './App.css';
import { useSelector, useDispatch } from "react-redux"
import {increment, decrement} from "./redux/actions"

function App() {
  //CON USE SELECTOR PODEMOS EXTRAER EL ESTADO ACTUAL
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
    
  );
}

export default App;
