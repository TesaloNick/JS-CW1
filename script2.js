// const answer1 = prompt('какого цвета небо?');
// const answer2 = prompt('дважды два?');

// if (((answer1 === 'голубое') || (answer1 === 'синее')) && (answer2 === 4)) {
//     alert('правильно')
// } else {
//     alert('неправильно!!!')
// }
const a = prompt('Первое число?');
const с = prompt('Знак?');

const b = prompt('Второе число?');

switch (с) {
    case '+':
        alert(+a+(+b));
        break;
    case '-':
        alert(+a-(+b));
        break;
    case '*':
        alert(+a*(+b));
        break;
    case '/':
        alert(+a/(+b));
        break;
    default:
      alert( "ты мне втираешь какую-то дичь" );
}