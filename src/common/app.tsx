import { BaseProvider, LightTheme } from 'baseui'
import React from 'react'
import { Client as Styletron } from 'styletron-engine-atomic'
import { Provider as StyletronProvider } from 'styletron-react'
import { Router } from './router'

const engine = new Styletron()

export const App = () => {
  return (
    <div className="App">
      <StyletronProvider value={engine}>
        <BaseProvider theme={LightTheme}>
          <Router />
        </BaseProvider>
      </StyletronProvider>
    </div>
  )
}

export default App
