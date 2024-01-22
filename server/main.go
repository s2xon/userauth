package main

import (
	"encoding/json"
	"log"
	"net/http"
	// "root/server/api"
)

const port = "localhost:3000"

type Data struct {
    Email     string    `json:"Email"`
	Password  string `json:"Password"`
}


func main() {

	

    http.HandleFunc("/", func (w http.ResponseWriter, r *http.Request) {
        if r.Method == http.MethodPost {
            data := &Data{}
            decoder := json.NewDecoder(r.Body).Decode(data)
            if decoder != nil {
                panic(decoder)
            }
            log.Println("Got Post:", data.Email)
            log.Println("Got Post:", data.Password)
        } 
            http.ServeFile(w, r, "./src/public/index.html")
    })
	
    http.ListenAndServe(port, nil)
}

