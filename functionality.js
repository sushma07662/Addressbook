import { User } from "user.js";

const userData = [];

//CREATE USER FUNCTION
function createUser(fullName, address, age, number, state) {
    const user = new User(fullName, address, age, number, state);
    userData.push(user);
}

createUser('sushma', 'goa', 22, 7989980371, 'vizag');  //User 1
createUser('Jack', 'Kerala', 27, 4567890987, 'thiruvanantapuram');  // User 2
createUser('Ram', 'andhra', 30, 7777417318, 'amaravathi');  // User 3

//READ USER FUNCTION
function readUsers() {
    return userData;
}
const allUsers = readUsers();
console.log(allUsers);


//UPDATE USER FUNCTION
function findUserByName(name) {
    return userData.find(user => user.fullName == name);
}

function updateUser(name, newDetails) {
    const user = findUserByName(name);
    if (user) {
        Object.assign(user, newDetails);
        return true;
    }
    return false;
}

const updated = updateUser('Ram ', { address: 'goa', age: 45 });
console.log(updated);
console.log(allUsers);


//DELETE USER FUNCTION

function deleteUser(name) {
    const user = findUserByName(name);
    const index = userData.indexOf(user);
    if (index != -1) {
        userData.splice(index, 1);
        return true;
    }
    return false;
}

const deleted = deleteUser('Ram');
console.log(deleted)
console.log(allUsers);


//SEARCH USER

function findUserByAddress(address) {
    return userData.find(user => user.address == address);      //search by address
}
function findUserByState(state) {
    return userData.find(user => user.state == state);          //search by state
}
function findUserByNumber(number) {
    return userData.find(user => user.number == number);        //search by number
}
function findUserByAge(age) {
    return userData.find(user => user.age == age);              //search by age
}



//SORTING USER DATAS 

function sortUsersByStringParameter(users, parameter) {
    return users.sort((a, b) => a[parameter].localeCompare(b[parameter]));      //for FULLNAME,ADDRESS,STATE
}

const sortedByAddress = sortUsersByStringParameter(userData, "address");
sortedByAddress.forEach(user => console.log(user));



function sortUsersByIntParameter(users, parameter) {
    return users.sort((a, b) => a[parameter] - b[parameter]);           //for AGE and NUMBER
}

const sortedByAge = sortUsersByIntParameter(userData,"age");
sortedByAge.forEach(user => console.log(user));
