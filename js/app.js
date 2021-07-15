const users=["AYSE","MehMet","HasAN","SELAmi"];

const userObj=users.map(item=>(
  {userName:item,shortName:`${item[0]}.`,newName:`${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`}
  
)
)
console.log(userObj);
