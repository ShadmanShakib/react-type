import React from 'react'
import { RouteComponentProps } from '@reach/router';
import {useSelector,useDispatch} from 'react-redux'
import { increaseCount,decreaseCount } from '../store/counter/actions';

function Home(props:RouteComponentProps) {
    const state=useSelector((state:any)=>state.counter.count)
const dispatch=useDispatch()
    return (
        <React.Fragment>
             <div className='bg-green-500'>
 
 Redux store setup
 <br/>
 {state}
 <button onClick={()=>dispatch(increaseCount())}>Add</button>
 <button onClick={()=>dispatch(decreaseCount())}>Minus</button>
</div>
        </React.Fragment>
    )
}

export default Home
