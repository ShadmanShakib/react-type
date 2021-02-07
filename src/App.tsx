import {useSelector,useDispatch} from 'react-redux'
import { increaseCount,decreaseCount } from './store/actions/index';

function App() {
const state=useSelector((state:any)=>state.count)
const dispatch=useDispatch()
return(
  <div className='bg-green-500'>
 
   Redux store setup
   <br/>
   {state}
   <button onClick={()=>dispatch(increaseCount())}>Add</button>
   <button onClick={()=>dispatch(decreaseCount())}>Minus</button>
  </div>
 
)
}

export default App;
