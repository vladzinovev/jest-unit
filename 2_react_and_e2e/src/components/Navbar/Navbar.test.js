import {render, screen} from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import React from "react";
import { renderWithRouter } from '../../tests/helpers/renderWithRouter';
import Navbar from "./Navbar";


describe('USERS TEST', () => {
    test('test user link', async() => {
        render(renderWithRouter(<Navbar />));
        const usersLink = screen.getByTestId('users-link')
        userEvent.click(usersLink);
        expect(screen.getByTestId('users-page')).toBeInTheDocument()
    });
    test('test about link', async() => {
        render(renderWithRouter(<Navbar />));
        const aboutLink = screen.getByTestId('about-link')
        userEvent.click(aboutLink);
        expect(screen.getByTestId('about-page')).toBeInTheDocument()
    });
    test('test main link', async() => {
        render(renderWithRouter(<Navbar />, '/users'));
        const mainLink = screen.getByTestId('main-link')
        userEvent.click(mainLink);
        expect(screen.getByTestId('main-page')).toBeInTheDocument()
    });
})

