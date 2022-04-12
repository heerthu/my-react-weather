var names = ['Heerthu', 'Ajan', 'Kesu', 'Ara'];

// names.forEach(function (name) {
//     console.log('forEach', name)
// });

// names.forEach(function (name) {
//     console.log('arrowFunc', name);
//     console.log('something else');
//     var x = 'something';
// });

//names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('Heerthu'));

// var person = {
//     name : 'Heerthu',
//     greet: function () {
//         names.forEach((name) => {
//             console.log(this.name + " Say Hi to " + name)
//         });
//     }
// };

// person.greet();

function add (a, b) {
    return a + b;
}

//addStatement
var addStatement = (a, b) => {
    return a+b;
}

console.log(addStatement (4, 3));
console.log(addStatement (12, 39));
console.log(addStatement (49, 23));

//addExpression
var addExpression = (a,b) => a+b;

console.log(addExpression(10, -12))
//add.forEach((total) => console.log(total));