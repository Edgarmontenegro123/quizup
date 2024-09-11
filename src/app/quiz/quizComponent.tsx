"use client"

import {QuestionsState} from "@/types/types";
import Quiz from "@/app/quiz/quiz";

type quizComponentProps = {
    questions: QuestionsState;
    totalQuestions: number
}

const QuizComponent = ({questions, totalQuestions} : quizComponentProps) => {
    return (
        <div>
            <Quiz questions={questions} totalQuestions={totalQuestions} />
        </div>
    )
}

export default QuizComponent

