const Manager = require("../lib/Manager");
const Employee = require("../lib/employee");

test("Can set office number via constructor argument", () => {
  const test = 100;
  const e = new Manager("office", 1, "test@test.com", test);
  expect(e.officeNumber).toBe(test);
});

test("getRole() should return \"Manager\"", () => {
  const test = "Manager";
  const e = new Manager("role", 1, "test@test.com", 100);
  expect(e.getRole()).toBe(test);
});

test("Can get office number via getOffice()", () => {
  const test = 100;
  const e = new Manager("office", 1, "test@test.com", test);
  expect(e.getOfficeNumber()).toBe(test);
});
