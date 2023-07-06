import React from "react";
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
      <img src={question.image} alt={question.alt} />
      <h3>{question.text}</h3>
      <p>
        <a href={question.image}>{question.credit} </a>
        <a href="https://unsplash.com/">Unsplash</a>
      </p>
    </button>
  );
}
