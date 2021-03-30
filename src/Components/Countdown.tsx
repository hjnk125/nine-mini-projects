import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import './Countdown.scss';

const Countdown = ({ history }: RouteComponentProps) => {

  const [fullPage, setFullPage] = useState<boolean>(false);

  const [userDate, setUserDate] = useState<string>('');
  const [currentDate, setCurrentDate] = useState<number>(Date.now);
  // console.log(today, userDate, currentDate);
  // console.log(new Date(userDate).getTime());

  function getTime(date: string) {
    const timeGap = (new Date(date).getTime() - currentDate) / 1000;
    const days = Math.floor(timeGap / 3600 / 24);
    const hours = Math.floor(timeGap / 3600) % 24;
    const mins = Math.floor(timeGap / 60) % 60;
    const secs = Math.floor(timeGap % 60);

    return [days, hours, mins, secs];
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(Date.now);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="background">
      <div className={(fullPage) ? "countdown-container-full" : "countdown-container"}>

        <div className="titlebar">
          <div className="buttons">
            <div className="close">
              <a className="closebutton" href="#!" onClick={() => {
                history.push('/');
              }}><span>x</span></a>
            </div>
            <div className="minimize">
              <a className="minimizebutton" href="#!" onClick={() =>
                setFullPage(false)
              }><span>&ndash;</span></a>
            </div>
            <div className="zoom">
              <a className="zoombutton" href="#!" onClick={() =>
                setFullPage(true)
              }><span>+</span></a>
            </div>
          </div>
          <span className="titlebar-title">CountDown!</span>
        </div>


        <h3>🎉 2022 🎊</h3>
        <div className="counter">
          <div className="counter-ele">
            <p>{getTime('2022-01-01')[0]}</p>
            <span>days</span>
          </div>
          <div className="counter-ele">:</div>
          <div className="counter-ele">
            <p>{getTime('2022-01-01')[1]}</p>
            <span>hours</span>
          </div>
          <div className="counter-ele">:</div>
          <div className="counter-ele">
            <p>{getTime('2022-01-01')[2]}</p>
            <span>mins</span>
          </div>
          <div className="counter-ele">:</div>
          <div className="counter-ele">
            <p>{getTime('2022-01-01')[3]}</p>
            <span>secs</span>
          </div>
        </div>


        <h3>🎄 Christmas 🎅</h3>
        <div className="counter">
          <div className="counter-ele">
            <p>{getTime('2021-12-25')[0]}</p>
            <span>days</span>
          </div>
          <div className="counter-ele">:</div>
          <div className="counter-ele">
            <p>{getTime('2021-12-25')[1]}</p>
            <span>hours</span>
          </div>
          <div className="counter-ele">:</div>
          <div className="counter-ele">
            <p>{getTime('2021-12-25')[2]}</p>
            <span>mins</span>
          </div>
          <div className="counter-ele">:</div>
          <div className="counter-ele">
            <p>{getTime('2021-12-25')[3]}</p>
            <span>secs</span>
          </div>
        </div>


        <h3 style={{ display: "inline-block", marginRight: "10px" }}>📆 Check your date:</h3>
        <input type="date" onChange={(e) => setUserDate(e.target.value)} />
        <div>
          {(userDate === '') ? '' :
            <div className="counter">
              <div className="counter-ele">
                <p>{getTime(userDate)[0]}</p>
                <span>days</span>
              </div>
              <div className="counter-ele">:</div>
              <div className="counter-ele">
                <p>{getTime(userDate)[1]}</p>
                <span>hours</span>
              </div>
              <div className="counter-ele">:</div>
              <div className="counter-ele">
                <p>{getTime(userDate)[2]}</p>
                <span>mins</span>
              </div>
              <div className="counter-ele">:</div>
              <div className="counter-ele">
                <p>{getTime(userDate)[3]}</p>
                <span>secs</span>
              </div>
            </div>

          }

        </div>
      </div>
    </div>
  )
};

export default Countdown;