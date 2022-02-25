const Manager = require("../lib/Manager");

test("setting officeNumber for manager", () => {
  const testOfficeNumber = 12345;

  const newManager = new Manager("John", 1, "john@mail.com", testOfficeNumber);

  expect(newManager.officeNumber).toBe(testOfficeNumber);
});

test("getting role for manager", () => {
  const newManager = new Manager("John", 1, "john@mail.com", 12345);

  expect(newManager.getRole()).toBe("Manager");
});
