const { sum } = require('./register-test')

it ( 'sums 2 numbers' , () => {
    expect(sum(1,2)).toBe(4)
})