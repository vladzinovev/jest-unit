import { render, screen,fireEvent } from '@testing-library/react';
import  userEvent  from '@testing-library/user-event';
import App from './App';

describe('TEST APP', () => {
  /* test('renders learn react link', () => {
    //компонент который будем тестировать
    render(<App />);
    //получаем элемент по тексту hello world (i-игнорируем регистр)
    const helloWorldElem = screen.getByText(/hello world/i);
    //элемент кнопка
    const btn = screen.getByRole('button')
    //элемент input
    const input = screen.getByPlaceholderText(/input value/i)

    //toBeInTheDocument появиля ли в нашем документе
    expect(helloWorldElem).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
    expect(input).toMatchSnapshot();
    
    // eslint-disable-next-line testing-library/no-debugging-utils
    screen.debug();//возвращает разметку
  }); */
  test('for component data', async () => {
    //компонент который будем тестировать
    render(<App />);

    // eslint-disable-next-line testing-library/no-debugging-utils
    screen.debug();//возвращает разметку    

    //получаем элемент по тексту data (i-игнорируем регистр)
    const data =await screen.findByText(/data/i);

    //toBeInTheDocument появиля ли в нашем документе
    expect(data).toBeInTheDocument();
    expect(data).toHaveStyle({color: 'red'});
    // eslint-disable-next-line testing-library/no-debugging-utils
    screen.debug();//возвращает разметку
  });

  test("CLICK EVENT", () => {
    render(<App />);
    const btn = screen.getByTestId('toggle-btn');
    expect(screen.queryByTestId('toggle-elem')).toBeNull();//tobenull потому что элемента еще нет
    fireEvent.click(btn);//для работы с событиями
    expect(screen.queryByTestId('toggle-elem')).toBeInTheDocument();//ожидаем что он уже появился на странице
    fireEvent.click(btn);//для работы с событиями
    expect(screen.queryByTestId('toggle-elem')).toBeNull();
  })
  
  test("INPUT EVENT", () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/input value/i)
    expect(screen.queryByTestId('value-elem')).toContainHTML('');
    // Искуственное событие
    /* fireEvent.input(input, {
       target: {value: '123123'}
    }) */
    // Близко к пользователю, обрабатываются события нажатия клавиш и тд
    userEvent.type(input, '123123')
    expect(screen.queryByTestId('value-elem')).toContainHTML('123123');
  })
});