if('serviceWorker' in navigator){
   navigator.serviceWorker.register('/sw.js')
   .then(reg=>console.log('service worker çalışıyor'))
   .catch(err=>console.log('service worker çalışmıyor',err))
}


const title=document.querySelectorAll('.title');
const mail=document.querySelectorAll('.mail');
const input=document.querySelectorAll('.search_input');
const logo=document.querySelector('#resim');


let titleArray=Array.from(title);

titleArray.forEach((t)=>{

   if(t.innerHTML.length>25){
    t.classList.remove('title');
    t.classList.add('titleSmall');
   }
});

let mailArray=Array.from(mail);
mailArray.forEach((m)=>{

    if(m.innerHTML.length>80){
     m.classList.remove('mail');
     m.classList.add('mailSmall');
    }
 });


 
 let mobilEkran=window.matchMedia("(max-width:576px)");

 if(mobilEkran.matches){

    logo.setAttribute("src", "./assets/logo-mobil.png");
 }else{
    logo.setAttribute("src", "./assets/logo.png");
 }
 



