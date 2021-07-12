let user={userName:"hasanKuscu",isActive:true};

localStorage.setItem("userInfo",JSON.stringify(user));

let userInfo=JSON.parse(localStorage.getItem("userInfo"));

console.log(userInfo);