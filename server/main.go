package main

import (
	"encoding/json"
	// "fmt"
	"log"
	"net/http"
	"path"
	"os"
	"root/server/api"
	"github.com/joho/godotenv"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)



const port = "localhost:3000"


type Data struct {
	ID        int       `gorm:"column:ID;primaryKey;autoIncrement"`
    Email     string    `gorm:"column:email"`
    Password  string   `gorm:"column:password"`
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
				log.Println("Got Post:", data.Email)
				log.Println("Got Post:", data.Password)
		
				hashedEmail, err := en.HashPassword(data.Email)
				if err != nil {
					log.Fatal(err)
				}
		
				hashedPass, err := en.HashPassword(data.Password)
				if err != nil {
					log.Fatal(err)
				}
		
				db.Save(&Data{Email: hashedEmail, Password: hashedPass})
				}
			})
				
	log.Println("Starting @ http://"+port)
	log.Fatal(http.ListenAndServe(port, nil))
}


// func Handler

/*
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

	http.HandleFunc("/", func (w http.ResponseWriter, r *http.Request) {
	if r.Method == http.MethodPost {
		data := &Data{}
		decoder := json.NewDecoder(r.Body).Decode(data)
		if decoder != nil {
			panic(decoder)
		}
		log.Println("Got Post:", data.Email)
		log.Println("Got Post:", data.Password)

		hashedEmail, err := en.HashPassword(data.Email)
		if err != nil {
			log.Fatal(err)
		}

		hashedPass, err := en.HashPassword(data.Password)
		if err != nil {
			log.Fatal(err)
		}

		db.Save(&Data{Email: hashedEmail, Password: hashedPass})
		}
	})
	http.Handle("/", http.FileServer(http.Dir("src/public/")))
	log.Println("Running on "+ "http://"+port)		
	log.Fatal(http.ListenAndServe(port, nil))
}
*/		




