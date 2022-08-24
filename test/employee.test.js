
// const { default: test } = require("node:test");
const Employee = require("../lib/employee") 

test("creates a new empoyee", () => { 
    const e = new Employee();
    expect(typeof(e)).toBe('object');
})

test("sets a name", () => {
    const name = 'stew';
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

test("sets an ID for the employee", () => {
    const num = 123;
    const e = new Employee('item', num);
    expect(e.id).toBe(num);
});

test("sets an email", () => {
    const test = "testEmail@something.come"
    const e = new Employee("email", 1, test);
    expect(e.email).toBe(test)
})

test("Can get name via getName()", () => {
    const test = "stew";
    const e = new Employee(test);
    expect(e.getName()).toBe(test);
  });
  
  test("Can get id via getId()", () => {
    const test = 100;
    const e = new Employee("email", test);
    expect(e.getId()).toBe(test);
  });
  
  test("Can get email via getEmail()", () => {
    const test = "test@test.com";
    const e = new Employee("email", 1, test);
    expect(e.getEmail()).toBe(test);
  });
  
  test("getRole() should return \"employee\"", () => {
    const test = "Employee";
    const e = new Employee("stew", 1, "test@test.com");
    expect(e.getRole()).toBe(test);
  });