
// const rectangle = {width: 20, height: 10, square: function () {
//     return this.width * this.height;
// },perimeter: function()  {
//     return this.width * 2 + this.height * 2
// }}
// // this.width = 100;
// // this.height = 200;
// // console.log(this)
//  console.log(rectangle.square());
//  console.log(rectangle.perimeter());
 
// class Rectangle {
//     #width;
//     #height;
//     constructor(width, height) {
//         this.#height = height;
//         this.#width = width;
//     }
//     square() {
//         return this.#width * this.#height;
//     }
//     perimeter() {
//         return this.#width * 2 + this.#height *2
//     }
// }
// function Rectangle(width, height) {
//     this.width = width;
//     this.height = height;
// }
// Rectangle.prototype.square = function() {
//     return this.width * this.height;
// }
// const rectangle1 = new Rectangle(3, 4);
// console.log(rectangle1.square());
// Rectangle.prototype.square = function() {
//     return "kuku"
// }
// console.log(rectangle1.square());
//console.log(rectangle1.perimeter());

/* HW #21 */
// Employe structure and function createEmployee() taken from previous HW
function createEmployee(id, name, birthYear, salary, city, country) {
    return {id, name, birthYear, salary, address: {city, country}}
}
class Company {
    #employees //object key: <id value>, value: reference to Employee object
    constructor() {
        
        this.#employees = {};
    }

    //returns true if added new employee object
        //returns false if employee with a given id value already exists
    addEmployee(empl) {
        //adds empl into #employees object
        

        if(this.#employees[empl.id]){
            return false;
        }else{
            this.#employees[empl.id] = empl;
            return true;
        }

        
    }
    removeEmployee(id) {
        //TODO
        //removes employee with a given id from #employees object
        //returns true if removed
        //returns false if employee with the id doesn't exist
        if(this.#employees[id]){
            delete this.#employees[id];
            return true;
        }else{
            return false;
        }
    }
    getEmployeesCountry(country) {
        //TODO
        //returns array of employee objects having field "country" equaled to a given country
       
        
        const res =Object.values(this.#employees);
        return res.reduce((acc, empl) => {
            if (empl.address.country === country) acc.push(empl);
            return acc;
        }, []);
    }
    getEmployeesByAge(age) {
        //TODO
        //returns array of employee objects with a given age
        const date = new Date();
        const res = Object.values(this.#employees);
        return res.reduce((acc, empl) =>{
            if(date.getFullYear() - empl.birthYear === age) acc.push(empl);
            return acc;
        }, [] )
    }
    getEmployeesBySalaries(salryFrom, salryTo) {
        //TODO
        //returns array of employee objects with salary in a given closed range [salaryFrom, salaryTo]
        //if salaryFrom < 0, then get employees with salary less or equal salaryTo
        //if salaryTo , 0, then get employees with salary greater or equal salaryFrom
        //if salaryFrom < 0 && salaryTo < 0, then get all employees
        if(salryFrom < 0 && salryTo < 0 ){
            return this.#employees;
        }
        const arrEmpl = Object.values(this.#employees);
        const res = [];
        arrEmpl.forEach(empl => {
            if(empl.salary > salryFrom && empl.salary < salryTo){
                res.push(empl);
            }else
            if(salryFrom < 0){
                empl.salary <= salryTo ? res.push(empl) : false;
            } else
            if(salryTo < 0){
                empl.salary >= salryFrom ? res.push(empl) : false;
            }
        });
        return res;
    }
    
}
const emp1 = createEmployee(124, "Pavel", 2003, 12000, "Lod", "Israel");
const emp7 = createEmployee(126, "Pavel", 2003, 12000, "Lod", "Israel");
const emp2 = createEmployee(127, "John", 2000, 15000, "New York", "USA");
const emp3 = createEmployee(128, "Jane", 2005, 18000, "London", "UK");
const emp4 = createEmployee(129, "Bob", 2002, 20000, "Paris", "France");
const emp5 = createEmployee(130, "Sara", 2001, 22000, "Berlin", "Germany");
const emp6 = createEmployee(125, "Pavel", 2003, 35000, "Lod", "Israel");
const comp = new Company();
comp.addEmployee(emp1);
comp.addEmployee(emp7);
comp.addEmployee(emp2);
comp.addEmployee(emp3);
comp.addEmployee(emp4);
comp.addEmployee(emp5);
comp.addEmployee(emp6);
comp.removeEmployee(126);
const country = comp.getEmployeesCountry("Israel");
comp.getEmployeesByAge(22);
const salary1 = comp.getEmployeesBySalaries(-1, -1);
const salary2 = comp.getEmployeesBySalaries(12000, 22000);
const salary3 = comp.getEmployeesBySalaries(-1, 20000);
const salary4 = comp.getEmployeesBySalaries(15000, -1);
