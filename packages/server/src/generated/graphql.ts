import { GraphQLResolveInfo } from 'graphql'
export type Maybe<T> = T | null
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

export type Query = {
  __typename?: 'Query'
  getUsersByName?: Maybe<Array<Maybe<User>>>
  getUserRepos?: Maybe<Array<Maybe<Repo>>>
}

export type QueryGetUsersByNameArgs = {
  username: Scalars['String']
}

export type QueryGetUserReposArgs = {
  username: Scalars['String']
}

export type Repo = {
  __typename?: 'Repo'
  id: Scalars['ID']
  html_url: Scalars['String']
  node_id?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  full_name?: Maybe<Scalars['String']>
  private?: Maybe<Scalars['Boolean']>
  owner?: Maybe<User>
  description?: Maybe<Scalars['String']>
  fork?: Maybe<Scalars['Boolean']>
  url?: Maybe<Scalars['String']>
  forks_url?: Maybe<Scalars['String']>
  keys_url?: Maybe<Scalars['String']>
  collaborators_url?: Maybe<Scalars['String']>
  teams_url?: Maybe<Scalars['String']>
  hooks_url?: Maybe<Scalars['String']>
  issue_events_url?: Maybe<Scalars['String']>
  events_url?: Maybe<Scalars['String']>
  assignees_url?: Maybe<Scalars['String']>
  branches_url?: Maybe<Scalars['String']>
  tags_url?: Maybe<Scalars['String']>
  blobs_url?: Maybe<Scalars['String']>
  git_tags_url?: Maybe<Scalars['String']>
  git_refs_url?: Maybe<Scalars['String']>
  trees_url?: Maybe<Scalars['String']>
  statuses_url?: Maybe<Scalars['String']>
  languages_url?: Maybe<Scalars['String']>
  stargazers_url?: Maybe<Scalars['String']>
  contributors_url?: Maybe<Scalars['String']>
  subscribers_url?: Maybe<Scalars['String']>
  subscription_url?: Maybe<Scalars['String']>
  commits_url?: Maybe<Scalars['String']>
  git_commits_url?: Maybe<Scalars['String']>
  comments_url?: Maybe<Scalars['String']>
  issue_comment_url?: Maybe<Scalars['String']>
  contents_url?: Maybe<Scalars['String']>
  compare_url?: Maybe<Scalars['String']>
  merges_url?: Maybe<Scalars['String']>
  archive_url?: Maybe<Scalars['String']>
  downloads_url?: Maybe<Scalars['String']>
  issues_url?: Maybe<Scalars['String']>
  pulls_url?: Maybe<Scalars['String']>
  milestones_url?: Maybe<Scalars['String']>
  notifications_url?: Maybe<Scalars['String']>
  labels_url?: Maybe<Scalars['String']>
  releases_url?: Maybe<Scalars['String']>
  deployments_url?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['String']>
  pushed_at?: Maybe<Scalars['String']>
  git_url?: Maybe<Scalars['String']>
  ssh_url?: Maybe<Scalars['String']>
  clone_url?: Maybe<Scalars['String']>
  svn_url?: Maybe<Scalars['String']>
  homepage?: Maybe<Scalars['String']>
  size?: Maybe<Scalars['Int']>
  stargazers_count?: Maybe<Scalars['Int']>
  watchers_count?: Maybe<Scalars['Int']>
  language?: Maybe<Scalars['String']>
  has_issues?: Maybe<Scalars['Boolean']>
  has_projects?: Maybe<Scalars['Boolean']>
  has_downloads?: Maybe<Scalars['Boolean']>
  has_wiki?: Maybe<Scalars['Boolean']>
  has_pages?: Maybe<Scalars['Boolean']>
  forks_count?: Maybe<Scalars['Int']>
  mirror_url?: Maybe<Scalars['String']>
  archived?: Maybe<Scalars['Boolean']>
  disabled?: Maybe<Scalars['Boolean']>
  open_issues_count?: Maybe<Scalars['Int']>
  license?: Maybe<Scalars['String']>
  forks?: Maybe<Scalars['Int']>
  open_issues?: Maybe<Scalars['Int']>
  watchers?: Maybe<Scalars['Int']>
  default_branch?: Maybe<Scalars['String']>
}

