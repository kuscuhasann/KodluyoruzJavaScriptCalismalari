let kullaniciAdi=prompt("Lütfen İsminizi Giriniz");
console.log(kullaniciAdi);

let spanDom=document.querySelector("span#myName");
//Alınan kullanıcı verilerinin html ortamına aktarılması 
spanDom.innerHTML=kullaniciAdi;
let hZero="";
let mZero="";
let sZero="";
let turkishDayName;
function timeUpdate()
{
//Tarih verilerinin alınması
let nowClock =new Date();
let day=nowClock.getDay();

console.log(typeof(day),day);
let hour=nowClock.getHours();
let minute=nowClock.getMinutes();
let second=nowClock.getSeconds();
//Gunlerin sayi degerlerinin metin degerlerine donusturulmesi
if(day==0)
    turkishDayName="Pazar";
else if(day==1)
    turkishDayName="Pazartesi";
else if(day==2)
    turkishDayName="Salı";
else if(day==3)
    turkishDayName="Çarşamba";
else if(day==4)
    turkishDayName="Perşembe";
else if(day==5)
    turkishDayName="Cuma";
else if(day==6)
    turkishDayName="Cumartesi";
//0 dan küçük degerlerin basina 0 eklenmesi
if(hour<10)
hZero="0";
if(minute<10)
mZero="0";
if(second<10)
sZero="0";

let divDom =document.querySelector("div#myClock");
divDom.innerHTML=`${hZero}${hour}:${mZero}${minute}:${sZero}${second} ${turkishDayName}`;
}

window.setInterval("timeUpdate()",1);


