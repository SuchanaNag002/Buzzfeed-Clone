import { useState, useEffect } from "react";
import Title from "./components/Title";
import QuestionsBlock from "./components/QuestionsBlock";
import AnswerBlock from "./components/AnswerBlock";
export default function App() {
  const [quiz, setQuiz] = useState(false);
  const [chosenAnswerItems, setChosenAnswerItems] = useState([]);
  const [unAnsweredQuestionIds, setUnAnsweredQuestionIds] = useState([]);
  const [showAnswer, setShowAnswer] = useState(false);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8000/quiz#");
      const json = await response.json();
      setQuiz(json);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    const unAnsweredIds = quiz && quiz.content?.map(({ id }) => id);
    setUnAnsweredQuestionIds(unAnsweredIds);
  }, [quiz]);
  useEffect(() => {
    if (unAnsweredQuestionIds) {
      if (unAnsweredQuestionIds.length <= 0 && chosenAnswerItems.length >= 1) {
        //scroll to answer blog
        setShowAnswer(true);
        const answerBlock=document.getElementById("answer-block")
        answerBlock?.scrollIntoView({behavior:"smooth"})
      }
      //scroll to highest unAnsweredQuestionId
      const highestId = Math.min(...unAnsweredQuestionIds);
      const highestElement = document.getElementById(highestId);
      highestElement?.scrollIntoView({ behavior: "smooth" });
    }
  }, [unAnsweredQuestionIds, showAnswer, chosenAnswerItems]);
  console.log(unAnsweredQuestionIds);
  console.log(chosenAnswerItems);
  return (
    <div className="app">
      <Title title={quiz?.title} subtitle={quiz?.subtitle} />
      {quiz &&
        quiz.content.map((contentItem) => (
          <QuestionsBlock
            key={contentItem.id}
            quizItem={contentItem}
            chosenAnswerItems={chosenAnswerItems}
            setChosenAnswerItems={setChosenAnswerItems}
            unAnsweredQuestionIds={unAnsweredQuestionIds}
            setUnAnsweredQuestionIds={setUnAnsweredQuestionIds}
          />
        ))}
      {showAnswer && (
        <AnswerBlock
          answerOptions={quiz?.answers}
          chosenAnswers={chosenAnswerItems}
        />
      )}
    </div>
  );
}
