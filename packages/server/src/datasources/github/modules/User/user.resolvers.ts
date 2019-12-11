import { ModuleContext } from '@graphql-modules/core'
import { IResolvers } from '../../../../generated/graphql'
import UserProvider from './user.provider'

export default {
  Query: {
    getUsersByName: async (_, { username }, { injector }: ModuleContext) => await injector.get(UserProvider).getUsersByName(username),
  },
} as IResolvers
