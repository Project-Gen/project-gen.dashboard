import { BaseProvider, LightTheme } from 'baseui'
import React from 'react'
import { Client as Styletron } from 'styletron-engine-atomic'
import { Provider as StyletronProvider } from 'styletron-react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import RegisrationPage from './RegistrationPage'
import LoginPage from './LoginPage'
import ProjectsPage from './ProjectsPage'
import HomePage from './HomePage'

const engine = new Styletron()

const App = () => {
  return (
    <div className="App">
      <StyletronProvider value={engine}>
        <BaseProvider theme={LightTheme}>
          <Router>
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route path="/register">
                <RegisrationPage />
              </Route>
              <Route path="/login">
                <LoginPage />
              </Route>
              <Route path="/projects">
                <ProjectsPage />
              </Route>
            </Switch>
          </Router>
        </BaseProvider>
      </StyletronProvider>
    </div>
  )
}

export default App
