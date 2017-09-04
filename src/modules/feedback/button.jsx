import React, {PropTypes} from 'react'
import store from 'create-store'

const Button = ({}) => (
  <button onClick={() => store.addFeedback({content: 'asdfasdfasdf'})}>Add Feedback</button>
)

Button.propTypes = {}

export default Button