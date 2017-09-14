import React from 'react'
import {Route} from 'react-router-dom'
import FeedbackContainer from './modules/feedback/feedback-container'

import {Layout} from 'modules/layout'

const App = () => (
  <Layout>
    <Route exact path="/" render={() => <FeedbackContainer />} />
  </Layout>
)

export default App
