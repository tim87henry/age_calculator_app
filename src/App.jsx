import { useEffect, useState } from 'react'
import InputSection from './components/InputSection';
import ArrowIcon from './components/ArrowIcon';
import Result from './components/Result';

function App() {
  const [day, setDay] = useState("DD");
  const [month, setMonth] = useState("MM");
  const [year, setYear] = useState("YYYY");
  const [result, setResult] = useState({'years':'--', 'months':'--', 'days':'--'});

  useEffect(() => {
    // console.log("HERE "+year)
    // if (day != "DD" && month != "MM" && year != "YYYY") {
    //   setResult({'years':'__', 'months':'__', 'days':day})
    // }
  }, [day, month, year])

  const calculate_age = () => {
    let date1 = new Date();
    let date2 = new Date(year, month-1, day);
    console.log("Current ::  "+date1);
    console.log("Input :: "+date2)
    let time_difference =  date1.getTime() - date2.getTime();
    const one_day = 24 * 60 * 60 * 1000;
    const num_days = Math.round(time_difference/one_day);
    let result = new Date(num_days);
    const years = Math.floor(num_days/365);
    const months = ((date1.getMonth() - date2.getMonth() + (12 * (date1.getFullYear() - date2.getFullYear()))) % 12) - 1 ;
    const days = num_days%(30)
    setResult({'years': years, 'months': ('0' + months).slice(-2), 'days': ('0' + days).slice(-2)})
  }


  return (
    <div className="container">
      <InputSection 
        day={day} 
        month={month} 
        year={year} 
        setDay={setDay}
        setMonth={setMonth}
        setYear={setYear}
        />
      <ArrowIcon
        calculate_age={calculate_age} 
      />
      <Result result={result} />
    </div>
  )
}

export default App