import axios from 'axios'
import { toJS, observable, action, computed, autorun, runInAction, extendObservable } from 'mobx'
import * as R from 'ramda'

class TimeScroll {
  // @observable account = null

  constructor(rootStore){
    autorun(() => {
      this.rootStore = 'rootStore'
    })
  }

  /*@action
  async logout() {}

  @computed get updateAccount() {
    return 'computed'
  }*/
}

export default TimeScroll
