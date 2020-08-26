// TODO: Write code to define and export the StorageManager class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee")


class Manager extends Employee {
    constructor (name, id, email, OfficeNumber) {
        super(name,id,email, "Manager");
        this.officeNumber = OfficeNumber
        
    }
    
    getOfficeNumber(){
        return this.officeNumber
    }
}


module.exports = Manager