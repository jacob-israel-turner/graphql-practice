import {
  GraphQLObjectType,
  GraphQLString,
	GraphQLInt
} from 'graphql'

import { Person } from '../index'

export default new GraphQLObjectType({
	name: 'Person',
	fields: {
		name: {
			type: GraphQLString,
			resolve: person => person.name
		},
		age: {
			type: GraphQLInt,
			resolve: person => person.age
		},
		hair: {
			type: GraphQLString,
			resolve: person => person.hair
		}
	}
})
