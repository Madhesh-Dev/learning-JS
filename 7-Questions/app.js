//using selectors inside the element

const questions = document.querySelectorAll(".question");

questions.forEach(function(quesiton){

    const btn = quesiton.querySelector(".question-btn");
    btn.addEventListener("click",function(){

        questions.forEach(function(ques){

            if(ques !== quesiton)
            {
                ques.classList.remove("show-text");
            }

        });
        quesiton.classList.toggle("show-text");
    })

})


// traversing the dom

// const btns = document.querySelectorAll(".question-btn");

// btns.forEach(function(btn){
//     btn.addEventListener("click",function(e){

//         const question = e.currentTarget.parentElement.parentElement;

//         question.classList.toggle("show-text");

//     });
// });





