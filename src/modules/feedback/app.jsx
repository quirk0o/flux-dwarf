import React, {PropTypes, Component} from 'react'
import store from 'store'
import Feedback from 'modules/feedback/feedback'
import Button from 'modules/feedback/button'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
  }

  componentWillMount() {
    store.register(state => this.setState(state))
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.feedbacks.map(feedback => (
            <Feedback feedback={feedback} />
          ))}
          <li><Button /></li>
        </ul>
      </div>
    )
  }
}

App.propTypes = {}

export default App