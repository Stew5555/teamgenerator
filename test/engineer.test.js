const engineer = require("../lib/engineer");

test("Can set GitHUb account via constructor", () => {
  const test = "GitHubUser";
  const e = new engineer("Foo", 1, "test@test.com", test);
  expect(e.github).toBe(test);
});

test("getRole() should return \"Engineer\"", () => {
  const test = "Engineer";
  const e = new engineer("Foo", 1, "test@test.com", "GitHubUser");
  expect(e.getRole()).toBe(test);
});

test("Can get GitHub username via getGithub()", () => {
  const test = "GitHubUser";
  const e = new engineer("Foo", 1, "test@test.com", test);
  expect(e.getGithub()).toBe(test);
});
