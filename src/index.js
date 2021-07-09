import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";


class App extends React.Component {
  state = {
    x: 0,
    y: 0,
    x1: 0,
    y1: 0,
    x2: 0,
    y2: 0,
    x3: 0,
    y3: 0,
    x4: 0,
    y4: 0,
    x5: 0,
    y5: 0,
    x6: 0,
    y6: 0,
    x7: 0,
    y7: 0,
  };
  componentDidMount() {
    this.mounted = true;
    this.tick();
  }
  componentWillUnmount() {
    this.mounted = false;
  }
  tick = () => {
    const time = Date.now() / 1000;   // 실시간 초를 얻어올수 있음
    console.log(150+100 * Math.sin(Date.now() / 1000))
    this.setState({
      x: 700 + 150 * Math.sin(time),              //실시간 초 변동을 이용해서 x좌표와 y좌표를 이런식으로 값을뽑아낼수있음. 
      y: 500 + 150 * Math.cos(time),               //x좌표 :50->250->50->250     ,  y좌표 : 얘도 50->250->50->250... 인데 x가50일 때는 y는 150
      x1:700 + 80 * Math.sin(time),
      y1:500 + 200 * Math.cos(time),
      x2:700 + 200 * Math.sin(time),
      y2:500 + 250 * Math.cos(time),
      x3:700 + 360 * Math.sin(time),
      y3:500 + 300 * Math.cos(time),
      x4:700 + 300 * Math.sin(time),
      y4:500 + 100 * Math.cos(time),
      x5:700 + 400 * Math.sin(time),
      y5:500 + 350 * Math.cos(time),
      x6:700 + 650 * Math.sin(time),
      y6:500 + 450 * Math.cos(time),
      x7:700 + 850 * Math.sin(time),
      y7:500 + 550 * Math.cos(time),


    });
    if (this.mounted) {
      requestAnimationFrame(this.tick);
    }
  };
  render() {
    const { x, y, x1, y1, x2, y2, x3, y3,  x4, y4,  x5, y5,  x6, y6,  x7, y7,  } = this.state;
    return (
      <svg id= "svgid" width="2500" height="2500">
        {/* center */}
        <circle r="50" cx="700" cy="500" fill="red" />
        <circle r="25" cx={x} cy={y} fill="black" />
        <circle r="15" cx={x1} cy={y1} fill="yellow" />
        <circle r="18" cx={x2} cy={y2} fill="blue" />
        <circle r="10" cx={x3} cy={y3} fill="purple" />
        <circle r="8" cx={x4} cy={y4} fill="green" />
        <circle r="26" cx={x5} cy={y5} fill="pink" />
        <circle r="15" cx={x6} cy={y6} fill="white" />
        <circle r="19" cx={x7} cy={y7} fill="yellow" />

      </svg>
    );
  }
}


ReactDOM.render(
  <BrowserRouter>
    <App />
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
