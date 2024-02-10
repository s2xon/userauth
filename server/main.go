package main

import (
	"encoding/json"
	// "fmt"
	"log"
	"net/http"
	"os"
	"path"
	"root/server/api"

	"github.com/joho/godotenv"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

const port = "localhost:3000"

type Data struct {
	ID       int    `gorm:"column:ID;primaryKey;autoIncrement"`
	Email    string `gorm:"column:email"`
	Password string `gorm:"column:password"`
	User     bool   `gorm:"-"`
	SignUp   bool   `gorm:"-"`
}

type CheckPass struct {
	Check bool `json:"checkUser"`
}

type NotUser struct {
	User bool `json:"NotUser"`
}

func res(w http.ResponseWriter, r *http.Request, check bool) {
	w.WriteHeader(http.StatusOK)
	w.Header().Set("Content-Type", "application/json")

	resp := CheckPass{
		Check: check,
	}
	log.Println(resp)
	encoder := json.NewEncoder(w).Encode(resp)
	if encoder != nil {
		log.Panic(w, encoder.Error(), 500)
		return
	}

}

func main() {

	if err := godotenv.Load(); err != nil {
		log.Fatalf("failed to load environment variables: %v", err)
	}

	// Connect to PlanetScale database using DSN environment variable.
	db, err := gorm.Open(mysql.Open(os.Getenv("DSN")), &gorm.Config{
		DisableForeignKeyConstraintWhenMigrating: true,
	})
	if err != nil {
		log.Fatalf("failed to connect to PlanetScale: %v", err)
	}

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		root := "src/public"
		switch r.Method {
		case "GET":
			if r.URL.Path == "" || r.URL.Path == "/" {
				http.ServeFile(w, r, path.Join(root, "index.html"))
			} else {
				http.ServeFile(w, r, path.Join(root, r.URL.Path))
			}
		case "POST":
			data := &Data{}
			decoder := json.NewDecoder(r.Body).Decode(data)
			if decoder != nil {
				panic(decoder)
			}
			hashedPass, err := en.HashPassword(data.Password)
			if err != nil {
				log.Fatal(err)
			}
				var dataFound Data
				if !data.SignUp {
				result := db.Where("email =?", data.Email).First(&dataFound)
				if result.Error != nil {
					log.Println(result.Error)
					// Make HTTP Response no result found
					w.WriteHeader(http.StatusOK)
					w.Header().Set("Content-Type", "application/json")
					notuser := NotUser{
						User: true,
					}
					encoder := json.NewEncoder(w).Encode(notuser)
					if encoder != nil {
						log.Panic(w, encoder.Error(), 500)
						return
					}
				} else {
					if data.Email == dataFound.Email {
						log.Println("Connected")
						CorrectPass := en.CheckPasswordHash(data.Password, dataFound.Password)
						if CorrectPass {
							log.Println("Authenticated")
							res(w, r, true)
						} else {
							log.Println("Wrong Password")
							res(w, r, false)
						}
					}
				}
			}
				if data.SignUp && data.Email != dataFound.Email {
					db.Save(&Data{Email: data.Email, Password: hashedPass})
				}
		}
	})

	log.Println("Starting @ http://" + port)
	log.Fatal(http.ListenAndServe(port, nil))
}
