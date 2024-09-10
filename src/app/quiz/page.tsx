import {shuffleArray} from "@/utils/arrayUtils";
import {Difficulty, Question, QuestionsState} from "@/types/types";
import QuizComponent from "./quizComponent"

const TOTAL_QUESTIONS = 5;

const getQuestions = async (amount: number, difficulty: Difficulty): Promise<QuestionsState> => {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
    console.log('*** endpoint: ', endpoint)
    const data : {results: Array<Question>} = await (await fetch(endpoint, {cache: "no-store"})).json();

    return data.results.map(question => ({
        ...question,
        answers: shuffleArray([...question.incorrect_answers, question.correct_answer])
    }))
}

const QuizPage = async ({ searchParams }: { searchParams: { difficulty: string } }) => {
    const difficulty = searchParams.difficulty as Difficulty;
    const questions = await getQuestions(TOTAL_QUESTIONS, difficulty as Difficulty)

    return <QuizComponent questions={questions} totalQuestions={TOTAL_QUESTIONS} />
}

export default QuizPage

