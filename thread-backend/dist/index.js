import express from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@as-integrations/express4';
import cors from 'cors';
const app = express();
const PORT = 8000;
const server = new ApolloServer({
    typeDefs: '',
    resolvers: {},
});
await server.start();
app.use('/graphql', cors(), express.json(), expressMiddleware(server));
app.get('/', (req, res) => {
    res.json({ message: "the server is up and running" });
});
app.listen(PORT, () => console.log(`server start at port ${PORT}`));
//# sourceMappingURL=index.js.map