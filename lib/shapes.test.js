const { Circle, Square, Triangle } = require("./shapes")

describe('Circle', () => {
    // A test is created to check that modulus does in fact return the remainder of the quotient of the two numbers.
    test('render corectly', () => {
        it('Shoulde render a 2d circle graphic with a blue fill', () => {
            const shape = new Circle();
            var color = ('blue');
            shape.setColor(color);
            expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="blue">`);
        });
    });
});

describe('Square', () => {
    // A test is created to check that the shape renders with a background color of green
    test('render correctly', () => {
        it('Shoulde render a 2d Square graphic', () => {
            const shape = new Square();
            var color = ('green');
            shape.setColor(color);
            expect(shape.render()).toEqual(`<rect x="50" height="200" width="200" fill="${color}">`);
        });
    });
});

describe('Triangle', () => {
    // A test is created to check that modulus does in fact return the remainder of the quotient of the two numbers.
    test('render correctly', () => {
        it('Shoulde render a 2d Triangle graphic', () => {
            const shape = new Triangle();
            var color = ('red');
            shape.setColor(color);
            expect(shape.render()).toEqual(`<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${color}">`);
        });
    });
});
