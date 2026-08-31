const feedbackForm = document.getElementById("feedbackForm");

feedbackForm.addEventListener("submit", async (e) => {

    e.preventDefault();

    const feedback = {

        name: document.getElementById("name").value,

        email: document.getElementById("email").value,

        brand: document.getElementById("brand").value,

        rating: document.getElementById("rating").value,

        message: document.getElementById("message").value

    };

    try{

        const response = await fetch("https://run-fold-01.vercel.app/api/feedback",{

            method:"POST",

            headers:{

                "Content-Type":"application/json"

            },

            body:JSON.stringify(feedback)

        });

        const data = await response.json();

        if(data.success){

            alert("Thank you for your feedback ❤️");

            feedbackForm.reset();

        }else{

            alert(data.message);

        }

    }catch(error){

        console.log(error);

        alert("Server Error");

    }

});
