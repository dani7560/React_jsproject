import { useState , useEffect} from 'react';
import './App.css';



const App=() =>{
  useEffect(()=>{
    alert('reload page'+count),[count];
  });
  const [count,setcount]=useState(0);
  
  return (
    <div className="App">
      <button onClick={()=>setcount((prevcount)=>prevcount-1)}>-</button>
      <br></br>
      <button>{count}</button>
      <br></br>
      <button onClick={()=>setcount((precount)=>precount+2)}>+</button>

    </div>
  );
}

export default App;
