let elBtnLogOut = document.querySelector(".log_out");
let elRowTemp = document.querySelector("#rowTemp").content;
let elWrapper = document.querySelector(".wrapper__left");
let elTempName = document.querySelector(".user__name");
let elTempEmail = document.querySelector(".user__email");
let elTempIsAdmin = document.querySelector(".user__isAdmin");
let elTempEdit = document.querySelector(".user__edit");
let elTempRemove = document.querySelector(".user__remove");
let elTempId = document.querySelector(".user__id");
let result = document.querySelector(".result");  
let elBtn = document.querySelector(".wrapper__btn")
let elBtnDelete = document.querySelector(".wrapper__btn-delete")
let elBtnEdit = document.querySelector(".wrapper__btn-edit")
let elBtnSsave = document.querySelector(".wrapper__btn-save")
let authToken = localStorage.getItem("token");
let elMe = document.querySelector(".me");  

fetch("https://fast-ravine-16741.herokuapp.com/api/posts", {
method: 'GET',
headers: {
    "Content-Type":"application/json",
    "Authorization": authToken
}})
.then(res => res.json())
.then(data => 
    {if (!data.error) {
        renderPosts(data.posts)
        result.innerHTML = data.totalResults
    }else {
        window.location.href = "/login.html"    
    }
})

elBtnLogOut.addEventListener("click", function() {
    
    localStorage.removeItem("token")
    
    window.location.href = "/login.html"
    
})


fetch("https://fast-ravine-16741.herokuapp.com/api/users/me", {
method: 'GET',
headers: {
    "Content-Type":"application/json",
    "Authorization": authToken
}})
.then(res => res.json())
.then(data => {
    
    if (!data.error) {
        elMe.innerHTML= `${data.name} & ${data.email}`
    }
})


function renderPosts(array) {
    
    elWrapper.innderHTML = null;
    
    let newFragment = document.createDocumentFragment()
    
    for (const item of array) {
        
        let rowTemp = elRowTemp.cloneNode(true);
        
        rowTemp.querySelector(".user__title").textContent = item.title;
        rowTemp.querySelector(".user__body").textContent = item.body;
        rowTemp.querySelector(".btn__delete").dataset.postId = item._id;
        
        newFragment.appendChild(rowTemp)
    }
    elWrapper.appendChild(newFragment)
}


elWrapper.addEventListener("click", function (evt) {
    
    let postItem = evt.target.dataset.postId;
    
    console.log(evt.target.dataset);
    
    if (postItem) {
        fetch(`https://fast-ravine-16741.herokuapp.com/api/posts/${postItem}`, {
        method: 'DELETE',
        headers: {
            "Content-Type":"application/json",
            "Authorization":authToken
            
        },
    })
    .then(res => res.json())
    .then(data =>{
        
        if (!data.error) {
        }else{
            alert(data.error)
        }
    })
}
})