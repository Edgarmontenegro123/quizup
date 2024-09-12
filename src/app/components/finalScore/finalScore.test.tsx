import {render, screen, fireEvent} from "@testing-library/react";
import FinalScore from "./finalScore";

const mockOnRestart = jest.fn();
const mockOnExit = jest.fn();

describe("FinalScore component", () => {
    // 1. Test basic render
    test("renders FinalScore component correctly", () => {
        render(<FinalScore score={60} totalQuestions={5} onRestart={mockOnRestart} onExit={mockOnExit} />);

        // Verify title render
        expect(screen.getByText("¡Has terminado la trivia!")).toBeInTheDocument();

        // Verify correct render score
        expect(screen.getByText("Tu puntaje es: 60 / 100")).toBeInTheDocument();

        // Verify render buttons correctly
        expect(screen.getByText("Reiniciar")).toBeInTheDocument();
        expect(screen.getByText("Salir")).toBeInTheDocument();
    });
});

// 2. Interaction test with buttons
test("calls onRestart when Reiniciar button is clicked", () => {
    render(<FinalScore score={60} totalQuestions={5} onRestart={mockOnRestart} onExit={mockOnExit} />);

    const restartButton = screen.getByText("Reiniciar");
    fireEvent.click(restartButton);

    // Verify that onRestart function was called once at least
    expect(mockOnRestart).toHaveBeenCalledTimes(1);
})

// 3. Test to dynamic score
test("renders correct score based on props", () => {
    const score = 40;
    const totalQuestions = 5;
    render(<FinalScore score={score} totalQuestions={totalQuestions} onRestart={mockOnRestart} onExit={mockOnExit} />);

    // Calculate waiting score
    const expectedScore = `${score} / ${totalQuestions * 20}`;
    expect(screen.getByText(`Tu puntaje es: ${expectedScore}`)).toBeInTheDocument();
})