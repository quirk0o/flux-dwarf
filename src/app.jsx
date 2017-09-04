import React from 'react'
import {Route} from 'react-router-dom'
import FeedbackApp from 'modules/feedback/app'

import {Layout} from 'modules/layout'

const App = () => (
  <Layout>
    <Route exact path="/" render={() => <FeedbackApp />} />
  </Layout>
)

export default App
