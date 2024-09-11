import {Difficulty} from "@/types/types";
import {getQuestions, TOTAL_QUESTIONS} from "@/utils/fetchQuestions";
import QuizComponent from "./quizComponent";

const QuizPage = async ({ searchParams }: { searchParams: { difficulty: string, category: number } }) => {
    const difficulty = searchParams.difficulty as Difficulty;
    const category = searchParams.category;
    const questions = await getQuestions(TOTAL_QUESTIONS, difficulty as Difficulty, category)

    return <QuizComponent
                questions={questions}
                totalQuestions={TOTAL_QUESTIONS}
                difficulty={difficulty}
                category={category}
           />
}
export default QuizPage;