"use client"

import {Difficulty} from "@/types/types";
import Quiz from "@/app/quiz/quiz";
import useTrivia from "@/hooks/useTrivia";
import Spinner from "@/app/components/spinner/spinner";

type quizComponentProps = {
    difficulty: Difficulty;
    category: number;
    totalQuestions: number;
}

const QuizComponent = ({difficulty, category, totalQuestions} : quizComponentProps) => {
    const {questions, loading, error, fetchTriviaQuestions} = useTrivia({difficulty, category});

    if(loading) return <Spinner />;
    if(error) return <p className="text text-red-500">{error}</p>

    return (
        <div>
            <Quiz questions={questions}
                  totalQuestions={totalQuestions}
                  onRestart={fetchTriviaQuestions}
            />
        </div>
    )
}
export default QuizComponent
