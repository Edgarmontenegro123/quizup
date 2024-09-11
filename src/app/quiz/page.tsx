import QuizComponent from "./quizComponent";
import {getQuestions, TOTAL_QUESTIONS} from "@/utils/fetchQuestions";
import {Difficulty} from "@/types/types";

const QuizPage = async ({ searchParams }: { searchParams: { difficulty: string, category: number } }) => {
    const difficulty = searchParams.difficulty as Difficulty;
    const category = searchParams.category;
    const questions = await getQuestions(TOTAL_QUESTIONS, difficulty as Difficulty, category)
    console.log("Questions:", questions);

    return <QuizComponent questions={questions} totalQuestions={TOTAL_QUESTIONS} />
}

export default QuizPage;