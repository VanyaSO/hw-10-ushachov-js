let a = +prompt('Введите число a','0');
console.log(a);

let b = +prompt('Введите число b','0');
console.log(b);


let oneTask = (a === 0) ? 'Верно' : 'Неверно';
console.log('1)',oneTask);

let twoTask = (a > 0) ? 'Верно' : 'Неверно';
console.log('2)',twoTask);

let threeTask = (a < 0) ? 'Верно' : 'Неверно';
console.log('3)',threeTask);

let fourTask = (a >= 0) ? 'Верно' : 'Неверно';
console.log('4)',fourTask);

let fiveTask = (a <= 0) ? 'Верно' : 'Неверно';
console.log('5)',fiveTask);

let sixTask = (a !== 0) ? 'Верно' : 'Неверно';
console.log('6)',sixTask);

let sevenTask = (a == 'test') ? 'Верно' : 'Неверно';
console.log('7)',sevenTask);

let eightTask = (a === '1') ? 'Верно' : 'Неверно';
console.log('8)',eightTask);

let nineTask = (a > 0 && a < 5) ? 'Верно' : 'Неверно';
console.log('9)',nineTask);

if (a === 0 || a === 2){
    tenTask = a + 7;
}else{
    tenTask = a / 10;
}
alert(`10) ${tenTask}`);



