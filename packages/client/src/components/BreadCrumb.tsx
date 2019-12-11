import * as React from 'react'
import { RouteComponentProps } from 'react-router'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import { withRouter, Link } from 'react-router-dom'
import { routes } from './../routes/routes'

const BreadCrumb = ({ match, history }: RouteComponentProps): JSX.Element => {
  const { params }: any = match
  const activeRoutes = routes.app.filter((route) => match.path.includes(route.path))

  const breadcrumbItems = activeRoutes.map((route, index, arr) => {
    // replace :placeholder for real id
    const path = Object.keys(params).reduce((prev, key) => prev.replace(`:${key}`, params[key]), route.path)

    const textKey = route.title!.replace(/{{|}}/g, '')

    return {
      ...route,
      text: params[textKey] || route.title,
      onClick: arr.length === index + 1 ? null : path,
    }
  })

  console.log(breadcrumbItems)

  return (
    <Breadcrumbs>
      {breadcrumbItems.map((item) =>
        item.onClick ? (
          <Link key={item.path} to={item.path}>
            {item.text}
          </Link>
        ) : (
          <span key={item.path}>{item.text}</span>
        ),
      )}
    </Breadcrumbs>
  )
}

export default withRouter(BreadCrumb)
