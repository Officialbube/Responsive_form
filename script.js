const signInBtn = document.getElementById("signin");
const signUpBtn = document.getElementById("signup");
const firstForm = document.getElementById("form1");
const secondForm = document.getElementById("form2");
//const container = document.querySelector(".container");
const container = document.getElementById("container");

signInBtn.addEventListener("click", ()=>{
    container.classList.remove("right-panel-active");
});

signUpBtn.addEventListener("click", ()=>{
    container.classList.add("right-panel-active");
});


//firstForm.addEventListener("submit", (e) => e.preventDefault());
//secondForm.addEventListener("submit", (e) => e.preventDefault());