import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithRedux } from "../../tests/helpers/renderWithRedux";
import { renderTestApp } from "../../tests/helpers/renderTestApp";

describe('Counter test', () => {
    test('Test router', async () => {
        //const {getByTestId} = render(renderWithRedux(<Counter/>,{counter:{value:10}}))
        //через RenderTestApp
        const {getByTestId} = render(renderTestApp(null, {
            route: '/',
            initialState: {
                counter: {value: 10}
            }
        }))
        // eslint-disable-next-line testing-library/prefer-screen-queries
        const incrementBtn = getByTestId('increment-btn')
        // eslint-disable-next-line testing-library/prefer-screen-queries
        expect(getByTestId('value-title')).toHaveTextContent('10')
        userEvent.click(incrementBtn);
        // eslint-disable-next-line testing-library/prefer-screen-queries
        expect(getByTestId('value-title')).toHaveTextContent('11')
    });
})
