import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './Shared/Header'
import Home from'./Home/Home'
import About from './About/About'
import Projects from './Projects/Projects'
const App = () => {
  return (
    <div className="App">
      <Header title="React Static" />
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
      </Switch>
    </div>
  )
}

export default App