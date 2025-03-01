let plus = document.querySelector('.plus');
let minus = document.querySelector('.minus');
let num = document.querySelector('.num');
let reset = document.querySelector('.reset');
let a = 0;

num.innerHTML = "00";

plus.addEventListener('click', () => {
    a++;
    num.innerHTML = (a > 9) ? a : "0" + a;
});

minus.addEventListener('click', () => {
    if (a !== 0) {
        a--;
    }
    num.innerHTML = (a > 9) ? a : "0" + a;
});

reset.addEventListener('click', () => {
    a = 0;
    num.innerHTML = "0" + a;
});