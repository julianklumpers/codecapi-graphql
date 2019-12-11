import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest'
import { Injectable, ProviderScope } from '@graphql-modules/di'
import { env } from './../../../../config/config'
import { User } from '../../../../generated/graphql'
import GitHubError from '../../errors/ErrorHandling'

@Injectable({
  scope: ProviderScope.Session,
})
class Users extends RESTDataSource {
  public constructor() {
    super()
    this.baseURL = env.api.github
  }

  public async getUsersByName(username: string): Promise<User[]> {
    try {
      const list = await this.get(`/search/users?q=${username}`)

      return list.items
    } catch (err) {
      throw new GitHubError(err).get('message').handleError()
    }
  }
}

export default Users
