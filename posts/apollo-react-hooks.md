---
title: 'GraphQL with React Hooks (with Apollo Client)'
date: '2020-06-13'
---
<style>
pre {
  font-size: 14px;
}
</style>

React Hooks are very useful for developers using functional components, I'll later do a write up specifically about functional versus class components in React (though the Docs are very useful for this explanation as well). When using Apollo Client, it's very nice that the Apollo team actually created some specific hooks that can be used when implementing GraphQL. 

Any developer can simply install @apollo/react-hooks as a dependency and get started rather quickly. There are **five** built in hooks that come with Apollo Client:

- useQuery
- useLazyQuery
- useMutation
- useSubscription
- useApolloClient

The logic should familiar for those used to React Hooks in general, the only minor differences are the GraphQL syntax and using the specific, built-in hooks that Apollo Client provides.

The typical syntax for a query is as follows:

1. Above the function definition, create a variable with the name of your action and assign it the value of the "gql" query, mutation, or subscription


```
const GET_PROFILE_PIC = gql`
  query getProfilePic($username: String!) {
    profilePic(username: $username) {
      pic_URL
    }
  }
`;
```


2. In the function but above the return statement, utilize the **useQuery** hook and pass in the GraphQL query and the variables being passed in

```
const { loading, error, data } = useQuery(
  GET_PROFILE_PIC, 
  {
    variables: { username: 'Alex-Infante' },
  });
```

3. The desired information will come back on the data object (as you may notice in Step 2, we are destructuring the variable 'data' and assigning the value of the useQuery hook). You can use this data to display.

```
return (
  <div>
    <img src={data.profilePic.pic_URL} />
  </div>
);
```

That is all that is needed from the presentation tier/ frontend to use Apollo Client with React Hooks! This allows your frontend to be very flexible and incorporate Apollo Client to utilize all of the benefits of GraphQL (plus more!). 