//============================
// رقم واتساب
//============================

const phoneNumber = "212673885039";


//============================
// القائمة في الهاتف
//============================

const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");

if(menuBtn){

menuBtn.onclick = ()=>{

navbar.classList.toggle("active");

};

}


//============================
// تمرير سلس
//============================

document.querySelectorAll('a[href^="#"]').forEach(link=>{

link.onclick=function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

}

});


//============================
// عداد العرض
//============================

const endDate = new Date();

endDate.setDate(endDate.getDate()+3);

function countdown(){

const now = new Date();

const diff = endDate - now;

if(diff<=0)return;

const days=Math.floor(diff/(1000*60*60*24));

const hours=Math.floor((diff%(1000*60*60*24))/(1000*60*60));

const minutes=Math.floor((diff%(1000*60*60))/(1000*60));

const seconds=Math.floor((diff%(1000*60))/1000);

document.getElementById("days").textContent=days;
document.getElementById("hours").textContent=hours;
document.getElementById("minutes").textContent=minutes;
document.getElementById("seconds").textContent=seconds;

}

setInterval(countdown,1000);

countdown();


//============================
// إرسال الطلب
//============================

function sendWhatsApp(){

const name=document.getElementById("name").value.trim();

const phone=document.getElementById("phone").value.trim();

const city=document.getElementById("city").value.trim();

const address=document.getElementById("address").value.trim();

const product=document.getElementById("product").value;

const quantity=document.getElementById("quantity").value;

const note=document.getElementById("note").value.trim();

if(name==""||phone==""||city==""||address==""){

alert("المرجو ملء جميع المعلومات");

return;

}

let price="";

if(quantity=="1"){

price="199 DH";

}else{

price="349 DH";

}

const message=`🛍️ طلب جديد

👤 الاسم:
${name}

📞 الهاتف:
${phone}

🏙️ المدينة:
${city}

📍 العنوان:
${address}

📦 المنتج:
${product}

🛒 الكمية:
${quantity}

💰 الثمن:
${price}

📝 ملاحظة:
${note}`;

const url=`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

window.open(url,"_blank");

}