import React from "react";
import Button from "@/app/components/button/button";

interface FinalScoreProps {
    score: number;
    totalQuestions: number;
    onRestart: () => void;
    onExit: () => void;
}

const FinalScore = ({score, totalQuestions, onRestart, onExit} : FinalScoreProps) => {
    return (
        <div className="text-center">
            <h1 className="text text-3xl my-4">¡Has terminado la trivia!</h1>
            <p className="text text-5xl font-bold my-5">
                Tu puntaje es: {score} / {totalQuestions * 20}
            </p>
            <div className="flex justify-center space-x-4">
                <Button text="Reiniciar" onClick={onRestart} />
                <Button text="Salir" onClick={onExit} />
            </div>
        </div>
    )
}

export default FinalScore;