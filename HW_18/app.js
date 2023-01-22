function createEmployee(id, name, birthYear, salary, city, country) {
    return {id, name, birthYear, salary, address: {city, country}}
}
const employees = [
    createEmployee(123, "Vasya", 2000, 15000, "Lod", "Israel"),
    createEmployee(124, "David", 1975, 15500, "Tel Aviv", "Israel"),
    createEmployee(125, "Sara", 1985, 20000, "New York", "USA"),
    createEmployee(126, "Abraham", 1990, 13000, "London", "UK"),
    createEmployee(127, "Moshe", 2000, 15000, "Rehovot", "Israel"),
    createEmployee(128, "Goga", 1993, 10000, "Tbilisi", "Gorgia"),
    createEmployee(129, "Sasha", 2000, 25000, "Ramat Gan", "Israel"),
    createEmployee(130, "Victor", 2003, 10000, "Arad", "Israel")
]
function getEmployee(employees, id) {
    
    return employees.find( employee => employee.id === id);
}
console.log(getEmployee,128);

function getEmployeesBySalary(employees, salaryFrom, salaryTo) {
    return employees.filter( employee => employee.salary >= salaryFrom &&
        employee.salary <= salaryTo) 

}
console.log(getEmployeesBySalary(employees,1000,2000));

 //returns array of Employee objects from a given city
function getEmployeesByCity(employee, city) {
    return employees.filter(employee => employee.address.city == city);
}
console.log(getEmployeesByCity(employees,"Tbilisi"))

 //returns array of all Employee names
function getEmployeeNames(employees) {
    return employees.map(employee => employee.name);
}
console.log(getEmployeeNames(employees));

//returns array of Employee objects sorted by age in ascending order
function sortEmployeesByAge(employees) {
    employees.sort( (a,b) => b.birthYear - a.birthYear);
}
console.log(sortEmployeesByAge(employees));

//computes and returns total salary for all Employee objects
function computeSalaryBudget(employees) {
   
    return employees.reduce((a, b) => a + b.salary,0);
}
console.log(computeSalaryBudget(employees))
