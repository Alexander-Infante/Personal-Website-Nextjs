---
title: 'Express.js with GraphQL: Apollo-Server-Express'
date: '2020-07-10'
---
<style>
pre {
  font-size: 14px;
}
</style>

Node.js is a useful, versatile, and performant backend language that is great at managing server side logic. Express helps keep Node.js code less verbose, allows for customized middleware for various solutions, and easily connects to SQL and NoSQL databases. 

Although Express is typically used when developing RESTful APIs because of its ability to handle routing with ease, it still is possible to take advantage of creating custom middleware when pairing with GraphQL. Enter Apollo-Server-Express, a flexible solution to take advantage of both GraphQL and Express.

While handling the user authentication for Portara's integrated developer dashboard, I implemented Apollo-Server-Express to take advantage of using GraphQL and Express. The server was originally created with GraphQL to take advantage of GraphQL subscriptions to create a constant stream of data between Portara's servers and the users' servers. I brought in Express to create a custom middleware to handle authenticating users and writing new users into the NoSQL database.

Incorporating both technologies is surprisngly easy with Apollo-Server-Express:

1. Install apollo-server-express to your product, which should update your package.json.

2. Require in apollo-server-express to your server logic file

```
const { ApolloServer, gql } = require('apollo-server-express')
```

3. Invoke the built in 'applyMiddleware' function and pass in the app.

```
server.applyMiddleware({ app })
```

The rest of the setup is typical to the normal Apollo Server setup, these are the only unique pieces required to use Express. You can even pair GraphQL TypeDefs with standard RESTful endpoints with this setup, allowing it to be extremely versatile and fit just about any needs that can come up.