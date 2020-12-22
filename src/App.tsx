import './App.css';

import {ApolloProvider, ApolloClient, InMemoryCache,gql, createHttpLink} from '@apollo/client';



const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache()
});


client
  .query({
    query: gql`
      query  {
     universities{
       Name
     }
        }
    `
  })
  .then(result => console.log(result));

function App() {

return(
  <ApolloProvider client={client}>
  <div>
 
    HELLO WORLD
   
  </div>
  </ApolloProvider>
)
}

export default App;
