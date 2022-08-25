let elForm = document.querySelector(".form");
let elFormEmail = document.querySelector(".form__email");
let elFormPassword = document.querySelector(".password");
let elFormName = document.querySelector(".form__name");

elForm.addEventListener("submit", function(evt) {
    evt.preventDefault()

    let formEmail = elFormEmail.value.trim();
    let formPassword = elFormPassword.value.trim();
    let formName = elFormName.value.trim();

    
    fetch("https://fast-ravine-16741.herokuapp.com/api/users", {
    method: 'POST',
    headers: {
        "Content-Type":"application/json"
    },
    body: JSON.stringify(
        {
            "email":formEmail,
            "password":formPassword,
            "name":formName,
            "isAdmin":true
        }
        ),
    })
    .then(res => res.json())
    .then(data =>{

        if (!data.error) {
            window.location = "/login.html"
            elFormLogin.value = null
            elFormPassword.value = null

        }else{
            alert(data.error)
            console.log("error");
        }
    })
    
})