
const { default: test } = require("node:test");
const employee = require("../lib/employee") 

test("creates a new empoyee", () => { 
    const e = new employee();
    expect(typeof(e)).toBe('object');
})

test("sets a name", () => {
    const name = 'stew';
    const e = new employee(name);
    expect(e.name).toBe(name);
});

test("sets an ID for the employee", () => {
    const num = 123;
    const e = new employee('item', num);
    expect(e.id).toBe(num);
});

test("sets an email", () => {
    const testEmail = "testEmail@something.come"
    const e = new employee("email", 1, testEmail);
    expect(e.email).toBe(testEmail)
})