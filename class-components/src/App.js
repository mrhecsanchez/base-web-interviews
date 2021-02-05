import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

const Repetitions = (props) => {
  const countRef = React.createRef();
  
  useEffect(()=>{
    if (!props.value.times) {
      countRef.current.style.color = 'red';
    } else {
      countRef.current.style.color = '';
    }
  }, [props.value.times, countRef])

    return (
      <div className="repetitions">
        <div ref={countRef}>Count: {props.value.count}</div>
        {props.value.times === 0 && <div>Reset!</div>}
      </div>
    );
}

const App = () => {
  const [value, setValue] = useState({count: 0, times: 0})

  useEffect(()=>{
    const interval = setInterval(() => updateData(), 1000);
    return () => clearTimeout(interval);
  }, []);

  const updateData = () => {
    setValue((value)=>({
      times: value.times >= 5 ? 0 : value.times + 1,
      count: value.times >= 5 ? value.count + 1 : value.count
    }));    
  }

  console.log('t', {value});
  return (
    <div className="App">
      <Repetitions value={value} />
    </div>
  );
}

export default App;
