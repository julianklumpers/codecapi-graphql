import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { routes } from './routes/routes'

const App = () => {
  return (
    <React.Suspense fallback="Loading...">
      <Router>
        <Switch>
          {routes.app.map((route) => (
            <Route key={route.path} path={route.path} exact={route.exact}>
              <route.component />
            </Route>
          ))}
          {/* always redirect to /users if no path is matching */}
          <Route path="/">
            <Redirect to="/users" />
          </Route>
        </Switch>
      </Router>
    </React.Suspense>
  )
}

export default App
