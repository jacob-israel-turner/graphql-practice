import {
  GraphQLObjectType,
} from 'graphql'

import { Person } from '../index'

console.log(Person)

export default new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		person: {
			type: Person.type,
			resolve: Person.resolve
		}
	}
})
