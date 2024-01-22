package api

import (
	"io"
	"log"
	"net/http"
)

func Api() {
	response, err := http.Get("http://localhost:3000")
	if err != nil {
		log.Println(err)
		return
	}

	body, err := io.ReadAll(response.Body)
	if err != nil {
		log.Println(err)
	}

	sb := string(body)
	log.Println(sb)
}
	
