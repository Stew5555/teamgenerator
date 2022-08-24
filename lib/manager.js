const Employee = require("./employee");

class Manger extends Employee{
    constructor (name,id,Employee,OfficeNumber) {
        super(name,id,email)
        this.OfficeNumber = OfficeNumber

    }

    getRole() { 
        return "Manger"
    }
    getOfficeNumber () {
        return this.OfficeNumber
    }
}

module.exports = Manger;