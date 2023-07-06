import React from "react";
import QuestionBlock from "./QuestionBlock";
export default function QuestionsBlock({
  quizItem,
  setChosenAnswerItems,
  chosenAnswerItems,
  unAnsweredQuestionIds,
  setUnAnsweredQuestionIds
}) {
  //console.log(quizItem)
  return (
    <>
      <h2 id={quizItem.id} className="question-title">
        {quizItem.text}
      </h2>
      <div className="questions-container">
        {quizItem.questions.map((question, _index) => (
          <QuestionBlock
            key={_index}
            quizItemId={quizItem.id}
            question={question}
            chosenAnswerItems={chosenAnswerItems}
            setChosenAnswerItems={setChosenAnswerItems}
            unAnsweredQuestionIds={unAnsweredQuestionIds}
            setUnAnsweredQuestionIds={setUnAnsweredQuestionIds}
          />
        ))}
      </div>
    </>
  );
}
