const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    // this.name = name;
    // this.id = id;
    // this.email = email;
    super(name, id, email);
    this.school = school;
  }


  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
