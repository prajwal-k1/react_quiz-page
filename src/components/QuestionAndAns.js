import React from "react";

export default function QuestionAndAns({ optionSelected, data: { question, correct_answer, incorrect_answers } }) {
    const answers = [correct_answer, ...incorrect_answers].sort(() => Math.random() - 0.5)
    const displayOptions = answers.map(answer =>
        <button
            onClick={() => optionSelected(answer === correct_answer ? 'correct' : 'wrong')}
            key={answers.indexOf(answer)}
            className='option-button'
            dangerouslySetInnerHTML={{ __html: answer }} />)
    return (
        <div>
            <div className='question-container'><h2 dangerouslySetInnerHTML={{ __html: `${question}` }} /></div>
            <div className='button-container'>
                {displayOptions}
            </div>
        </div>
    )
}