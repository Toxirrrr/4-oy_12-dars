let elForm = document.querySelector(".form");
let elClear = document.querySelector(".clear");
let elFormLogin = document.querySelector(".login");
let elFormPassword = document.querySelector(".password");
let elResult = document.querySelector(".result");
// 
elForm.addEventListener("submit", function(evt){
    evt.preventDefault();
    let formLogin = elFormLogin.value.trim();
    let formPassword = elFormPassword.value.trim();
        fetch("https://fast-ravine-16741.herokuapp.com/api/auth", {
    method:`POST`,
    headers: {
        "Content-Type":"application/json"
    },
    body: JSON.stringify(
        {
            "email": formLogin,
            "password": formPassword
        }
        ),
    })
    .then(res => res.json())
    .then(data => {console.log(data)
        
        if (!data.error) {
            localStorage.setItem("token", data.Authorization);
            console.log(data.Authorization);
            elFormLogin.value = null
            elFormPassword.value = null
            window.location.href = "/index.html"
        }else {
            alert(data.error)
        }
    })
    
    // 
    // function checkLogin(loginV, passwordV) {
    //     if (formLogin.includes(loginV) && formPassword.includes(passwordV)) {
    //         return true
    //     }else {
    //         return false
    //     }
    // }
    

})
