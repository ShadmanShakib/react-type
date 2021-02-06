import {useSelector} from 'react-redux'

function App() {
const state=useSelector((state:any)=>state.count)
return(
  <div className='bg-green-500'>
 
   Redux store setup
   {state}
  </div>
 
)
}

export default App;
