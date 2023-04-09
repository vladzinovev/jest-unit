import { render, screen} from '@testing-library/react';
import Users from "./Users";
import axios from 'axios';
import userEvent from "@testing-library/user-event";
import {renderWithRouter} from "../../tests/helpers/renderWithRouter";

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
        jest.clearAllMocks();
    })

    test('renders learn react link', async() => {
        //якобы получаем через axios запрос данные
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
        //якобы получаем через axios запрос данные
        axios.get.mockReturnValue(response);
        render(renderWithRouter(<Users />));
        //находим массив элементов
        const users = await screen.findAllByTestId('user-item');
        expect(users.length).toBe(3);//должно быть 3 элемента
        userEvent.click(users[0]) //при клике на первый user
        expect(screen.getByTestId('user-page')).toBeInTheDocument();
    });
})

