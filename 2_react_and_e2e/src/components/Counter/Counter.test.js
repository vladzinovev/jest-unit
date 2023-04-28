import {render, screen} from "@testing-library/react";
import Counter from "./Counter";
import userEvent from "@testing-library/user-event";
import {Provider} from "react-redux";
import {createReduxStore} from "../../store/store";
import { renderWithRedux } from "../../tests/helpers/renderWithRedux";

describe('Counter test', () => {
    test('Test router', async () => {
        const {getByTestId} = render(renderWithRedux(<Counter/>,{counter:{value:10}}))

        // eslint-disable-next-line testing-library/prefer-screen-queries
        const incrementBtn = getByTestId('increment-btn')
        // eslint-disable-next-line testing-library/prefer-screen-queries
        expect(getByTestId('value-title')).toHaveTextContent('10')
        userEvent.click(incrementBtn);
        // eslint-disable-next-line testing-library/prefer-screen-queries
        expect(getByTestId('value-title')).toHaveTextContent('11')
    });
})
