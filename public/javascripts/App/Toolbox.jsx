import React, { Component, useState, useEffect, useReducer } from 'react'
import { toJS } from 'mobx'
import { observer, inject } from 'mobx-react'

export const Toolbox = inject("rootStore")(observer((props) => {
  return (
    <div id='toolbox'>
      <div className='rectangle tool-icon'
        draggable
        onDragStart = {(e) => props.rootStore.umlGenerator.setDragStartAxis(e.screenX, e.screenY, e.target.offsetLeft, e.target.offsetTop)}
        // onDrag   = {(e) => console.log('ing', e, e.pageX, e.screenX, e.movementX, e.clientX)}
        onDragEnd   = {(e) => {
          props.rootStore.umlGenerator.setDragEndAxis(e.screenX, e.screenY)
          props.rootStore.umlGenerator.doAction()
        }}
      ></div>
      <div>{props.rootStore.umlGenerator.generate}</div>
    </div>
  )
}))
