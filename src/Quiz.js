import React, { Component } from 'react'

let quizData = require('./quiz_data.json');
import QuizQuestion from './QuizQuestion.js'

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {quiz_position: 1};
  }
  render() {
    return <div>
      <QuizQuestion quiz_question="quizData.quiz_questions[quiz_position-1]"/>
      // <div className="QuizQuestion">
      //   {quizData.quiz_questions[0].instruction_text}
      // </div>
    </div>;
  }
}



export default Quiz
