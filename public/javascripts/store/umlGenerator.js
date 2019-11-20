import React from 'react'
import axios from 'axios'
import { toJS, observable, action, computed, autorun, runInAction, extendObservable } from 'mobx'
import uuidv1 from 'uuid/v1'
import * as R from 'ramda'

class umlGenerator {
  componentSetting = {
    rectangle: {
      width: '0px',
      height: '0px'
    }
  }

  @observable svgPanel = []

  @observable action = null
  @observable originOffsetX = 0
  @observable originOffsetY = 0
  @observable dragStartX = 0
  @observable dragStartY = 0
  @observable dragEndX = 0
  @observable dragEndY = 0

  constructor(rootStore){
    autorun(() => {
      // this.rootStore = 'rootStore'
    })
  }

  @action
  useAction(action) {
    this.action = action
  } 

  @action
  setDragStartAxis(x, y, originOffsetX, originOffsetY) {
    this.dragStartX = x
    this.dragStartY = y
    this.originOffsetX = originOffsetX
    this.originOffsetY = originOffsetY
  }

  @action
  setDragEndAxis(x, y) {
    this.dragEndX = x
    this.dragEndY = y
  }

  @action
  doAction() {
    const hashID = uuidv1()
    this.svgPanel.push(<rect key={hashID} id={hashID} width='50px' height='50px' x={this.dragEndX - this.dragStartX + this.originOffsetX - 150} y={this.dragEndY - this.dragStartY + this.originOffsetY - 66} />)
  }

  @computed get
  generatePanel() {
    return this.svgPanel 
  }
}

export default umlGenerator
