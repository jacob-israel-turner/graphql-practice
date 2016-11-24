import {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString
} from 'graphql'

import { Person } from '../'

export default new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		person: {
			type: Person,
			resolve: function (a, b) {
				console.log('RESOLVING IN QUERY', a, b)
				return {
					name: 'Jacob',
					age: 23,
					hair: 'Brown'
				}
			}
		}
	}
})
