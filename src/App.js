import {useState} from 'react';
import './App.css';
import MyFooter from './MyFooter';
import MyHeader from './MyHeader';

function App() {
    setInterval(UpdateTime, 1000);
    let now = new Date().toLocaleTimeString('th-TH');
    const [time, setTime] = useState(now);
    const [num, setNum] = useState(0);
    const [showtext, setText] = useState()


    function UpdateTime() {
        let NewTime = new Date().toLocaleTimeString('th-TH');
        setTime(NewTime)

    }

    function CheckNum(x) {

    let Prime = true
      if (x > 1) {
        for (let i = 2; i < x; i++) {
      if (x % i === 0) {
        Prime = false
        break;
     }
    }
            if (Prime) {
                setText('เป็นจำนวนเฉพาะ')
            }else{
                setText('ไม่เป็นจำนวนเฉพาะ')
            }
        } else {
            setText('ไม่เป็นจำนวนเฉพาะ')
        }
    }


return (
  <div>
    <MyHeader/>
    <div>
      <div className='My-content'>
      <div>ขณะนี้เวลา</div>
      <div>{time}</div>
    </div>
    <div className='My-content'>
      <h2>{num}</h2>
      <button onClick={() => {
        const x = num + 1 
        setNum(x)
        CheckNum(x)
        }
      }>เพิ่ม</button>
      <button onClick={() => {const y = num - 1
        setNum(y)
        CheckNum(y)
        }
      }>ลด</button>
      <p>{showtext}</p>
    </div></div>
  
  <MyFooter/>
</div>

    );
}

export default App;