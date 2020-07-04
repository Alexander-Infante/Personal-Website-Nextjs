---
title: 'Using Redis Asynchronously with Node.js'
date: '2020-07-04'
---


Redis is a fantastic tool, especially when used as a NoSQL caching mechanism. This can be very versatile for numerous applications, frequently reducing latency to just a few milliseconds and reducing the number of requests being sent to a server. 

At Portara, we incorporated Redis to store user IP addresses (passed through the context in GraphQL) and the specific resolvers being triggered by any given request. I'll give an example below assuming the login TypeDefinition is decorated with the Portara custom directive.

**High Level Overview:**

1. User clicks a login button
2. This sends a POST request (GraphQL operates on POST requests)
3. The IP address of the user is passed through the context
4. Portara grabs the IP address and the resolver that is being triggered
5. That value is either stored in Redis or is incremented
6. If the number of requests exceeds the designated limit, an error will be sent to the presentation tier


One technical challenge of using Redis in this fashion that I had to overcome at Portara was dealing with Redis asynchronously. As a typical indicator of troubles with asynchoronous functionality, the performance was unreliable and sparadic for the rate limiting. After expanding upon the testing suite, I realized the trouble was certain functions running before items are set in Redis, thus leading to the functionality working at some tests but failing at other times.

Thankfully, Node.js only has one thread of execution (technically) and the event loop, which I will elaborate on in another post. By understanding how this works under the hood, I attempted to wrap the entire function in Redis in a higher order async function and manage the returning of promises. This did not yield the results I wanted.

Step in **async-redis**, a great npm package that is open sourced and works wonderfully. By using this package as a dependency, I was able to ensure that all of the functions ran and awaited previous functionality, thus ensuring reliable performance and consistently get those green checkmarks for the tests.

Async-Redis is very simple to use, especially for those familiar with Redis with Node.js. By setting your client to the function invokation of asyncRedis.createClient() after requiring in the package, you can write your Redis functions just as you normally would, but now with "await" before them. 