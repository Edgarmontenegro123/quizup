import {render} from "@testing-library/react";
import Spinner from "./spinner";

test("Spinner renders", () => {
    const {container} = render(<Spinner />)
    const spinnerElement = container.querySelector(".animate-spin");

    expect(spinnerElement).toBeInTheDocument();
})