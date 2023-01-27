const { application } = require("express");

const id=document.querySelector("#id"),
    psword=document.querySelector("#psword"),
    loginBtn=document.querySelector("button");

    loginBtn.addEventListener("click",login);

    function login(){
        console.log(id.value);
        console.log(psword.value);

        const req={
            id:id.value,
            psword:psword.value,
        };
        fetch("/login",{
            method: "POST",
            headers:{
            "Content-Type":"application/json"
            },
       
            body: JSON.stringify(req)
        });
    }
    

