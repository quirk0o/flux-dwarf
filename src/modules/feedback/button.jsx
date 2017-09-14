import React, {PropTypes} from 'react'
import {addFeedback} from './actions'

const Button = ({}) => (
  <button onClick={() => addFeedback('asdfasdfasdf')}>Add Feedback</button>
)

Button.propTypes = {}

export default Button