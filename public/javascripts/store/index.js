import { toJS } from 'mobx'
import TimeScroll from './TimeScroll'
import umlGenerator from './umlGenerator'

class Store {
  constructor() {
    this.timeScroll = new TimeScroll(this)
    this.umlGenerator = new umlGenerator(this)
  }

  dehydrate() {
    return {
      timeScroll: toJS(this.timeScroll),
      umlGenerator: toJS(this.umlGenerator)
    }
  }
  
  hydrate(state) {
    Object.assign(this.timeScroll, state.timeScroll)
    Object.assign(this.umlGenerator, state.umlGenerator)
  }
}

export { Store }
