const Intern = require("../lib/intern");

test("Can set school via constructor", () => {
  const test = "UCSD";
  const e = new Intern("school", 1, "test@test.com", test);
  expect(e.school).toBe(test);
});

test("getRole() should return \"Intern\"", () => {
  const test = "Intern";
  const e = new Intern("student", 1, "test@test.com", "UCLA");
  expect(e.getRole()).toBe(test);
});

test("Can get school via getSchool()", () => {
  const test = "UCSD";
  const e = new Intern("school", 1, "test@test.com", test);
  expect(e.getSchool()).toBe(test);
});