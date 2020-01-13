const title=document.querySelectorAll('.title');
const mail=document.querySelectorAll('.mail');
const input=document.querySelectorAll('.search_input');

//console.log(Array.from(title));

let titleArray=Array.from(title);

titleArray.forEach((t)=>{

   console.log(t.innerHTML.length);
   if(t.innerHTML.length>25){
    t.classList.remove('title');
    t.classList.add('titleSmall');
   }
});

let mailArray=Array.from(mail);
mailArray.forEach((m)=>{

    console.log(m.innerHTML.length);
    if(m.innerHTML.length>80){
     m.classList.remove('mail');
     m.classList.add('mailSmall');
    }
 });



