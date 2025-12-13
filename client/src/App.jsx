import { ApolloClient, HttpLink, InMemoryCache, gql } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";
import './App.css'

const client = new ApolloClient({
  link: new HttpLink({ uri: "http://localhost:8000/graphql" }),
  cache: new InMemoryCache(),
});


// const client = ...

client
  .query({
    query: gql`
      query GetTodos {
        getTodos {
          id
          title
          completed
          user {
            name
            email
            phone
        }
       }
      }
    `,
  })
  .then((result) => console.log(result));




function App() {
  

  return (
  <ApolloProvider client={client}></ApolloProvider>
  )
}

export default App
