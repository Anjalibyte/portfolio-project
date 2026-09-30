document
    .getElementById("loginForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();


        // Get values

        const email =
            document.getElementById("email").value;

        const password =
            document.getElementById("password").value;

        const role =
            document.getElementById("role").value;

        const message =
            document.getElementById("message");


        // Check role

        if (role === "") {

            message.textContent =
                "Please select your role.";

            message.style.color = "red";

            return;
        }


        // Demo login

        if (email !== "" && password !== "") {

            message.textContent =
                "Login successful!";

            message.style.color = "green";


            // Open different dashboard

            setTimeout(function() {

                if (role === "organizer") {

                    window.location.href =
                        "organizer.html";

                }

                else if (role === "resource-manager") {

                    window.location.href =
                        "resource-manager.html";

                }

                else if (role === "staff-manager") {

                    window.location.href =
                        "staff-manager.html";

                }

                else if (role === "admin") {

                    window.location.href =
                        "admin.html";

                }

            }, 800);

        }

    });