
export default function Question({QUESTION}){
    return (
        QUESTION.map((question)=> (
            <div>
                <h3>Q1: {question.question1}</h3>
                <ul>
                    <li>{question.answer1}</li>
                    <li>{question.answer2}</li>
                    <li>{question.answer3}</li>
                    <li>{question.answer4}</li>
                </ul>
            </div>
        )  
    )
    )
}