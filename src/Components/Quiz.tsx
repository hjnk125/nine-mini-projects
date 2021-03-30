import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import './Quiz.scss';

const questionBox = [
  {
    question: "What is my Name?",
    a: "Hojung",
    b: "Rihanna",
    c: "William",
    d: "Bentley",
    correct: "a"
  },
  {
    question: "How old am I?",
    a: "15",
    b: "26",
    c: "41",
    d: "98",
    correct: "b"
  },
  {
    question: "Where do I live now?",
    a: "New York",
    b: "Toronto",
    c: "Tokyo",
    d: "Seoul",
    correct: "d"
  },
  {
    question: "What month is my birthday?",
    a: "January❄️",
    b: "Febuary",
    c: "March",
    d: "April",
    correct: "a"
  },
  {
    question: "What am I afraid of?",
    a: "Needle💉",
    b: "Roller Coaster🎢",
    c: "Bugs🐛",
    d: "Snake🐍",
    correct: "c"
  }
]

const Quiz = ({ history }: RouteComponentProps) => {

  const [questionNum, setQuestionNum] = useState<number>(0)
  const [fullPage, setFullPage] = useState<boolean>(false);

  const [userAnswers, setUserAnswers] = useState<Array<string>>([]);
  const [newAnswer, setNewAnswer] = useState<string>('');

  let score: number = 0;

  return (
    <div className="background">
      <div className={(fullPage) ? "quiz-container-full" : "quiz-container"}>

        <div className="titlebar">
          <div className="buttons">
            <div className="close">
              <a className="closebutton" href="#!" onClick={() => { history.push('/'); }}><span>x</span></a>
            </div>
            <div className="minimize">
              <a className="minimizebutton" href="#!" onClick={() => setFullPage(false)}><span>&ndash;</span></a>
            </div>
            <div className="zoom">
              <a className="zoombutton" href="#!" onClick={() => setFullPage(true)}><span>+</span></a>
            </div>
          </div>
          <span className="titlebar-title">Quiz about me!</span>
        </div>

        {(questionNum < 5) ?
          (<div>
            {/* 문제영역 */}
            <h3>{questionBox[questionNum].question}</h3>
            <div className="question-box">
              <div>
                <input type="radio" id="a" name="answer" value="a" onChange={(e) => setNewAnswer(e.target.value)} />
                <label htmlFor="a">{questionBox[questionNum].a}</label>
              </div>
              <div>
                <input type="radio" id="b" name="answer" value="b" onChange={(e) => setNewAnswer(e.target.value)} />
                <label htmlFor="b">{questionBox[questionNum].b}</label>
              </div>
              <div>
                <input type="radio" id="c" name="answer" value="c" onChange={(e) => setNewAnswer(e.target.value)} />
                <label htmlFor="c">{questionBox[questionNum].c}</label>
              </div>
              <div>
                <input type="radio" id="d" name="answer" value="d" onChange={(e) => setNewAnswer(e.target.value)} />
                <label htmlFor="d">{questionBox[questionNum].d}</label>
              </div>
            </div>

            <h4>{questionNum + 1} / 5</h4>
            <button onClick={() => {
              let temp: Array<string> = userAnswers.slice();
              temp.push(newAnswer);
              setUserAnswers(temp);

              setQuestionNum(questionNum + 1);

              if (questionNum === 4) {
                alert('last question');
              }
            }}>next</button>
          </div>) :
          (<div>
            {/* 채점결과 */}
            <br />
            {userAnswers.map((ele, i) => {
              let color = 'green';
              if (questionBox[i].correct === ele) {
                score += 20;
                color = 'green';
              } else {
                color = 'FireBrick'
              }

              return (<div key={i} className={(color === 'green') ? "answer correct" : "answer wrong"} >
                <strong>{i + 1}. {questionBox[i].question}</strong>
                <div>
                  correct: {questionBox[i].correct}
                </div>
                <div>
                  your answer: <span style={{ color: color, fontWeight: 600 }}>{ele}</span>
                </div>
              </div>)
            })}

            <h4>🎉 score: {score} / 100 🎉</h4>
            <br />
          </div>)
        }



      </div>
    </div >
  )
};

export default Quiz;