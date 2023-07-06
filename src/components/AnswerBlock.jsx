import React, { useEffect, useState } from "react";
export default function AnswerBlock({ answerOptions, chosenAnswers }) {
  const [result, setResult] = useState(null);

  useEffect(() => {
    answerOptions.forEach((answer) => {
      if (
        chosenAnswers.includes(answer.combination[0]) &&
        chosenAnswers.includes(answer.combination[1]) &&
        chosenAnswers.includes(answer.combination[2])
      ) {
        setResult(answer)
      }else if(!result){
        setResult(answerOptions[0])
      }
    });
  }, [answerOptions,chosenAnswers,result]);
  console.log(result);
  return(
    <div id="answer-block" className="answer-block">
      <h2>{result?.text}</h2>
      <img className="ans-img" src={result?.image} alt={result?.text} />
    </div>
  )
}
