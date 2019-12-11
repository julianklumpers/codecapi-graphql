import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest'
import { Injectable, ProviderScope } from '@graphql-modules/di'
import { env } from '../../../../config/config'
import { Repo } from '../../../../generated/graphql'
import GitHubError from '../../errors/ErrorHandling'

@Injectable({
  scope: ProviderScope.Session,
})
class Users extends RESTDataSource {
  public constructor() {
    super()
    this.baseURL = env.api.github
  }

  public async getUserRepos(username: string): Promise<Repo[]> {
    try {
      const userRepos = await this.get(`/users/${username}/repos`)

      return userRepos
    } catch (err) {
      throw new GitHubError(err).get('message').handleError()
    }
  }
}

export default Users
