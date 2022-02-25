const Employee = require("../lib/Employee");

test("setting name for employee", () => {
  const testName = "John";

  const newEmployee = new Employee(testName, 1, "john@mail.com");

  expect(newEmployee.name).toBe(testName);
});

test("setting id for employee", () => {
  const testId = 1;

  const newEmployee = new Employee("Paul", testId, "john@mail.com");

  expect(newEmployee.id).toBe(testId);
});

test("setting email for employee", () => {
  const testEmail = 1;

  const newEmployee = new Employee("Paul", 1, testEmail);

  expect(newEmployee.email).toBe(testEmail);
});

test("getting name for employee", () => {
  const testName = "John";

  const newEmployee = new Employee(testName, 1, "john@mail.com");

  expect(newEmployee.getName()).toBe(testName);
});

test("getting role for employee", () => {
  const newEmployee = new Employee("John", 1, "john@mail.com");

  expect(newEmployee.getRole()).toBe("Employee");
});
