const delay = require('./delay');

describe('delay',  () => {
    test('Корректное значение', async () => {
        const sum = await delay(() => 5 + 5, 1000);
        expect(sum).toBe(10);
    })
    /* test('Валидация значения', () => {
        expect(validateValue(50)).toBe(true);
    }) */
})
