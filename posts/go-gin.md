---
title: 'Programming with Gin (and Go)'
date: '2020-08-21'
---

I'm a big fan of Gin. By Gin, I am referring to the drink, there's this great spot called Bibo Ergo Sum next to me that would serve this amazing Gin based drink with a lot of other ingredients in it. I am looking forward to returning when it's safe.

I also really like Gin, the micro-framework for writing REST APIs in Go. I would weigh both equally (as you can imagine, I really like building out APIs). There's something very satisfying about using Postman and getting the request response you want and writing in a way that can easily scale, which Go is incredible at. There is this great article [about a company drastically reducing their servers provisioned just by switiching to Go](https://blog.iron.io/how-we-went-from-30-servers-to-2-go/).

Most of my experience has been with Node.js (up to this point), so I am familiar with Express and creating a REST API with object oriented middleware applied to the data as it's passed from the HTTP request, to the database (or however I choose to use the data), and the response to the client side. Node.js' event loop and non-blocking I/O is great, but it is admittedly less clean than Go's built in concurrency model (known as GoRoutines). Keep in mind that [concurrency is not parallelism](https://blog.golang.org/waza-talk). 