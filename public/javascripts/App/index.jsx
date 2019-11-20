import React from 'react'
import { renderRoutes } from 'react-router-config'
import { Provider, useStaticRendering } from 'mobx-react'
import * as mobx from 'mobx'
import routes from "./routes"
import { Store } from '../store/index'

mobx.configure({
  enforceActions: "observed",
})

const App = (props) => {
  const rootStore = props.rootStore || new Store()

  return (
    <Provider rootStore={rootStore}>
      {renderRoutes(routes)}
    </Provider>
  )
}

export default App
