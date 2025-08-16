function login(){

}

function switchToSignup(){
    document.body.innerHTML = document.getElementById('sigupTemplate').innerHTML;
    initFormhandles();
}

function initFormhandles(){
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");

    if(loginForm){
        loginForm.addEventListener("submit", function(e){
            e.preventDefault;
            login();
        })
    }
    if(signupForm){
        signupForm.addEventListener("submit", function(e){
            e.preventDefault;
            alert("account create succesfully!");
        })
    }
}
window.onload = initFormhandlers;