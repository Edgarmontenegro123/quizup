import {useState, useEffect, useCallback} from "react";
import {getQuestions, TOTAL_QUESTIONS} from "@/utils/fetchQuestions";
import {Difficulty, QuestionsState} from "@/types/types";

type UseTriviaProps = {
    difficulty: Difficulty;
    category: number;
};

const useTrivia = ({difficulty, category} : UseTriviaProps) => {
    const [questions, setQuestions] = useState<QuestionsState>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchTriviaQuestions = useCallback(async () => {
        setLoading(true);
        setError(null);

        try {
            const newQuestions = await getQuestions(TOTAL_QUESTIONS, difficulty, category);
            setQuestions(newQuestions);
        } catch (error) {
            setError("Error al obtener las preguntas.");
        } finally {
            setLoading(false);
        }
    }, [difficulty, category]);

    // Effect to upload questions while component is being assembled
    useEffect(() => {
        fetchTriviaQuestions();
    }, [fetchTriviaQuestions]);

    return {
        questions,
        loading,
        error,
        fetchTriviaQuestions,
    }
}

export default useTrivia;