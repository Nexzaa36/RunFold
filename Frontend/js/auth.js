const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", async (e) => {

    e.preventDefault();

    const email = document.getElementById("email").value;

    const password = document.getElementById("password").value;

    try{

        const response = await fetch("https://run-fold-01.vercel.app/api/auth/login",{

            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify({
                email,
                password
            })

        });

        const data = await response.json();

        console.log("Response:", data);

        if (data.success) {

            console.log("Login Success");
            console.log("Redirecting...");

            // alert("Login Successful!");

            localStorage.setItem("token", data.token);
            localStorage.setItem("user", JSON.stringify(data.user));

            window.location.href = "index.html";

        } else {

            console.log("Login Failed");
            console.log(data);

            alert(data.message);
        }

    }catch(err){

        console.log(err);

        alert("Server Error");

    }

});
