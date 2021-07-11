//listedeki birinci elemanı çekmek ve console ekranına yazdırmak
let ilkListeElamani=document.querySelector("ul#liste>li:first-child");
console.log(ilkListeElamani);
//listedeki  son elemanı çekmek ve console ekranına yazdırmak
let sonListeElemani=document.querySelector("ul#liste>li:last-child");
console.log(sonListeElemani);
//listedeki son elamanın degerini değiştirmek
sonListeElemani.innerHTML="degisen son eleman degeri ";
//Ul'nin çekilmesi
let ulDom=document.querySelector("ul#liste");
//yeni bir element oluşturmak
let liDom=document.createElement('li');
//oluşturulan öğenin içerisine deger atamak
liDom.innerHTML="Oluşturulan yeni öğe";
//Oluşturulan öğenin Ul'nin sonuna eklenmesi
ulDom.append(liDom);
//oluşturulan öğrenin listenin başına eklenmesi
ulDom.prepend(liDom);