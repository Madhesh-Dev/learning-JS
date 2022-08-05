const colors = ["orange", "green", "rgba(133,122,200)", "#f15025","white"];

const btn = document.getElementById('btn');

const color = document.querySelector(".color");

btn.addEventListener('click',function(){

    // random number between 2 and 5
    const randomNum = getRandomNum();
    document.body.style.backgroundColor = colors[randomNum];
    color.textContent = colors[randomNum];
});

function getRandomNum()
{
    return Math.floor(Math.random() * colors.length);
}