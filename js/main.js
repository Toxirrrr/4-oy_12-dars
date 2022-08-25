let elBtnLogOut = document.querySelector(".log_out");
let elRowTemp = document.querySelector("#rowTemp").content;
let elWrapper = document.querySelector(".wrapper__left");
let elTempName = document.querySelector(".user__name");
let elTempEmail = document.querySelector(".user__email");
let elTempIsAdmin = document.querySelector(".user__isAdmin");
let elTempEdit = document.querySelector(".user__edit");
let elTempRemove = document.querySelector(".user__remove");
let elTempId = document.querySelector(".user__id");
let elMe = document.querySelector(".me");  
let result = document.querySelector(".result");  
let elBtn = document.querySelector(".wrapper__btn")
let elBtnDelete = document.querySelector(".wrapper__btn-delete")
let elBtnEdit = document.querySelector(".wrapper__btn-edit")
let elBtnSsave = document.querySelector(".wrapper__btn-save")
let me = elMe;

let authToken = localStorage.getItem("token");

elBtnLogOut.addEventListener("click", function() {
    
    localStorage.removeItem("token")
    
    window.location.href = "/login.html"
    
})

function renderUsers(array) {
    
    elWrapper.innderHTML = null;
    
    let newFragment = document.createDocumentFragment()
    
    for (const item of array) {
        
        let rowTemp = elRowTemp.cloneNode(true);
        
        rowTemp.querySelector(".user__name").textContent = item.name;
        rowTemp.querySelector(".user__email").textContent = item.email;
        // rowTemp.querySelector(".user__id").textContent = item._id;
        
        newFragment.appendChild(rowTemp)
    }
    elWrapper.appendChild(newFragment)
}

// function renderMe(array) {

//     elTable.innderHTML = null;

//     let newFragment1 = document.createDocumentFragment()

//     for (const item of array) {

//         let headerTemp = elHeaderTemp.cloneNode(true);

//         headerTemp.querySelector(".header__user-name").textContent = item.name;

//         headerTemp.querySelector(".header__user-email").textContent = item.email;

//         newFragment1.appendChild(headerTemp)
//     }

//     elTable.appendChild(newFragment1)

// } 

// let elBtnLogOut = document.querySelector(".log_out");

// let elRowTemplate = document.querySelector("#rowTemp").content;

// let elWrapper = document.querySelector(".wrapper");

fetch("https://fast-ravine-16741.herokuapp.com/api/users", {
method: 'GET',
headers: {
    "Content-Type":"application/json",
    "Authorization": authToken
}})
.then(res => res.json())
.then(data => 
    {
        if (!data.error) {
            renderUsers(data)
            result.innerHTML = data.length;
        }else {
            window.location.href = "/login.html"
        }
    })
    
    
    fetch("https://fast-ravine-16741.herokuapp.com/api/users/me", {
    method: 'GET',
    headers: {
        "Content-Type":"application/json",
        "Authorization": authToken
    }})
    .then(res => res.json())
    .then(data => 
        {
            if (!data.error) {
                elMe.innerHTML=data.email
            }else {
                window.location.href = "/login.html"    
            }
        })
        
        
        
        
        // fetch("https://fast-ravine-16741.herokuapp.com/api/users/me", {
        // method: 'GET',
        // headers: {
        //     "Content-Type":"application/json",
        //     "Authorization": authToken
        // }})
        // .then(res => res.json())
        // .then(data => 
        //     {
        //         if (!data.error) {
        //             renderMe([data]);
        //         }
        //     })
        
        
        
        //    {
        //         if (!data.error) {
        //             renderUsers(data);
        //         }else {
        //             window.location.href = "/login.html"
        //         }
        //     })
        
        //     elBtnLogOut.addEventListener("click", function() {
        //         localStorage.removeItem("token")
        
        //         window.location.href = "/login.html"
        //     })
        
        
        //     function renderUsers(array) {
        //         elWrapper.innerHTML = null;
        
        //         let newFragment = document.createDocumentFragment()
        
        //         for (const item of array) {
        //            let rowTemp = elRowTemplate.cloneNode(true);
        
        //            rowTemp.querySelector(".user__name").textContent = item.name;
        //            rowTemp.querySelector(".user__email").textContent = item.email;
        //            rowTemp.querySelector(".user__isAdmin").textContent = item.isAdmin;
        //            rowTemp.querySelector(".user__id").textContent = item._id;
        
        //            newFragment.appendChild(rowTemp);
        //         }
        //         elWrapper.appendChild(newFragment);
        //     }
        
        
        
        
        
        
        
        
        