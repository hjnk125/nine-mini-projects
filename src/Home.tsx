import React from 'react';
import './Home.scss';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (

    <div className="Home">
      {/* <div>Nine TypeScript Apps</div> */}
      <div className="contentBtn-container">
        <Link to="/countdown" className="contentBtn">
          <div className="contentBtn-number">1
            <span className="contentBtn-text">Countdown</span>
          </div>
        </Link>
        <Link to="/quiz" className="contentBtn">
          <div className="contentBtn-number">2
            <span className="contentBtn-text">Quiz</span>
          </div>
        </Link>
        <div className="contentBtn">
          <div className="contentBtn-number">3
          </div>
        </div>
        <div className="contentBtn">
          <div className="contentBtn-number">4
          </div>
        </div>
        <div className="contentBtn">
          <div className="contentBtn-number">5
          </div>
        </div>
        <div className="contentBtn">
          <div className="contentBtn-number">6
          </div>
        </div>
        <div className="contentBtn">
          <div className="contentBtn-number">7
          </div>
        </div>
        <div className="contentBtn">
          <div className="contentBtn-number">8
          </div>
        </div>
        <div className="contentBtn">
          <div className="contentBtn-number">9
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
