package main

import (
	"encoding/json"
	"log"
	"net/http"
	"os"
	"root/server/api"

    "gorm.io/driver/mysql"
	"github.com/joho/godotenv"
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

            // Convert hashed password to []byte
           

            db.Save(&Data{Email: hashedEmail, Password: hashedPass})
            


        }
            http.ServeFile(w, r, "./src/public/index.html")
    })
	
    http.ListenAndServe(port, nil)
}


