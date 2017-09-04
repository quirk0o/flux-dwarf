import React, {PropTypes} from 'react';

const Feedback = ({feedback}) => (
  <li>{feedback.content}</li>
);

Feedback.propTypes = {};

export default Feedback;