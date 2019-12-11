import { GraphQLModule } from '@graphql-modules/core'
import * as repos from './repos.graphql'
import * as user from './../User/user.graphql'
import ReposProvider from './repos.provider'
import ReposResolvers from './repos.resolvers'

export const ReposModule = new GraphQLModule({
  providers: [ReposProvider],
  typeDefs: [repos, user],
  resolvers: ReposResolvers,
})
