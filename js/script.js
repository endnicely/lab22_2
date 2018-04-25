/*eslint-env browser*/

function displayMenu() {
    "use strict";
     window.console.log("Welcome to the Employee Management Application");
     window.console.log("");
     window.console.log("COMMAND MENU");
     window.console.log("show - show all employees");
     window.console.log("add - add an employee");
     window.console.log("del - delete an employee");
     window.console.log("exit - exit the program");
     window.console.log("");
}

function show(employees) {
    "use strict";
    var i = 1;
    employees.forEach(function(employee) {
        window.console.log(String(i) + ". " + employee);
        i += 1;
    });
}

function add(employees) {
    "use strict";
    var employee = window.prompt("Enter the employee's name");
    employees.push(employee);
    window.console.log(employee + " was added.");
    window.console.log("");
}

function del(employees) {
    "use strict";
    var num, employee;
    num = parseInt(window.prompt("Enter number to delete"), 10);
    
    
}
function main() {
    "use strict";
    var xhr, i, command, jsonData, employees = [];
    //SHOW COMMAND MENU
    displayMenu();
    //SET UP OUR XHR REQUEST
    xhr = new XMLHttpRequest();
    xhr.open("GET", "data/employees.json");
    xhr.send();
    //CHECK THE STATE OF THE XHR REUEST
    xhr.addEventListener("readystatechange", function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            //GET THE JSON DATA FROM THE RESPONSE
            window.alert(xhr.status);
            jsonData = JSON.parse(xhr.responseText);
            for ( i = 0; i < jsonData.employeeslength; i+=1) {
                employees.push(jsonData.employees[i].name);
                while(true) {
                    command = window.prompt("Enter command");
                    if (command !== null) {
                        if (command.toLowerCase() === "show") {
                        
                        } else if (command.toLowerCase() === "add") {

                        } else if (command.toLowerCase() === "del") {

                        } else if (command.toLowerCase() === "exit") {
                            break;
                        } else {
                            window.alert("That is not a valid command");
                        }
                        
                    } else {
                        window.alert("That is not a valid command");
                    }
                    
                }
            }
            
        }
    });
}

main();