import "@testing-library/jest-dom";
import {render, screen} from "@testing-library/react";
// import Carrousel from "./carrousel";
// import {userEvent} from "@testing-library/user-event";

/*const mockCategories = [
    {id: 1, name: "Category_1"},
    {id: 2, name: "Category_2"},
    {id: 3, name: "Category_3"},
];*/

const SimpleComponent = () => {
    return <div>Category_1</div>
}

test("SimpleComponent renders correctly", () => {
    render(<SimpleComponent />);

    const element = screen.getByText("Category_1");
    expect(element).toBeInTheDocument();
})

/*test("Carrousel renders category names correctly", () => {
    render(<Carrousel categories={mockCategories} onCategorySelect={() => {}} />);

    const categoryElement = screen.getByText("Category_1");
    expect(categoryElement).toBeInTheDocument();

    /!*mockCategories.forEach(category => {
        const categoryElement = screen.getByText(category.name);
        expect(categoryElement).toBeInTheDocument();
    });*!/
});*/
