import {Difficulty} from "@/types/types";
import {TOTAL_QUESTIONS} from "@/utils/fetchQuestions";
import QuizComponent from "./quizComponent";

const QuizPage = async ({ searchParams }: { searchParams: { difficulty: string, category: number } }) => {
    const difficulty = searchParams.difficulty as Difficulty;
    const category = searchParams.category;

    return <QuizComponent
                totalQuestions={TOTAL_QUESTIONS}
                difficulty={difficulty}
                category={category}
           />
}
export default QuizPage;