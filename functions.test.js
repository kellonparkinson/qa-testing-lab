const { returnTwo, greeting, add } = require('./functions')

test('returnTwo is 2', () => {
    expect(returnTwo()).toBe(2)
})

test('greeting returns the name passed in', () => {
    expect(greeting('Kellon')).toBe('Hello, Kellon.')
})

test('adds the two numbers passed in', () => {
    expect(add(2, 3)).toBe(5)
})