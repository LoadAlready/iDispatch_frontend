import React, { Component } from 'react'
import { Provider } from 'react-redux'

import { Route, Switch, Redirect } from 'react-router-dom' 
import Home from '../components/Home'
import ProfileContainer from './ProfileContainer'
import Ticket from '../components/Ticket'


//testing
import JobList from '../components/JobList'

class JobContainer extends Component {
  render() {
    return (
      <fragment>
        <Switch>
          <Route exact path='/profile' component={ProfileContainer} />
          <Route exact path='/ticket' component={Ticket} />
          <Route exact path='/' component={Home} />
        </Switch>
      </fragment>
    )
  }
}

export default JobContainer
