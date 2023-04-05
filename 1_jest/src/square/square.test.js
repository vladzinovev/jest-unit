const square = require('./square');

/* describe('square', () => {
    test('Корректное значение', () => {
        expect(square(2)).toBe(4); //число, которое должны получить
        expect(square(2)).toBeLessThan(5); //число, которое получили меньше, чем 5
        expect(square(2)).toBeGreaterThan(3); //число, которое получили больше, чем 3
        expect(square(2)).not.toBeUndefined(); //число, которое получили не indefined
        
    })
}) */

describe('square', () => {
    let mockValue;
    // Перед каждым запуском теста
    beforeEach(() => {
        // ДОБАВИТЬ В БД
    })
    // Один раз перед всеми тестами
    beforeAll(() => {
    })
    test('Корректное значение', () => {
        // expect(square(2)).toBe(4);
        // expect(square(2)).toBeLessThan(5);
        // expect(square(2)).toBeGreaterThan(3);
        // expect(square(2)).not.toBeUndefined();
        const spyMathPow = jest.spyOn(Math, 'pow');
        square(2);
        expect(spyMathPow).toBeCalledTimes(1);
    })

    test('Корректное значение', () => {
        const spyMathPow = jest.spyOn(Math, 'pow');
        square(1);
        expect(spyMathPow).toBeCalledTimes(0);
    })

    //выполняется после каждого теста
    afterEach(() => {
        //очищаем тесты
        jest.clearAllMocks()
    })

    //выполняется после всех тестов
    afterAll(() => {

    })
})
