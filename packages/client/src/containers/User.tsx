import React from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import { useParams } from 'react-router'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import Table from '../components/Table'
import BreadCrumb from './../components/BreadCrumb'
import { Repo } from '@generated/graphql-types'

const GET_USER_REPOS = gql`
  query getUserRepos($username: String!) {
    getUserRepos(username: $username) {
      id
      name
      stargazers_count
      html_url
      fork
      owner {
        avatar_url
      }
    }
  }
`

const User: React.SFC = () => {
  const { username } = useParams()
  const { loading, data, error } = useQuery(GET_USER_REPOS, { variables: { username }, skip: !username })

  if (loading) return <div>Loading...</div>
  if (error) return <div>{error.graphQLErrors[0].message}</div>
  if (!data) return <div>No user found</div>

  return (
    <>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <BreadCrumb />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Table tableHeads={['Name', 'URL', 'Stars', 'Forked']} data={data} loading={loading} error={error}>
            {({ getUserRepos: userRepos }: { getUserRepos: Repo[] }) =>
              userRepos.map((repo) => (
                <TableRow key={repo.id}>
                  <TableCell>{repo.name}</TableCell>
                  <TableCell>
                    <a href={repo.html_url} target="_NEW">
                      Go to repo
                    </a>
                  </TableCell>
                  <TableCell>{repo.stargazers_count}</TableCell>
                  <TableCell>{repo.fork ? 'Forked' : 'Owner'}</TableCell>
                </TableRow>
              ))
            }
          </Table>
        </Grid>
      </Container>
    </>
  )
}

export default User
