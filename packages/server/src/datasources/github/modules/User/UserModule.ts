import { GraphQLModule } from '@graphql-modules/core'
import * as user from './user.graphql'
import UserProvider from './user.provider'
import UserResolvers from './user.resolvers'

export const UserModule = new GraphQLModule({
  providers: [UserProvider],
  typeDefs: user,
  resolvers: UserResolvers,
})
