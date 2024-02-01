import { James } from "./routers/routes.js";

James()



const url = "http://localhost:3000"

const Email = () => {
    let value = document.getElementById("SU-Email").value;
    console.log(value)
    return value
};

const Password = () => {
    let value = document.getElementById("SU-Password").value;
    console.log(value)
    return value
};

const SUButton = document.getElementById("SU-Button")
const SIButton = document.getElementById("SI-Button")

SUButton.addEventListener("click", (e) => {
    e.preventDefault();
    fetch(url,{
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: Email(),
            password: Password(),
        }),
    })
    .then((res) => console.log(res.json))
});


