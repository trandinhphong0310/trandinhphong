var number = 6;

var output = ++number / number--;
// ++number gán +1 trực tiếp thành 7 sau đó sẽ được gán giá trị 7 cho vế sau
// vế sau là -- hậu tố nên sẽ gán 7 và -1 còn 6 sau đó trả lại giá trị trước khi tính
// và cho ra kết quả 7-7=0;
console.log('output: ', output);

var numberTwo = 2;

var outputTwo = numberTwo--;
console.log('outputTwo: ', outputTwo);


// toán tử nối chuỗi
var name = 'John';

name += ' ' + 'Doe';
console.log(name);

// toán tử so sánh
var a = 2;
var b = 2;

var isSuccess = a == b;
console.log('isSuccess: ', isSuccess);

var number = 14;

var remain = number % 2;

var issOld = remain == 1;
console.log('issOld: ', issOld);


// number type
var a = 2;
var b = 3;

console.log(typeof a);

// boolean type
var a = true;
var b = false;

// string type
var a = 'phong';
var b = 'phong';
var name = a +' ' + b;
console.log(name);

// undefined type
var a;
console.log(a);

// null type
var a = null;
console.log(typeof a);

// symbol type
var id = Symbol('id');
var id2 = Symbol('id');

console.log(id === id2);

// function type
var myFunction = function() {
    
}

myFunction();

// object type
var myObject = {
    name: 'phong',
    age: '18',
    address: '89/3',
    myFunction: function () {}
};

console.log('myObject: ', myObject);

// array type
var myArray = [
    'javascript',
    'java',
    'php'
];

console.log(myArray);

var a = '1';
var b = 2;
var c = typeof a;
var d = typeof b;
var e = typeof d;
console.log(c, d, e);

// truthy type
console.log(Boolean(1));
console.log(Boolean('Hello World'));

// falsy type
console.log(!!null);

// function, object, array rỗng được hiểu là truthy nên ! của nó là falsy
var car = [];

if (!car) {
    console.log(1);
} else {
    console.log(2);
}

console.log(!!document.all);

var goOut = function() {}
console.log(!goOut);


var traiCay = [
    'xoài',
    'cam',
    'quýt'
];

var num = 1;
var num2 = 2;
var result = 'a' || 'b' || 0 || 'd';
console.log(result);

/* if (result) {
    document.write('dung');
} else {
    document.write('sai');
} */


// object argument
// for example
function write() {
    var myString = '';
    for (param of arguments) {
        myString += `${param} - `;
    }
    console.log(myString);
}
write('dung', 'sai');

// return value
function sum(a, b) {
    return a + b;
}

var result = sum(2, 8);
console.log(result);

// declaration function
function num() {

}

// expression function
/* var result = function () {

}

setTimeOut(function sum(a, b) {
   
});

var result = {
    myFunction: function () {

    }
} */

document.write('toi di \'code dao\'' + ' ');

// template string

var myString = 'toi, di, code, toi, dao';
// 1. length type
// 2. find index of string
// 3. slice index
// 4. trim string
// 5. upper lower case string
// 6. replace string
// 7. get character by index
// 8. split string
console.log(myString.split(', '));

var number = 20;
var result = 20.2342342;

console.log(result.toString());


function isNumber(value) {
    return typeof value === 'number';
}




// Expected results:
console.log(isNumber(999)); // true
console.log(isNumber('abc')); // false
console.log(isNumber('100')); // false
console.log(isNumber(NaN));
console.log(isNumber(100 / 'abc'));

var languages = [
    "java",
    "php",
    "Ruby"
];

console.log(languages.slice(-2,-1));

function getLastElement(array, charactor){
    return array.slice(-2, -1);
}



// Ví dụ sử dụng
var animals = ['Monkey', 'Tiger', 'Elephant'];
var result = getLastElement(animals);

console.log(result); // Expected: "Elephant"
console.log(animals); // Expected: ['Monkey', 'Tiger', 'Elephant']

const myStr = "FirstLineSecondLineThirdLine"; // Change this FirstLine
console.log(myStr); // Expected

let lastNameLength = 0;
const lastName = "Lovelace";

// Only change code below this line
lastNameLength = lastName.length;
console.log(lastNameLength);

var myKey = 'email';

var myInfo = {
    name: 'phong',
    age: 30,
    address: 'di an',
    myKey: 'phongtran@gmail.com',
    getName: function() {
        return this.name;
    }
}

console.log(myInfo.getName());

function User(firstName, lastName, Avatar) {
    this.firstName = firstName; 
    this.lastName = lastName;
    this.Avatar = Avatar;
    this.getName = function () {
        return `${firstName} ${lastName}`;
    }
}

User.prototype.className = 'className';
User.prototype.getClassName = function () {
    return this.className;
}

var author = new User('phong', 'tran', 'avatar');
var user = new User('toi', 'vu', 'avatar');

author.title = 'title';

console.log(user.getClassName());
console.log(author.className);

// Làm bài tại đây
function Student(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.getFullName = function () {
        return `${firstName} ${lastName}`;
    };
}


// Ví dụ khi sử dụng
var student = new Student('Long', 'Bui');

console.log(student.firstName);  // 'Long'
console.log(student.lastName);  // 'Bui'
console.log(student.getFullName());  // 'Long Bui'

