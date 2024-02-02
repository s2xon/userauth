# 📧 Email and Password Handler 🛡️

# Step 1: Clone the Repository: ssh
git clone git@github.com:s2xon/userauth.git
cd email-password-handler

# Step 2: 🌐 PlanetScale Database Setup
# Create a PlanetScale account if you don't have one.
# Set up a database named "data" on PlanetScale.

# Step 3: 🛠️ Obtain PlanetScale .env
 Obtain the necessary environment variables/.env from your PlanetScale account for connecting to the "data" database.

# Step 4: 🔄 Update Dependencies
```go
go mod tidy
```
# Step 5: 🚀 Run the Server
```go
go run server/main.go
```

# Step 6: 📬 Making a POST Request
 Navigate to the project directory in your terminal.
 Make a POST request to the root ("/") of the server with a JSON body containing an "Email" and "Password." 
 You can use the following example code within a JavaScript file (e.g., `main.js`):
```js
 document.querySelector("button").addEventListener("click", (e) => {
     e.preventDefault();
     fetch(url, {
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

# Step 7: 📖 Learning More
 If you want to delve deeper into the technologies used in this project, explore the following resources:
 - The Go Programming Language: https://go.dev/
 - net/http package documentation: https://pkg.go.dev/net/http
 - encoding/json package documentation: https://pkg.go.dev/encoding/json

# Happy coding! 👩‍💻👨‍💻
