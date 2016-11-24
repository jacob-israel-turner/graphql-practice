import express from 'express'
import graphqlHTTP from 'express-graphql'
import cors from 'cors'

import RootQuery from './models/RootQuery/RootQuery.graphql'

import { GraphQLSchema } from 'graphql'

const app = express()
const port = 9001

app.use(cors())

app.use('/q', graphqlHTTP({
  schema: new GraphQLSchema({
		query: RootQuery,
		graphiql: true
	}),
}))
 
app.listen(port)
