
let title=document.querySelector("#title");
title.addEventListener("click", clickEvent);

function clickEvent()
{
    console.log("tıklandı");
    this.style.color="red";
}