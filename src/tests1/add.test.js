const add = (a,b) => a+b;

const generateGreeting = (name = 'Gowtham') => `Hello ${name}`;
//setup new testcase
test('should add two numbers', () => {
    const result = add(3, 4);
    //provided by jest
    expect(result).toBe(7);
});

test(`The name is ${name}`, ()=> {
    const name = generateGreeting('GGS');
    expect(name).toBe('Hello GGS');
});