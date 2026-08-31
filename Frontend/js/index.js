const userArea = document.getElementById("userArea");

const user = JSON.parse(localStorage.getItem("user"));

if(user){

    userArea.innerHTML = `
        <button id="logoutBtn">Logout</button>
    `;

    document.getElementById("logoutBtn").onclick = () =>{

        localStorage.removeItem("token");
        localStorage.removeItem("user");

        window.location.reload();

    };

}else{

    userArea.innerHTML = `
        <a href="login.html">
            <i class="fa-solid fa-user"></i>
        </a>
    `;

}


