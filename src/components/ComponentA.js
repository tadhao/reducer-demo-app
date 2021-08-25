import { useContext } from 'react'
import { CounterContext } from '../App'

const ComponentA = () => {
	const propVal = useContext(CounterContext)
	return(
		<>
			<span>Counter in ComponentA: {propVal.state.value}</span>
			<button onClick={()=>propVal.dispatch({type: "increment"})}>Increment</button>
			<button onClick={()=>propVal.dispatch({type: "decrement"})}>Decrement</button>
			<button onClick={()=>propVal.dispatch({type: "reset"})}>Reset</button>
		</>
	)
}

export default ComponentA