
const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];


const onStart = document.querySelector('[data-action="start"]')
const onStop = document.querySelector('[data-action="stop"]')
let timerId= null

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

onStart.addEventListener('click', startOnClick);
onStop.addEventListener('click', stopOnClick);

function startOnClick() {
    onStart.setAttribute("disabled", "disabled");

    timerId=setInterval(() => {
        document.body.style.background = colors[randomIntegerFromInterval(0, colors.length - 1)]
    }, 1000);
};

function stopOnClick() {
    onStart.removeAttribute("disabled");
    
    clearInterval(timerId);
}


