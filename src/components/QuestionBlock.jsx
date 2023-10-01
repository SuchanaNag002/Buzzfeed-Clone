import React from "react";
import {FcCheckmark} from "react-icons/fc"
export default function QuestionBlock({
  question,
  quizItemId,
  setChosenAnswerItems,
  chosenAnswerItems,
  unAnsweredQuestionIds,
  setUnAnsweredQuestionIds,
}) {
  function handleClick() {
    setChosenAnswerItems((prevState) => [...prevState, question.text]);
    unAnsweredQuestionIds &&
      setUnAnsweredQuestionIds(
        unAnsweredQuestionIds.filter((id) => id !== quizItemId)
      );
  }
  const validPick =
    (chosenAnswerItems && !chosenAnswerItems.includes(question.text)) &&
    (unAnsweredQuestionIds && !unAnsweredQuestionIds.includes(quizItemId));
  return (
    <button
      className="question-block"
      onClick={handleClick}
      disabled={validPick}
    >
      <div className="img-container">
        <div className={chosenAnswerItems.includes(question.text)?"overlay":"not-overlay"}>
         <div className="check" style={{fontSize:"3rem"}}><FcCheckmark/></div>
        </div>
        <img src={question.image} alt={question.alt} />
      </div>
      <h3>{question.text}</h3>
      <p>
        <a href={question.image}>{question.credit} </a>
        <a href="https://unsplash.com/">Unsplash</a>
      </p>
    </button>
  );
}
