const Engineer = require("../lib/Engineer");

test("setting github for Engineer", () => {
  const testGithub = "https://github.com/PRGottinger";

  //   ;

  const newEngineer = new Engineer("John", 1, "john@mail.com", testGithub);

  expect(newEngineer.github).toBe(testGithub);
});

test("getting role for Engineer", () => {
  const newEngineer = new Engineer(
    "John",
    1,
    "john@mail.com",
    "https://github.com/PRGottinger"
  );

  expect(newEngineer.getRole()).toBe("Engineer");
});
