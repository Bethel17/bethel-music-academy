// ==========================================
// Bethel Music Academy
// ==========================================

const form = document.getElementById("registrationForm");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

const name=form.name.value.trim();
const age=form.age.value.trim();
const mobile=form.mobile.value.trim();
const course=form.course.value;
const mode=form.mode.value;

if(name===""||age===""||mobile===""||course===""||mode===""){

alert("Please fill all the details.");

return;

}

const message=
`🎵 Bethel Music Academy

👤 Student Name : ${name}

🎂 Age : ${age}

📱 Mobile : ${mobile}

🎹 Course : ${course}

🏫 Class Mode : ${mode}`;

const phone="917200008347";

window.open(
`https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
"_blank"
);

alert("✅ Registration Successful!");

form.reset();

});

}

// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href"))
.scrollIntoView({

behavior:"smooth"

});

});

});