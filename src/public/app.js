const url = "http://localhost:3000"

const Email = () => {
    return document.getElementById("Email").value;
};

const Password = () => {
    return document.getElementById("Password").value;
};


document.querySelector("button").addEventListener("click", (e) => {
    e.preventDefault();
    fetch(url,{
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: Email,
            password: Password,
        }),
    })
    .then((response) => console.log(response.json()));
});