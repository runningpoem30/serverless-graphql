import { ApolloClient, HttpLink, InMemoryCache, gql } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";
import { useQuery } from "@apollo/client/react";
import './App.css'



const GET_TODOS = gql`
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
`;



function App() {
  
 const { loading, error, data } = useQuery(GET_TODOS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error {error.message} 😢</p>;

  return (
    <div>
      {data.getTodos.map(todo => (
        <div key={todo.id}>
          <h3>{todo.title}</h3>
          <p>{todo.user.name}</p>
        </div>
      ))}
    </div>
  );
 
}

export default App
