const square = require('./square');

describe('square', () => {
    test('Корректное значение', () => {
        expect(square(2)).toBe(4); //число, которое должны получить
        expect(square(2)).toBeLessThan(5); //число, которое получили меньше, чем 5
        expect(square(2)).toBeGreaterThan(3); //число, которое получили больше, чем 3
        expect(square(2)).not.toBeUndefined(); //число, которое получили не indefined
        
    })
})


