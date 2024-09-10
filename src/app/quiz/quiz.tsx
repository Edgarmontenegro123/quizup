"use client"

import React, {useState} from "react";
import {QuestionsState} from "@/types/types"
import {useRouter} from "next/navigation";
import QuestionCard from "@/app/components/questionCard/questionCard";
import Button from "@/app/components/button/button";

type Props = {
    questions: QuestionsState;
    totalQuestions: number;
}

const Quiz = ({questions, totalQuestions}: Props) => {
    const router = useRouter();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [userAnswers, setUserAnswers] = useState<Record<number, string>>({})
    const isQuestionAnswered = !!userAnswers[currentQuestionIndex]; // userAnswers[currentQuestionIndex] ? true : false

    const handleOnAnswerClick = (answer: string, currentQuestionIndex: number) => {
        // if user has already answered, do nothing
        if (isQuestionAnswered) return;
        // Check answer against correct answer
        const isCorrect = questions[currentQuestionIndex].correct_answer === answer;
        // Add score if answer is correct
        if (isCorrect) setScore(prev => prev + 20);
        // save the answer in the object for user answers
        setUserAnswers(prev => ({...prev, [currentQuestionIndex]: answer}));
    }

    const handleChangeQuestion = (step: number) => {
        const newQuestionIndex = currentQuestionIndex + step;

        if(newQuestionIndex < 0 || newQuestionIndex >= totalQuestions) return;
        setCurrentQuestionIndex(newQuestionIndex)
    }

    return (
        <div className="text-white text-center">
            <p className="text font-bold">Score: {score}</p>
            <p className="text font-bold">
                Question {currentQuestionIndex + 1} out of {totalQuestions}
            </p>
            <QuestionCard
                currentQuestionIndex={currentQuestionIndex}
                question={questions[currentQuestionIndex].question}
                answers={questions[currentQuestionIndex].answers}
                userAnswer={userAnswers[currentQuestionIndex]}
                correctAnswer={questions[currentQuestionIndex].correct_answer}
                onClick={handleOnAnswerClick}
            />
            <div className="flex justify-between mt-16">
                <Button text="prev" onClick={() => handleChangeQuestion(-1)} />
                <Button text={currentQuestionIndex === totalQuestions - 1 ? 'End' : 'Next' }
                        onClick={currentQuestionIndex === totalQuestions - 1 ? () => router.push('/') : () => handleChangeQuestion(1)} />
            </div>
        </div>
    )
}
export default Quiz