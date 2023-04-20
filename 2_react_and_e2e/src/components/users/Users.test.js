import { render, screen} from '@testing-library/react';
import Users from "./Users.js";
import axios from 'axios';
import React from 'react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import AppRouter from '../../router/AppRouter.jsx';
import { renderWithRouter } from '../../tests/helpers/renderWithRouter.js';

jest.mock('axios');

describe('USERS TEST', () => {
    let response;
    beforeEach(() => {
        response = {
            data: [
                {
                    "id": 1,
                    "name": "Leanne Graham",
                },
                {
                    "id": 2,
                    "name": "Ervin Howell",
                },
                {
                    "id": 3,
                    "name": "Clementine Bauch",
                },
            ]
        }
    })

    afterEach(() => {
        jest.clearAllMocks(); //отключаем mock после каждого теста
    })

    test('renders learn react link', async() => {
        //якобы получаем через axios запрос данные
        // @ts-ignore
        axios.get.mockReturnValue(response);
        render(<Users />);
        //находим массив элементов
        const users = await screen.findAllByTestId('user-item');
        expect(users.length).toBe(3); //должно быть 3 элемента
        //ожидаем что он вызовется один раз
        expect(axios.get).toBeCalledTimes(1);
        // eslint-disable-next-line testing-library/no-debugging-utils
        screen.debug();
    });

    test('test redirect to details page', async() => {
        // @ts-ignore
        axios.get.mockReturnValue(response);
        /* render(
            <MemoryRouter>
                <AppRouter/>
                <Users/>
            </MemoryRouter>
        ); */
        //через helper
        //render(renderWithRouter(null,'/users'));
        //или
        render(renderWithRouter(<Users />));
        const users = await screen.findAllByTestId('user-item');
        expect(users.length).toBe(3);
        userEvent.click(users[0])//кликаем на любого пользователя
        expect(screen.getByTestId('user-page')).toBeInTheDocument();//ожидаем что открылась стараница
    });
})


