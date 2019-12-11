import { GraphQLModule } from '@graphql-modules/core'
import { UserModule } from './modules/User/UserModule'
import { ReposModule } from './modules/Repos/ReposModule'

export default new GraphQLModule({
  imports: [UserModule, ReposModule],
})
