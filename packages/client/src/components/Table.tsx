import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Table as MTable } from '@material-ui/core'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import TableHead from '@material-ui/core/TableHead'
import { ApolloQueryResult } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'

interface Props {
  data: ApolloQueryResult<any>
  loading: boolean
  error: any
  tableHeads: string[]
  children(data: any): React.ReactNode
}

const useStyles = makeStyles((theme) => ({
  table: {
    width: '100%',
  },
}))

const Table: React.SFC<Props> = ({ data, loading, error, tableHeads, children }) => {
  const classes = useStyles()

  if (loading) return <div>Loading....</div>
  // always show the first message
  if (error) return <div>{error.graphQLErrors[0].message}</div>
  if (!data) return <div>Nothing to display</div>

  return (
    <MTable className={classes.table}>
      <TableHead>
        <TableRow>
          {tableHeads.map((head, i) => (
            <TableCell key={`${head}-${i}`}>{head}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>{children(data)}</TableBody>
    </MTable>
  )
}

export default Table
