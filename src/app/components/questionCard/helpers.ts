export const getBGColor = (userAnswer: string | undefined, correctAnswer: string, answer: string): string => {
    const isAnswerCorrect = userAnswer ?  userAnswer === correctAnswer : undefined;

    if((isAnswerCorrect === true && answer === userAnswer) || (isAnswerCorrect === false && answer === correctAnswer)) {
        return 'bg-[#55ac78] text-[#f5f5f5]'
    }
    if(isAnswerCorrect === false && answer === userAnswer) return 'bg-[#ac5050] text-white'

    return 'bg-[#f5f5f5] text-[#0583F2]';
}
