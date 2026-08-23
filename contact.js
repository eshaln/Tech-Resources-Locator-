const form = document.getElementById("contact-form");
const message = document.getElementById("form-message");

form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const formData = new FormData(form);

    try {
        const response = await fetch(form.action, {
            method: "POST",
            body: formData,
            headers: {
                "Accept": "application/json"
            }
        });

        if (response.ok) {
            message.textContent = "Form submitted successfully!";
            message.style.color = "green";

            form.reset();
        } else {
            message.textContent = "Something went wrong. Please try again.";
            message.style.color = "red";
        }

    } catch (error) {
        message.textContent = "Something went wrong. Please try again.";
        message.style.color = "red";
    }
});