let a = +prompt('Введите число a','0');

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



let b = +prompt('Введите число b','0');

if (a === 0 || a === 2){
    console.log('10)',a + 7);
}else{
    console.log('10)',a / 10);
}

if (a <= 1 && b >= 3){
    console.log('11)',a + b);
}else{
    console.log('11)',a - b);
}

if (a > 2 && a < 11 || b >= 6 && b < 14){
    console.log('12) Верно');
}else{
    console.log('12) Неверно');
}

let num = +prompt('Введите число от 1 до 4 и вы узнаете время года');
let result;

switch(num){
    case 1:
        result = 'Зима';
        break;
    case 2:
        result = 'Весна'
        break;
    case 3:
        result = 'Лето'
        break;
    case 4:
        result = 'Осень';
        break;

    default:
        alert('Не найдено');
}

console.log('13)', result);






