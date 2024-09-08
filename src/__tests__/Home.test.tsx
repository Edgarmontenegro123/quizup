import { render, screen } from '@testing-library/react';
import Home from '../app/page';

describe('Home', () => {
    it('renders a heading with the text "Home Page"', () => {
        render(<Home />);

        const heading = screen.getByRole('heading', {
            name: /Home Page/i,
        });
        expect(heading).toBeInTheDocument();
    });
});
