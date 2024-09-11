import {Difficulty, Question, QuestionsState} from "@/types/types";
import {shuffleArray} from "@/utils/arrayUtils";

export const TOTAL_QUESTIONS = 5;
export const getQuestions = async (amount: number, difficulty: Difficulty, category: number): Promise<QuestionsState> => {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`;
    console.log('*** endpoint: ', endpoint)
    const data : {results: Array<Question>} = await (await fetch(endpoint, {cache: "no-store"})).json();

    return data.results.map(question => ({
        ...question,
        answers: shuffleArray([...question.incorrect_answers, question.correct_answer])
    }))
}