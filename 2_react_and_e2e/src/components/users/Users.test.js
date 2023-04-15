import { render, screen} from '@testing-library/react';
import Users from "./Users.js";
import axios from 'axios';
import React from 'react';

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
})

