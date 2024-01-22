# 📧 Email and Password Handler 🛡️

This is a simple Go server that handles POST requests containing JSON data with an email and password. It's a great starting point for learning about handling HTTP requests and parsing JSON in Go!

## 🚀 Getting Started

To run the server, simply navigate to the project directory in your terminal and run:

```bash
go run server/main.go
```

##📬 Making a POST Request##
You can make a POST request to the root ("/") of the server with a JSON body containing an "Email" and "Password". Here's an example using within Main.go:

```js
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
```

The server will log the email and password from the request.

##📖 Learning More##
If you want to learn more about the technologies used in this project, here are a few resources:

<link href='https://go.dev/'>The Go Programming Language</link>
<link href='https://pkg.go.dev/net/http'>The net/http package</link>
<link href='https://pkg.go.dev/encoding/json'>The encoding/json package</link>
Happy coding! 👩‍💻👨‍💻

```
