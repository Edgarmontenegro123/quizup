import {render, screen, fireEvent} from "@testing-library/react";
import Button from "./button";

test("Button renders with text and responds to click", () => {
    const mockOnClick = jest.fn();
    render(<Button text="Jugar!" onClick={mockOnClick} />);

    const button = screen.getByRole("button", {name: /Jugar!/i});
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
})