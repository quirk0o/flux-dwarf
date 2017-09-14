class Store {
  constructor() {
    this._state = {
      feedbacks: [],
      filters: []
    }

    this._listeners = []
  }

  register(callback) {
    this._listeners.push(callback)
    return () => {
      const idx = this._listeners.indexOf(callback)
      this._listeners = [
        ...this._listeners.slice(0, idx),
        ...this._listeners.slice(idx + 1)
      ]
    }
  }

  getState() {
    return this._state
  }

  addFeedback(feedback) {
    this._state.feedbacks = this._state.feedbacks.concat([feedback])
    this._notify()
  }

  _notify() {
    this._listeners.forEach(callback => callback(this._state))
  }
}

const store = new Store()

export default store