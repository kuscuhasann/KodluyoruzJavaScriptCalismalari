let userFormDom=document.querySelector("#userForm");

userFormDom.addEventListener("submit",submitForm);
const alertDom=document.querySelector("#alert");


const ALERT= (title,mesaj,type="warning")=>`
<div class="alert alert-${type} alert-dismissible fade show" role="alert">
  <strong>${title}</strong> ${mesaj}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`


function submitForm(event)
{
    event.preventDefault();
    const userNameDom=document.querySelector("#username");
    const scoreDom=document.querySelector("#score");
    if(userNameDom.value && scoreDom.value){
    addItem(userNameDom.value,scoreDom.value);
    userNameDom.value="";
    scoreDom.value="";
    }
    else
    alertDom.innerHTML=ALERT("Bilgilendirme:","Eksik Bilgi Girdiniz","warning");
}

let ulDom=document.querySelector("#userList");
function addItem(userName,score)
{
    let liDom=document.createElement('li');
    liDom.innerHTML=`
    ${userName}
    <span class="badge bg-primary rounded-pill">${score}</span>
    `;
    liDom.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
    ulDom.append(liDom);
}

