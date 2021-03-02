import React from 'react';
import './Home.scss';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (

    <div className="Home">
      <div className="contentBtn-container">
        <div className="contentBtn">
          <Link to="/countdown">Countdown</Link>
        </div>
        <div className="contentBtn">2</div>
        <div className="contentBtn todo">3</div>
        <div className="contentBtn">4</div>
        <div className="contentBtn">5</div>
        <div className="contentBtn">6</div>
        <div className="contentBtn">7</div>
        <div className="contentBtn">8</div>
        <div className="contentBtn">9</div>
      </div>
    </div>
  );
}

export default Home;
