import { Button } from 'react-bootstrap';
import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import {increment, decrement, reset} from './redux/counterSlice'


function App() {
  const count = useSelector((state)=>state.counter.count)
  const dispatch = useDispatch()
  return (
    <div  className='bg-dark w-100 text-light ' style={{height:"100vh"}}>
      <h2>Counter App</h2>
      <div className='bg-dark d-flex aligh-items-center justify-content-center'>
      <Button variant="primary" className='me-2' onClick={()=>dispatch(increment())}>Increment</Button>
      <h4 className='me-2'>{count}</h4>
      <Button variant="primary" onClick ={()=>dispatch(decrement())}>decrement</Button>
      </div>
      <div className='bg-dark d-flex aligh-items-center justify-content-center mt-5'>
        <Button variant="primary" onClick={()=>dispatch(reset())}>Reset</Button></div>
      
    </div>
  );
}

export default App;
