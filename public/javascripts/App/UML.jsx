import React, { useState, useEffect, useReducer } from 'react'
import { toJS } from 'mobx'
import { observer, inject } from 'mobx-react'
import { Toolbox } from './Toolbox'
import Theme from './Theme'

// {props.rootStore.umlGenerator.generateRectangleComponent()}

export const UML = inject("rootStore")(observer((props) => {
  return (
    <Theme>
      <div id='uml'>
        <Toolbox />
        <div id='playground'>
          <svg
            id="mysvg"
            xmlns="http://www.w3.org/2000/svg"
            width='100%'
            height='100vh'
            preserveAspectRatio="xMidYMid meet"
          >

          {props.rootStore.umlGenerator.generatePanel}
          </svg>
        </div>
      </div>
    </Theme>
  )
}))
