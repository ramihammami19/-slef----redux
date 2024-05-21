import {  useDispatch } from 'react-redux'
import { decrement, increment } from '../redux/state.slice'
import { useStore } from '../zustand/store'
function Second() {
    const dispatch = useDispatch()
    const [inc,dec] = useStore((state) => [state.inc,state.dec])
  
    return (
      <div>
        <div>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <button
            aria-label="Increment value"
            onClick={() => inc()}
          >
            Increment with zustand
          </button>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
          <button
            aria-label="Decrement value"
            onClick={() => dec()}
          >
            Decrement with Zustand
          </button>
        </div>
      </div>
    )
}

export default Second