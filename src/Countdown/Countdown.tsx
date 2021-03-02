import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import './Countdown.scss';

const Countdown = ({ history }: RouteComponentProps) => {

  const [userDate, setUserDate] = useState<string>('');
  const [currentDate, setCurrentDate] = useState<number>(Date.now);
  // console.log(today, userDate, currentDate);
  // console.log(new Date(userDate).getTime());

  const newYear_timeGap = (new Date('2022-01-01').getTime() - currentDate) / 1000;
  const newYear_days = Math.floor(newYear_timeGap / 3600 / 24);
  const newYear_hours = Math.floor(newYear_timeGap / 3600) % 24;
  const newYear_mins = Math.floor(newYear_timeGap / 60) % 60;
  const newYear_secs = Math.floor(newYear_timeGap % 60);

  const xmas_timeGap = (new Date('2021-12-25').getTime() - currentDate) / 1000;
  const xmas_days = Math.floor(xmas_timeGap / 3600 / 24);
  const xmas_hours = Math.floor(xmas_timeGap / 3600) % 24;
  const xmas_mins = Math.floor(xmas_timeGap / 60) % 60;
  const xmas_secs = Math.floor(xmas_timeGap % 60);

  const user_timeGap = (new Date(userDate).getTime() - currentDate) / 1000;
  const user_days = Math.floor(user_timeGap / 3600 / 24);
  const user_hours = Math.floor(user_timeGap / 3600) % 24;
  const user_mins = Math.floor(user_timeGap / 60) % 60;
  const user_secs = Math.floor(user_timeGap % 60);

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
      <div className="countdown-container">

        <div className="titlebar">
          <div className="buttons">
            <div className="close">
              <a className="closebutton" href="#" onClick={() => {
                history.push('/');
              }}><span>x</span></a>
            </div>
            <div className="minimize">
              <a className="minimizebutton" href="#"><span>&ndash;</span></a>
            </div>
            <div className="zoom">
              <a className="zoombutton" href="#"><span>+</span></a>
            </div>
          </div>
          <span className="titlebar-title">CountDown!</span>
        </div>


        <h3>🎉 2022 🎊</h3>
        <div className="counter">
          <div className="counter-ele">
            <p>{newYear_days}</p>
            <span>days</span>
          </div>
          <div className="counter-ele">:</div>
          <div className="counter-ele">
            <p>{newYear_hours}</p>
            <span>hours</span>
          </div>
          <div className="counter-ele">:</div>
          <div className="counter-ele">
            <p>{newYear_mins}</p>
            <span>mins</span>
          </div>
          <div className="counter-ele">:</div>
          <div className="counter-ele">
            <p>{newYear_secs}</p>
            <span>secs</span>
          </div>
        </div>


        <h3>🎄 Christmas 🎅</h3>
        <div className="counter">
          <div className="counter-ele">
            <p>{xmas_days}</p>
            <span>days</span>
          </div>
          <div className="counter-ele">:</div>
          <div className="counter-ele">
            <p>{xmas_hours}</p>
            <span>hours</span>
          </div>
          <div className="counter-ele">:</div>
          <div className="counter-ele">
            <p>{xmas_mins}</p>
            <span>mins</span>
          </div>
          <div className="counter-ele">:</div>
          <div className="counter-ele">
            <p>{xmas_secs}</p>
            <span>secs</span>
          </div>
        </div>


        <h3 style={{ display: "inline-block", marginRight: "10px" }}>📆 Check your date:</h3>
        <input type="date" onChange={(e) => setUserDate(e.target.value)} />
        <div>
          {(userDate === '') ? '' :
            <div className="counter">
              <div className="counter-ele">
                <p>{user_days}</p>
                <span>days</span>
              </div>
              <div className="counter-ele">:</div>
              <div className="counter-ele">
                <p>{user_hours}</p>
                <span>hours</span>
              </div>
              <div className="counter-ele">:</div>
              <div className="counter-ele">
                <p>{user_mins}</p>
                <span>mins</span>
              </div>
              <div className="counter-ele">:</div>
              <div className="counter-ele">
                <p>{user_secs}</p>
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