export type User = {
  __typename?: 'User'
  id: Scalars['ID']
  login?: Maybe<Scalars['String']>
  node_id?: Maybe<Scalars['String']>
  avatar_url?: Maybe<Scalars['String']>
  gravatar_id?: Maybe<Scalars['String']>
  url?: Maybe<Scalars['String']>
  html_url?: Maybe<Scalars['String']>
  followers_url?: Maybe<Scalars['String']>
  following_url?: Maybe<Scalars['String']>
  gists_url?: Maybe<Scalars['String']>
  starred_url?: Maybe<Scalars['String']>
  subscriptions_url?: Maybe<Scalars['String']>
  organizations_url?: Maybe<Scalars['String']>
  repos_url?: Maybe<Scalars['String']>
  events_url?: Maybe<Scalars['String']>
  received_events_url?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
  site_admin?: Maybe<Scalars['Boolean']>
  score?: Maybe<Scalars['Float']>
}

export type ResolverTypeWrapper<T> = Promise<T> | T

export type ResolverFn<TResult, TParent, TContext, TArgs> = (parent: TParent, args: TArgs, context: TContext, info: GraphQLResolveInfo) => Promise<TResult> | TResult

export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>
}

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | StitchingResolver<TResult, TParent, TContext, TArgs>

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (parent: TParent, args: TArgs, context: TContext, info: GraphQLResolveInfo) => TResult | Promise<TResult>

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs>
  resolve?: SubscriptionResolveFn<TResult, TParent, TContext, TArgs>
}

export type SubscriptionResolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionResolverObject<TResult, TParent, TContext, TArgs>)
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (parent: TParent, context: TContext, info: GraphQLResolveInfo) => Maybe<TTypes>

export type NextResolverFn<T> = () => Promise<T>

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>
  String: ResolverTypeWrapper<Scalars['String']>
  User: ResolverTypeWrapper<User>
  ID: ResolverTypeWrapper<Scalars['ID']>
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>
  Float: ResolverTypeWrapper<Scalars['Float']>
  Repo: ResolverTypeWrapper<Repo>
  Int: ResolverTypeWrapper<Scalars['Int']>
}

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {}
  String: Scalars['String']
  User: User
  ID: Scalars['ID']
  Boolean: Scalars['Boolean']
  Float: Scalars['Float']
  Repo: Repo
  Int: Scalars['Int']
}

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getUsersByName?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType, QueryGetUsersByNameArgs>
  getUserRepos?: Resolver<Maybe<Array<Maybe<ResolversTypes['Repo']>>>, ParentType, ContextType, QueryGetUserReposArgs>
}

export type RepoResolvers<ContextType = any, ParentType extends ResolversParentTypes['Repo'] = ResolversParentTypes['Repo']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  html_url?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  node_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  full_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  private?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  owner?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  fork?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  forks_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  keys_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  collaborators_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  teams_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  hooks_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  issue_events_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  events_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  assignees_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  branches_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  tags_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  blobs_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  git_tags_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  git_refs_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  trees_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  statuses_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  languages_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  stargazers_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  contributors_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  subscribers_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  subscription_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  commits_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  git_commits_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  comments_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  issue_comment_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  contents_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  compare_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  merges_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  archive_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  downloads_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  issues_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  pulls_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  milestones_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  notifications_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  labels_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  releases_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  deployments_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  created_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  updated_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  pushed_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  git_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  ssh_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  clone_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  svn_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  homepage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  size?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  stargazers_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  watchers_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  language?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  has_issues?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  has_projects?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  has_downloads?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  has_wiki?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  has_pages?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  forks_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  mirror_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  archived?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  disabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  open_issues_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  license?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  forks?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  open_issues?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  watchers?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  default_branch?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
}

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  login?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  node_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  avatar_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  gravatar_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  html_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  followers_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  following_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  gists_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  starred_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  subscriptions_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  organizations_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  repos_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  events_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  received_events_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  site_admin?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  score?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
}

export type Resolvers<ContextType = any> = {
  Query?: QueryResolvers<ContextType>
  Repo?: RepoResolvers<ContextType>
  User?: UserResolvers<ContextType>
}

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>
