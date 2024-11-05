import { Button } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div  className='bg-dark w-100 text-light ' style={{height:"100vh"}}>
      <h2>Counter App</h2>
      <div className='bg-dark d-flex aligh-items-center justify-content-center'>
      <Button variant="primary" className='me-2'>Increment</Button>
      <h4 className='me-2'>0</h4>
      <Button variant="primary">decrement</Button>
      </div>
     
    </div>
  );
}

export default App;
