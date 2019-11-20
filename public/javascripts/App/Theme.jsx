import React from "react"
import Helmet from 'react-helmet'
import { observer, inject } from 'mobx-react'
import * as R from 'ramda'

const componentUrlMappingConfig = {
  summarypage: '/',
  configpage: '/config',
  readmepage: '/readme',
  loginpage: '/login'
}

const publicUrlList = ['/', '/login']

@inject('rootStore')
@observer
class Theme extends React.Component {
  isShownPage(pageName) {
    const pathName = location.pathname
    const pageNameMappingPath = componentUrlMappingConfig[pageName]
    return (R.equals(pathName, pageNameMappingPath));
  }

  isPublicUrl() {
    const pathName = location.pathname
    return R.indexOf(pathName, publicUrlList) > -1
  }

  render() {
    const { children } = this.props
    return (
      <React.Fragment>
        <Helmet>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <title>admin-tokenix-pricer</title>
        </Helmet>
        <div className='tabs is-boxed'>
          <ul>
            <li className={this.isShownPage('summarypage') ? 'is-active' : ''}>
              <a href="/" >about me</a>
            </li>
            <li className={this.isShownPage('summarypage') ? 'is-active' : ''}>
              <a href="/uml" >UML playground</a>
            </li>
          </ul>
        </div>
        { children }
        <footer></footer>
      </React.Fragment>
    )
  }
}

Theme.displayName = "Theme"

export default Theme
