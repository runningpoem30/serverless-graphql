import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";



const client = new ApolloClient({
  uri: "https://flyby-router-demo.herokuapp.com/",
  cache: new InMemoryCache(),
});



createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
)

// i am so fucking dumb ; i dont know shit about anything , i need to work fucking harder , aise kaam nahi chalega bro , i need to work so much harder 
// my goal is to get super fucking good at backend and frontend ; make so many projects and develop them , i need to do that fucking that



