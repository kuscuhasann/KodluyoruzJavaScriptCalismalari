let fullName=prompt("Lütfen Adınızı giriniz : ");

let title=document.querySelector("#title");

title.innerHTML=`${title.innerHTML} <small>${fullName}</small>`