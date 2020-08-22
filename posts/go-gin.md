---
title: 'Programming with Gin (and Go)'
date: '2020-08-21'
---

I'm a big fan of Gin. By Gin, I am referring to the drink, there's this great spot called Bibo Ergo Sum next to me that would serve this amazing Gin based drink with a lot of other ingredients in it. I am looking forward to returning when it's safe.

I also really like Gin, the micro-framework for writing REST APIs in Go. I would weigh both equally (as you can imagine, I really like building out APIs). There's something very satisfying about using Postman and getting the request response you want and writing in a way that can easily scale, which Go is incredible at. There is this great article [about a company drastically reducing their servers provisioned just by switiching to Go](https://blog.iron.io/how-we-went-from-30-servers-to-2-go/).

Most of my experience has been with Node.js (up to this point), so I am familiar with Express and creating a REST API with object oriented middleware applied to the data as it's passed from the HTTP request, to the database (or however I choose to use the data), and the response to the client side. Node.js' event loop and non-blocking I/O is great, but it is admittedly less clean than Go's built in concurrency model (known as GoRoutines). Keep in mind that [concurrency is not parallelism](https://blog.golang.org/waza-talk). 

The basic framework for how the Gin micro-framework works with Go is as follows: 

| Request -> | Route Parser & Handler -> | Middleware -> | Response |
| ---------- | :-----------------------: | :-----------: | -------: |

Now for some basic Hello World Example (keep in mind- this is not for best practices, just a simple example to get up and running):

1. The basic setup: 
```
import (
  "fmt"
  "github.com/gin-gonic/gin"
)

func main () {
  r := gin.Default()
  r.Run()
  fmt.Println("Server Listening...")
}
```

2. Adding Routing (simple GET Request)
```
func main () {
  r := gin.Default()

  r.GET("/", GetMiddleware)

  r.Run()
  fmt.Println("Server Listening...")
}
```

3. Defining Your Middleware (simplge GET Request)
```
func GetMiddleware (c *gin.Context) {
  c.JSON(200, gin.J{
    "message": "Hello from your Go Gin API!"
  })
}
```

4. Putting It All Together
```
import (
  "fmt"
  "github.com/gin-gonic/gin"
)

func GetMiddleware (c *gin.Context) {
  c.JSON(200, gin.J{
    "message": "Hello from your Go Gin API!"
  })
}

func main () {
  r := gin.Default()
  r.GET("/", GetMiddleware)
  r.Run()
  fmt.Println("Server Listening...")
}
```

This is a pretty basic example just to get people up and running with Go and Gin. There are [great docs](https://godoc.org/github.com/gin-gonic/gin) that can teach a lot more in depth about what is going on. I do plan on writing quite a bit more about Go and the benefits it brings. 