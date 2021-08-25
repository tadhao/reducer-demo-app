import './App.css';
import { useReducer, createContext } from 'react' 
import ComponentA from './components/ComponentA';

const initialVal = {
  value: 0
}

export const CounterContext = createContext();

const reducer = (state, action) =>{
  switch(action.type) {
    case "increment":
      return {value: state.value + 1}
    case "decrement":
      return {value: state.value - 1}
    case "reset":
      return initialVal
    default:
      return state
  }
}

function App() {

  const [stateVal, dispatch] = useReducer(reducer, initialVal)
  
  return (
    <div className="App">
      <h1>Counter: {stateVal.value}</h1>
      <span>Counter in App: {stateVal.value}</span>
      <button onClick={()=>dispatch({type: "increment"})}>Increment</button>
      <button onClick={()=>dispatch({type: "decrement"})}>Decrement</button>
      <button onClick={()=>dispatch({type: "reset"})}>Reset</button>

      <CounterContext.Provider value={{state: stateVal, dispatch: dispatch}}>
        <p><ComponentA /></p>
      </CounterContext.Provider>
    </div>
  );
}

export default App;
