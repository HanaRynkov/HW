function createEmployee(id, name, birthYear, salary, city, country) {
    return { id, name, birthYear, salary, address: { city, country } }
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
//const index = employees.indexOf(createEmployee(126, "Abraham", 1990, 13000, "London", "UK"))
const index = employees.findIndex(function (empl) {
    return empl.id === 126;
})
const employee = employees.find(function (empl) {
    return empl.id === 126;
})
//HW #18
function getEmployee(employees, id) {
    //returns reference to an Employee object with a given id value
    return employees.find(empl => empl.id === id);
}
function getEmployeesBySalary(employees, salaryFrom, salaryTo) {
    //returns array of Employee objects that have salary in [salaryFrom, salaryTo]
    return employees.filter(empl => empl.salary >= salaryFrom &&
        empl.salary <= salaryTo)
}
function getEmployeesByCity(employees, city) {
    //returns array of Employee objects from a given city
    return employees.filter(empl => empl.address.city == city);
}
function getEmployeeNames(employees) {

    //returns array of all Employee names
    return employees.map(empl => empl.name);
}
function sortEmployeesByAge(employees) {
    //returns array of Employee objects sorted by age in ascending order
    employees.sort((e1, e2) => e2.birthYear - e1.birthYear);
}
function computeSalaryBudget(employees) {

    //computes and returns total salary for all Employee objects
    return employees.reduce((res, empl) => res + empl.salary, 0);
}
//console.log(computeSalaryBudget(employees))
function reducer(res, empl) {
    const newRes = res + empl.salary;
    return newRes
}
let field = "salary";
function displayFieldValue(employees, index, field) {
    console.log(employees[index][field]);
}
//displayFieldValue(employees, 3, "id");
// employees[0].salary = 20000;
// employees[0].department = "QA";
// displayFieldValue(employees, 0, "department");
// delete employees[0].department
// displayFieldValue(employees, 0, "department");
function computeMinMaxAvgSalary(employees) {
    const res = employees.reduce((res, empl) => {
        if (res.minSalary > empl.salary) {
            res.minSalary = empl.salary;
        } else if (res.maxSalary < empl.salary) {
            res.maxSalary = empl.salary;
        }
        res.avgSalary += empl.salary;
        return res;

    }, { minSalary: employees[0].salary, maxSalary: employees[0].salary, avgSalary: 0 });
    res.avgSalary = res.avgSalary / employees.length;
    return res;
}
function displayValue(minMaxAvg, field) {
    console.log(`value of the field ${field} is ${minMaxAvg[field]}`)
};
const minMaxAvg = computeMinMaxAvgSalary(employees);
// displayValue(minMaxAvg,"avgSalary");
// displayValue(minMaxAvg,"minSalary");
// displayValue(minMaxAvg,"maxSalary");
const strings = ["b", "xyz", "lmn", "xyz", "lmn", "xyz", "a"];
//assumed result:
//xyz -> 3
//lmn -> 2
//a -> 1
//b -> 1
function displayStringOccurrences(strings) {
    const stringOccurrences = getStringOccurrences(strings);
    const arrayOccurrences = Object.entries(stringOccurrences);
    arrayOccurrences.sort(stringComp);
    arrayOccurrences.forEach(entry => console.log(`${entry[0]} -> ${entry[1]}`));
}
function getStringOccurrences(strings) {
    const res = {};
    strings.forEach(str => {
        if (!res[str]) {
            res[str] = 1;
        } else {
            res[str]++;
        }
    });
    return res;
}
function stringComp(entry1, entry2) {
    let res = entry2[1] - entry1[1];
    if (res == 0) {
        res = entry1[0] < entry2[0] ? -1 : 1
    }
    return res;
}
displayStringOccurrences(strings);
//HW #19
//Task#1 
//TODO 
//returns country with most amount of employees
function getMostPopulatedCountry(employees) {
    return (getMostPupulatedCountries(employees, 1)[0]);
}
console.log(getMostPopulatedCountry(employees));

//Task#2
//returns a given number (conter) of countries with most amount of employees
function getMostPupulatedCountries(employees, counter) {
    const arrayCounter = Object.entries(countriesCounter(employees));
    arrayCounter.sort(counteriesComp);
    const res = [];
    if (counter > arrayCounter.length) {
        counter = arrayCounter.length;
    }
    for (let i = 0; i < counter; i++) {
        res[i] = createCountryList(arrayCounter[i][0], arrayCounter[i][1]);

    }
    return res;
}

function counteriesComp(entry1, entry2) {
    let res = entry2[1] - entry1[1];
    if (res == 0) {
        res = entry1[0] < entry2[0] ? -1 : 1
    }
    return res;
}
function countriesCounter(employees) {
    const res = {};
    for (let i = 0; i < employees.length; i++) {
        if (res[employees[i].address.country]) {
            res[employees[i].address.country] = 1;
        } else {
            res[employees[i].address.country]++;
        }
    }
    return res;
}


function createCountryList(country, employeesQuantity) {
    return { country, employeesQuantity }
}
getMostPupulatedCountries(employees, 2).forEach(e => console.log(e));


//TODO 
//returns true if a given anagram is indeed an angram of a given word
//anagram must have  same length as word
//anagram must have all letters from word
//hello anagram examples: elolh, olleh, ohell, lehol
//exampls non-anagrams: eloll (no h), ollehh(different length),
// olaeh ("a" doesn't exist in word), oleh(different length)

const word1 = 'elolh';
const word2 = 'hello';


function isAnagram(word, anagram) {
    let result = false;

    if (word === anagram || word.length !== anagram.length) {
        return result;
    }

    const letters = {};

    const wordArr = word.split('');
    const anagramArr = word.split('');

    wordArr.forEach(function (letter) {
        if (letters[letter]) {
            letters[letter] += 1;   // result[letter] = result[letter] + 1
        } else {
            letters[letter] = 1;
        }
    })

    for (let i = 0; i <= anagramArr.length; i++) {
        if (!wordArr.includes(anagramArr[i])) {
            result = false;
            break;
        }
        const anagramLetter = anagramArr[i];
        letters[anagramLetter] -= 1;
    }

    const lettersResultArray = Object.values(letters);  // [0,0,0,0];
    const nonZeroValuesArray = lettersResultArray.filter(function (item) {
        return item !== 0;
    });

    result = nonZeroValuesArray.length === 0;
    return result;
}


console.log('RESULT:', isAnagram(word1, word2));
