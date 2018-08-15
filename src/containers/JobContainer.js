import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom' 
import { connect } from 'react-redux'
import { setUser } from '../actions'


import Home from '../components/Home'
import ProfileContainer from './ProfileContainer'
import Ticket from '../components/Ticket'

//remove this after token set in local storage
const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MzQ3NzYxNDQsInN1YiI6MX0.qAbES5M3tjDw1oGXPd_Rtf-4WVxuTgHuMWjiBq_7n28';

const GET_CURRENT_USER_URL = 'http://localhost:3000/users/current';

const mapStateToProps = (state) => ({
  loggedIn: state.loggedIn,
  userInfo: state.userInfo,
});

const mapDispatchToProps = (dispatch) => ({
  userSet: (user) => dispatch(setUser(user))
});

class JobContainer extends Component {
  componentDidMount(){
    this.getUserInfo();
  }

  getUserInfo = () => {
    let postConfig = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      }
    }
    return fetch(GET_CURRENT_USER_URL, postConfig).then(r => r.json()).then(data => this.props.userSet(data));
  }

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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(JobContainer));
