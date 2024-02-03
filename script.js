const value = document.getElementById('value');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const reset = document.getElementById('reset');

const updateValue = () => {
    value.innerHTML = count;
};

let count = 0;
let intervalId = 0;

plus.addEventListener('click', () =>{
    count += 1;
    updateValue();
})

minus.addEventListener('click', () =>{
    count -= 1;
    updateValue();
})

plus.addEventListener('mousedown', () => {
    intervalId = setInterval(() => {
        count += 1;
        updateValue();
    }, 100);
});

document.addEventListener('mouseup', () => clearInterval(intervalId));

minus.addEventListener('mousedown', () => {
    intervalId = setInterval(() => {
        count -= 1;
        updateValue();
    }, 100);
});

document.addEventListener('mouseup', () => clearInterval(intervalId))

reset.addEventListener('click', () =>{
    count = 0;
    updateValue();
})