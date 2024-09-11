import {shuffleArray} from "@/utils/arrayUtils";
import {Difficulty, Question, QuestionsState} from "@/types/types";
import QuizComponent from "./quizComponent"

const TOTAL_QUESTIONS = 5;

const getQuestions = async (amount: number, difficulty: Difficulty, category: number): Promise<QuestionsState> => {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`;
    console.log('*** endpoint: ', endpoint)
    const data : {results: Array<Question>} = await (await fetch(endpoint, {cache: "no-store"})).json();

    return data.results.map(question => ({
        ...question,
        answers: shuffleArray([...question.incorrect_answers, question.correct_answer])
    }))
}

const QuizPage = async ({ searchParams }: { searchParams: { difficulty: string, category: number } }) => {
    const difficulty = searchParams.difficulty as Difficulty;
    const category = searchParams.category;
    const questions = await getQuestions(TOTAL_QUESTIONS, difficulty as Difficulty, category)
    console.log("Questions:", questions);

    return <QuizComponent questions={questions} totalQuestions={TOTAL_QUESTIONS} />
}

export default QuizPage

