let value = 0;
const valElement = document.getElementById("value");

const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn){
    btn.addEventListener("click",function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease'))
        {
            value--;
        }
        else if(styles.contains('increase'))
        {
            value++;
        }
        else{
            value=0;
        }
        if(value>0)
        {
            valElement.style.color = "green";
        }
        else if(value < 0)
        {
            valElement.style.color = "red";
        }
        else
            valElement.style.color = "#222";
        valElement.textContent = value;
    })
});
