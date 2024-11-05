const Calculator = require('./test.js'); // Adjust the path if necessary

describe('Calculator', () => {
    let calc;

    beforeEach(() => {
        calc = new Calculator();
    });

    test('should add numbers correctly', () => {
        calc.add(10);
        expect(calc.getResult()).toBe(10);
        calc.add(5);
        expect(calc.getResult()).toBe(15);
    });

    test('should subtract numbers correctly', () => {
        calc.add(10);
        calc.subtract(3);
        expect(calc.getResult()).toBe(7);
        calc.subtract(2);
        expect(calc.getResult()).toBe(5);
    });

    test('should multiply numbers correctly', () => {
        calc.add(10);
        calc.multiply(2);
        expect(calc.getResult()).toBe(20);
        calc.multiply(0.5);
        expect(calc.getResult()).toBe(10);
    });

    test('should divide numbers correctly', () => {
        calc.add(10);
        calc.divide(2);
        expect(calc.getResult()).toBe(5);
        calc.divide(5);
        expect(calc.getResult()).toBe(1);
    });

    test('should handle division by zero', () => {
        calc.add(10);
        const consoleSpy = jest.spyOn(console, 'error');
        calc.divide(0);
        expect(consoleSpy).toHaveBeenCalledWith("Cannot divide by zero");
        expect(calc.getResult()).toBe(10);
        consoleSpy.mockRestore();
    });

    test('should clear the value', () => {
        calc.add(10);
        calc.clear();
        expect(calc.getResult()).toBe(0);
    });

    test('should return the correct result', () => {
        calc.add(10).subtract(2).multiply(3).divide(4);
        expect(calc.getResult()).toBe(6);
    });
});