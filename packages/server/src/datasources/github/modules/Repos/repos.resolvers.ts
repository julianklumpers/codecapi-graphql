import { ModuleContext } from '@graphql-modules/core'
import { IResolvers } from '../../../../generated/graphql'
import UserProvider from './repos.provider'

export default {
  Query: {
    getUserRepos: async (_, { username }, { injector }: ModuleContext) => await injector.get(UserProvider).getUserRepos(username),
  },
} as IResolvers
