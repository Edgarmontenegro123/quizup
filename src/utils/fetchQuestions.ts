import { Difficulty, Question, QuestionsState } from "@/types/types";
import { shuffleArray } from "@/utils/arrayUtils";

export const TOTAL_QUESTIONS = 5;

// Función auxiliar para esperar un tiempo determinado
const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

// Function with retries and backoff exponential to manage error 429
export const getQuestions = async (amount: number, difficulty: Difficulty, category: number, retries: number = 3): Promise<QuestionsState> => {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`;

    try {
        const response = await fetch(endpoint, { cache: "no-store" });

        // Manage error 429: retry with backoff exponential
        if (response.status === 429) {
            if (retries > 0) {
                const waitTime = (4 - retries) * 1000; // Increment waiting time with every retry
                console.log(`*** Error 429: Too Many Requests. Reintentando en ${waitTime / 1000} segundos...`);
                await delay(waitTime);
                return getQuestions(amount, difficulty, category, retries - 1);
            } else {
                throw new Error("Se ha alcanzado el límite de peticiones. Intenta nuevamente más tarde.");
            }
        }

        const data: { response_code: number, results: Array<Question> } = await response.json();

        // Manage response code
        if (data.response_code !== 0) {
            switch (data.response_code) {
                case 1:
                    throw new Error("No hay suficientes preguntas para la configuración seleccionada.");
                case 2:
                    throw new Error("Los parámetros de la API son inválidos.");
                case 3:
                    throw new Error("La token enviada no es válida.");
                case 4:
                    throw new Error("La token no tiene más preguntas disponibles.");
                case 5:
                    throw new Error("No se encontraron preguntas en la categoría seleccionada.");
                default:
                    throw new Error("Error desconocido al obtener las preguntas.");
            }
        }

        return data.results.map(question => ({
            ...question,
            answers: shuffleArray([...question.incorrect_answers, question.correct_answer])
        }))
    } catch (error) {
        console.error("Error fetching trivia questions:", error);
        throw error; // Propaga el error para manejarlo en el hook `useTrivia`
    }
};
