import { useEffect, useState } from 'react'
import InputSection from './components/InputSection';
import ArrowIcon from './components/ArrowIcon';
import Result from './components/Result';

function App() {
  const [day, setDay] = useState("DD");
  const [month, setMonth] = useState("MM");
  const [year, setYear] = useState("YYYY");
  const [result, setResult] = useState({'years':'--', 'months':'--', 'days':'--'});

  const calculate_age = () => {
    let date1 = new Date(); // Current date 
    let date2 = new Date(year, month, day); // User's date of birth
    let date3 = new Date(date1.getFullYear(), month, day); // User's current year birthday
    let years = date1.getFullYear() - date2.getFullYear();
    let months = 0;
    let days = 0;

    // Birthday not yet happened this year
    if (date3 > date1) {
      years--;
      date3 = new Date(date1.getFullYear() - 1, month, day); // Last year's birthday
      months = month - date1.getMonth();
    } else {
      months = date1.getMonth() - month;
    }

    let date4 = new Date(date1.getFullYear(), date1.getMonth(), day);
    if (date4 > date1) {
      date4 = new Date(date1.getFullYear(), date1.getMonth() - 1 , day);
      months--;
    }

    let time_difference =  date1.getTime() - date4.getTime();
    const one_day = 24 * 60 * 60 * 1000;
    const num_days = Math.round(time_difference/one_day);
    days = num_days - 1;
    
    setResult({'years': ('0' + years).slice(-2), 'months': ('0' + months).slice(-2), 'days': ('0' + days).slice(-2)})
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