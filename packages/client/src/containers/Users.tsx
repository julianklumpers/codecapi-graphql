import React from 'react'
import { gql } from 'apollo-boost'
import Container from '@material-ui/core/Container'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import Grid from '@material-ui/core/Grid'
import SearchTitle from './../components/SearchTitle'
import Input from './../components/Input'
import Table from '../components/Table'
import { useQuery } from '@apollo/react-hooks'
import { Link } from 'react-router-dom'
import { User } from '@generated/graphql-types'
import BreadCrumb from '../components/BreadCrumb'

const GET_USERS = gql`
  query getUsersByName($username: String!) {
    getUsersByName(username: $username) {
      id
      login
      url
      avatar_url
      score
    }
  }
`

const Users: React.SFC = () => {
  const [username, setUSername] = React.useState<string>(window.sessionStorage.getItem('@username') || '')
  const { loading, error, data, refetch, variables } = useQuery(GET_USERS, { variables: { username }, skip: !username })

  React.useEffect(() => {
    if (username) {
      refetch({
        ...variables,
        username,
      })
    }
  }, [username])

  function handleSearch(value: string): void {
    // set to state for observer to trigger useEffect
    setUSername(value)
    window.sessionStorage.setItem('@username', value)
  }

  return (
    <Container fixed>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <BreadCrumb />
          <SearchTitle text="Type a username and hit enter" />
          <Input onEnter={handleSearch} defaultValue={username} />
        </Grid>
        <Grid item xs={12}>
          <Table tableHeads={['', 'Username', 'Score']} data={data} error={error} loading={loading}>
            {({ getUsersByName: users }: { getUsersByName: User[] }) =>
              users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    {user.avatar_url && <img style={{ width: 64, borderRadius: '50%' }} src={user.avatar_url} />}
                  </TableCell>
                  <TableCell>
                    <Link to={`/users/${user.login}`}>{user.login}</Link>
                  </TableCell>
                  <TableCell>{user.score}</TableCell>
                </TableRow>
              ))
            }
          </Table>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Users
