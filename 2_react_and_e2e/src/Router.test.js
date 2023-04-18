import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import {MemoryRouter} from "react-router-dom";

describe('TEST APP', () => {
    test('Router test', () => {
        render(
            <MemoryRouter>
                <App/>
            </MemoryRouter>     
        );
        const mainLink = screen.getByTestId('main-link')
        const aboutLink = screen.getByTestId('about-link')
        userEvent.click(aboutLink) //для того чтобы потыкать на ссылки
        expect(screen.getByTestId('about-page')).toBeInTheDocument(); //находим заголовок
        userEvent.click(mainLink) //нажимае на вторую ссылку
        expect(screen.getByTestId('main-page')).toBeInTheDocument();
    });
})

