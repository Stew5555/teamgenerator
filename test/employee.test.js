
const employee = require("../lib/employee") 

test("creates a new empoyee", () => { 
    const e = new employee();
    exportAllDeclaration(typeof(e)).toBe('object');
})