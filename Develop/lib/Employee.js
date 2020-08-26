
class Employee {
    constructor (name, id, email, role) {
        this.name = name;
        this.email = email;
        this.id = id;
        this.role = role || "Employee";
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return this.role;
    }
}

module.exports = Employee;