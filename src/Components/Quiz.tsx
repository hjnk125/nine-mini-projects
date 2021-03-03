import React, { useEffect, useState } from 'react';
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

  return (
    <div className="background">
      Quiz about me!
      <div>{questionNum + 1} / 5</div>

      <ul>
        <li>{questionBox[questionNum].question}</li>
        {/* make radio button */}
        <li>{questionBox[questionNum].a}</li>
        <li>{questionBox[questionNum].b}</li>
        <li>{questionBox[questionNum].c}</li>
        <li>{questionBox[questionNum].d}</li>
      </ul>

      <button onClick={() => {
        if (questionNum < 4) {
          setQuestionNum(questionNum + 1)
        } else {
          alert('last question')
        }
      }}>next</button>

    </div>
  )
};

export default Quiz;