import { useState } from 'react'
import InputSection from './components/InputSection';
import ArrowIcon from './components/ArrowIcon';
import Result from './components/Result';

function App() {
  const [day, setDay] = useState(1);
  const [month, setMonth] = useState(1);
  const [year, setYear] = useState(1900);
  const [result, setResult] = useState({'years':'--', 'months':'--', 'days':'--'});

  return (
    <div className="container">
      <InputSection day={day} month={month} year={year} />
      <ArrowIcon />
      <Result result={result} />
    </div>
  )
}

export default App