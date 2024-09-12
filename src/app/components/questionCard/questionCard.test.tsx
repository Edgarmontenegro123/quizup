import {render, screen, fireEvent} from "@testing-library/react";
import QuestionCard from "./questionCard";
import {getBGColor} from "./helpers";

const mockOnClick = jest.fn();

describe("QuestionCard component", () => {
    const defaultProps = {
        currentQuestionIndex: 0,
        question: "¿Cual es la capital de Francia?",
        answers: ["Madrid", "París", "Londres", "Berlín"],
        userAnswer: undefined,
        correctAnswer: "París",
        onClick: mockOnClick,
    };

    // 1. Test basic render
    test("renders questions and answers correctly", () => {
        render(<QuestionCard {...defaultProps} />);

        // Verify question render
        expect(screen.getByText("¿Cual es la capital de Francia?")).toBeInTheDocument();

        // Verify render answers
        defaultProps.answers.forEach(answer => {
            expect(screen.getByText(answer)).toBeInTheDocument();
        });
    });

    // 2. Test answers interaction
    test("calls onClick with the correct arguments when an answer is clicked", () => {
        render(<QuestionCard {...defaultProps} />);

        const answerElement = screen.getByText("París");
        fireEvent.click(answerElement);

        // Verify onClick function called with right parameters
        expect(mockOnClick).toHaveBeenCalledWith("París", defaultProps.currentQuestionIndex);
    });

    // 3. Test dynamic styles
    test("applies the correct class based on userAnswer and correctAnswer", () => {
        // Mock getBGColor function
        jest.spyOn(require("@/app/components/questionCard/helpers"), "getBGColor").mockReturnValue("bg-green-500");

        render(<QuestionCard {...defaultProps} userAnswer="París" />);

        const answerContainer = screen.getByText("París").closest("div");

        // Verify applied class is correct
        expect(answerContainer).toHaveClass("bg-green-500");
    })
})