const Intern = require("../lib/Intern");

test("setting school for intern", () => {
  const testSchool = "Univeristy of Minnesota";

  const newIntern = new Intern("John", 1, "john@mail.com", testSchool);

  expect(newIntern.school).toBe(testSchool);
});

test("getting role for intern", () => {
  const newIntern = new Intern("John", 1, "john@mail.com", "University of Minnesota");

  expect(newIntern.getRole()).toBe("Intern");
});
