// Bethel Music Academy

const form = document.getElementById("registrationForm");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.querySelector('input[name="name"]').value;
        const mobile = document.querySelector('input[name="mobile"]').value;
        const email = document.querySelector('input[name="email"]').value;
        const course = document.querySelector('select[name="course"]').value;
        const mode = document.querySelector('select[name="mode"]').value;

        const message =
`🎵 Bethel Music Academy Registration

👤 Name: ${name}
📱 Mobile: ${mobile}
📧 Email: ${email}
🎹 Course: ${course}
🏫 Class Mode: ${mode}`;

        const url =
"https://wa.me/917200008347?text=" + encodeURIComponent(message);

        window.location.href = url;

        form.reset();
    });
}

// Join Button
const joinBtn = document.querySelector(".join-btn");

if (joinBtn) {
    joinBtn.addEventListener("click", function () {
        document.getElementById("registration").scrollIntoView({
            behavior: "smooth"
        });
    });
}