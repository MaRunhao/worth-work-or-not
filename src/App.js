import './App.css';
import { S1 } from './steps/s1';
import { S2 } from './steps/s2';
import { S3 } from './steps/s3';
import { useState } from 'react';

function App() {
  const [step, setStep] = useState(1);
  const [result, setResult] = useState(0);

  const goNext = () => {
    setStep(step + 1)
  }
  const initStep = () => {
    setStep(1)
    setResult(0)
  }
  const curStep = () => {
    return new Map([
      [1, <S1 next={ () => goNext() } />],
      [2, <S2 next={ () => goNext() } submit={(val) => { setResult(val) }} />],
      [3, <S3 init={ () => initStep() } result={result} />],
    ]).get(step)
  }
  return (
    <div className="App">
      { curStep() }
    </div>
  );
}

export default App;
