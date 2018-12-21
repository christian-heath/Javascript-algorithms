// Algorithm Challenge #1
// let students = [
//     { name: 'Remy', cohort: 'Jan' },
//     { name: 'Genevieve', cohort: 'March' },
//     { name: 'Chuck', cohort: 'Jan' },
//     { name: 'Osmund', cohort: 'June' },
//     { name: 'Nikki', cohort: 'June' },
//     { name: 'Boris', cohort: 'June' }
// ];

// for (var i = 0; i < students.length; i++) {
//     console.log("Name: " + students[i].name + ", Cohort: " + students[i].cohort);
// }

// Algorithm Challenge #2

let users = {
    employees: [
        { 'first_name': 'Miguel', 'last_name': 'Jones' },
        { 'first_name': 'Ernie', 'last_name': 'Bertson' },
        { 'first_name': 'Nora', 'last_name': 'Lu' },
        { 'first_name': 'Sally', 'last_name': 'Barkyoumb' }
    ],
    managers: [
        { 'first_name': 'Lillian', 'last_name': 'Chambers' },
        { 'first_name': 'Gordon', 'last_name': 'Poe' }
    ]
};
console.log("Employees")
for (var j = 0; j < users.employees.length; j++)
{
    console.log(j + 1 + " - " + users.employees[j].last_name + ", " + users.employees[j].first_name);
}
console.log("Managers")
for (var k = 0; k < users.managers.length; k++)
{
    console.log(k + 1 + " - " + users.managers[k].last_name + ", " + users.managers[k].first_name);
}