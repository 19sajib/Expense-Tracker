import React from 'react'
import ReactDOM from 'react-dom'
import { SpeechProvider } from '@speechly/react-client'

import { Provider } from './context/context'
import App from './App'
import './index.css' 

ReactDOM.render(
  <SpeechProvider appId="3b9b46d2-18e7-44a3-9800-428fcfb02806" language="en-US">
     <Provider>
      <App /> 
    </Provider>
  </SpeechProvider>,
    document.getElementById('root'))