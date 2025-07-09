import React from 'react'
import Home from './pages/Home/home'
import History from './pages/History/History'
import Projects from './pages/Projects/Projects'
import Settings from './pages/Settings/Settings'
import AnswerPage from './pages/AnswerPage/AnswerPage'
import IntegrationPage from './pages/IntegrationPage/IntegrationPage'
const App = () => {
  return (
    <div>
      <Home/>
      <AnswerPage/>
      <History/>
      <Settings/>
      <Projects/>
      <IntegrationPage/>
    </div>
  )
}

export default App